import type { AgentDataExport } from '@web3-storage/access/types'
import type { ServiceConfig } from './service'

import { StoreIndexedDB } from '@web3-storage/access/stores/store-indexeddb'
import { Client, create as createW3UPClient } from '@web3-storage/w3up-client'
import { Account } from '@web3-storage/w3up-client/account'
import { Space } from '@web3-storage/w3up-client/space'
import { createServiceConf } from './service'

export * from '@web3-storage/w3up-client/types'
export { Client, Account, Space, ServiceConfig }

const DB_NAME = '@w3ui'
const DB_STORE_NAME = 'core'

export interface ContextState {
  /**
   * The w3up client representing the current user agent (this device).
   */
  client?: Client
  /**
   * Accounts this agent is authorized to act as.
   */
  accounts: Account[]
  /**
   * Spaces available to this agent.
   */
  spaces: Space[]
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ContextActions {}

export interface CreateClientOptions extends ServiceConfig {
  events?: EventTarget
}

/**
 * An IndexedDB store that dispatches an event on the passed EventTarget when
 * `save` is called.
 */
class IndexedDBEventDispatcherStore extends StoreIndexedDB {
  #events: EventTarget

  constructor (name: string, events: EventTarget) {
    super(name, { dbVersion: 1, dbStoreName: DB_STORE_NAME })
    this.#events = events
  }

  async save (data: AgentDataExport): Promise<void> {
    await super.save(data)
    this.#events.dispatchEvent(new CustomEvent('store:save', { detail: data }))
  }
}

/**
 * Create an agent for managing identity. It uses RSA keys that are stored in
 * IndexedDB as unextractable `CryptoKey`s.
 */
export async function createClient (
  options?: CreateClientOptions
): Promise<{ client: Client, events: EventTarget }> {
  const dbName = `${DB_NAME}${options?.servicePrincipal != null ? '@' + options?.servicePrincipal.did() : ''}`
  const events = options?.events ?? new EventTarget()
  const store = new IndexedDBEventDispatcherStore(dbName, events)
  const serviceConf = createServiceConf(options)
  const client = await createW3UPClient({ store, serviceConf })
  return { client, events }
}
