import { DocumentNode } from 'graphql'
import { print } from 'graphql/language/printer'

export async function fetchGraphCms<Query>(
  query: DocumentNode,
  { variables }: { variables: any } = {
    variables: {},
  }
): Promise<{ data: Query }> {
  const res = await fetch(
    'https://api-ap-northeast-1.graphcms.com/v2/ckc31uz87017a01z637xfgony/master',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: print(query),
        variables,
      }),
    }
  )
  const json = await res.json()
  if (json.errors) {
    throw new Error(json.errors.toString())
  }
  return json
}
