// https://github.com/htsh-tsyk/nextjs-relay-hook-ssg-examples/blob/master/with-relay-experimental/lib/relay.ts
import { useMemo } from 'react'
import {
  Environment,
  Network,
  RecordSource,
  RequestParameters,
  Store,
  Variables,
} from 'relay-runtime'
import RelayModernEnvironment from 'relay-runtime/lib/store/RelayModernEnvironment'
import { RecordMap } from 'relay-runtime/lib/store/RelayStoreTypes'

let relayEnvironment: Environment

// Define a function that fetches the results of an operation (query/mutation/etc)
// and returns its results as a Promise
async function fetchQuery(operation: RequestParameters, variables: Variables) {
  const response = await fetch(process.env.NEXT_PUBLIC_RELAY_ENDPOINT!, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }, // Add authentication and other headers here
    body: JSON.stringify({
      query: operation.text, // GraphQL text from input
      variables,
    }),
  })
  return response.json()
}

function createEnvironment(): Environment {
  return new Environment({
    // Create a network layer from the fetch function
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),
  })
}

export function initEnvironment(
  initialRecords: RecordMap = {}
): RelayModernEnvironment {
  // Create a network layer from the fetch function
  const environment = relayEnvironment ?? createEnvironment()

  // If your page has Next.js data fetching methods that use Relay, the initial records
  // will get hydrated here
  if (initialRecords) {
    environment.getStore().publish(new RecordSource(initialRecords))
  }
  // For SSG and SSR always create a new Relay environment
  if (typeof window === 'undefined') return environment
  // Create the Relay environment once in the client
  if (!relayEnvironment) relayEnvironment = environment

  return relayEnvironment
}

export function useEnvironment(
  initialRecords: RecordMap
): RelayModernEnvironment {
  return useMemo(() => initEnvironment(initialRecords), [initialRecords])
}
