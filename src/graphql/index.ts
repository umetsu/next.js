import { DocumentNode } from 'graphql'
import { print } from 'graphql/language/printer'

export async function fetchQuery<Query, Variables>(
  query: DocumentNode,
  variables?: Variables
): Promise<Query> {
  const res = await fetch(process.env.NEXT_PUBLIC_RELAY_ENDPOINT!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: print(query),
      variables,
    }),
  })
  const json = await res.json()
  if (json.errors) {
    throw new Error(JSON.stringify(json.errors))
  }
  return json.data
}
