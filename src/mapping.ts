import {
  Signalled as SignalledEvent,
  Burned as BurnedEvent,
  Collected as CollectedEvent
} from "../generated/Curation/Curation"
import {
  Signalled,
  Burned,
  Collected
  
} from "../generated/schema"

export function handleSignalled(event: SignalledEvent): void {
  let entity = new Signalled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.curator = event.params.curator
  entity.subgraphDeploymentID = event.params.subgraphDeploymentID
  entity.tokens = event.params.tokens
  entity.signal = event.params.signal
  entity.curationTax = event.params.curationTax
  entity.save()
}

export function handleBurned(event: BurnedEvent): void {
  let entity = new Burned(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.curator = event.params.curator
  entity.subgraphDeploymentID = event.params.subgraphDeploymentID
  entity.tokens = event.params.tokens
  entity.signal = event.params.signal
  entity.save()
}

export function handleCollected(event: CollectedEvent): void {
  let entity = new Collected(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.subgraphDeploymentID = event.params.subgraphDeploymentID
  entity.tokens = event.params.tokens
  entity.save()
}
