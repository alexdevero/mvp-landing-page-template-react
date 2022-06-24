import { FC, ReactNode, createContext, useMemo, useCallback } from 'react'

import { useContext } from '@hooks'
import { logger } from '@utils'

type Storage = 'local' | 'session'

export interface StorageContext {
  deleteStorageItem: (key: string | number | boolean, storage: Storage) => Promise<void>;
  getStorageItem: (key: string | number | boolean, storage: Storage) => Promise<unknown>;
  setStorageItem: (key: string | number | boolean, value: unknown, storage: Storage) => Promise<void>;
}

const ctx = createContext<StorageContext | undefined>(undefined)
ctx.displayName = 'Storage'

export interface StorageProviderProps {
  children?: ReactNode;
}

export const StorageProvider: FC<StorageProviderProps> = (props) => {
  const getStorage = useCallback((storage: Storage) => {
    if (storage === 'local') {
      return localStorage
    } else {
      return sessionStorage
    }
  }, [])

  const getStorageItem = useCallback(async (key: string | number | boolean, storage: Storage) => {
    const currentStorage = getStorage(storage)

    try {
      return currentStorage.getItem(key?.toString())
    } catch (e) {
      logger(e, 'log')
      return undefined
    }
  }, [getStorage])

  const setStorageItem = useCallback(async (key: string | number | boolean, value: unknown, storage: Storage) => {
    const currentStorage = getStorage(storage)
    const val = typeof value === 'string' ? value : JSON.stringify(value)

    try {
      currentStorage.setItem(key?.toString(), val)
    } catch (e) {
      logger(e, 'log')
    }
  }, [getStorage])

  const deleteStorageItem = useCallback(async (key: string | number | boolean, storage: Storage) => {
    const currentStorage = getStorage(storage)

    try {
      currentStorage.removeItem(key?.toString())
    } catch (e) {
      logger(e, 'log')
    }
  }, [getStorage])

  const value: StorageContext = useMemo(
    () => ({
      deleteStorageItem,
      getStorageItem,
      setStorageItem
    }),
    [deleteStorageItem, getStorageItem, setStorageItem]
  )
  return <ctx.Provider value={value}>{props.children}</ctx.Provider>
}

export const useStorage = () => useContext(ctx)
