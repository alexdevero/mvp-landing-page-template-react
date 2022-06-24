import { createContext, ReactNode, useCallback, useMemo } from 'react'
import { Toast, useToaster, toast, ToastOptions } from 'react-hot-toast'

import { SnackMessage } from '@components'
import { toastIcons } from '@data'
import { useContext } from '@hooks'
import { ToastIcons } from '@custom-types'

export interface SnackMessageContext {
  toasts: Toast[];
  handleEndPauseToast: () => void;
  handleStartPauseToast: () => void;
  handleToastShow: (text: string, icon?: ToastIcons, duration?: ToastOptions['duration'], options?: ToastOptions) => void;
}

export interface SnackMessageProviderProps {
  children?: ReactNode;
}

const ctx = createContext<SnackMessageContext | undefined>(undefined)

export const SnackMessageProvider = (props: SnackMessageProviderProps) => {
  const { toasts, handlers } = useToaster()
  const { startPause, endPause } = handlers

  const handleToastShow = useCallback((text: string, icon?: ToastIcons, duration?: ToastOptions['duration'], options?: ToastOptions) => {
    const toastOptions: ToastOptions = {
      position: 'top-right',
      ...(icon ? { icon: toastIcons[icon] } : {}),
      ...(duration ? { duration: duration } : {}),
      ...options,
    }
    toast((t) => (
      <SnackMessage text={text} onDismiss={() => toast.dismiss(t.id)} />
    ), toastOptions)
  }, [])

  const value = useMemo(() => ({
    toasts,
    handleEndPauseToast: endPause,
    handleStartPauseToast: startPause,
    handleToastShow,
  }), [endPause, handleToastShow, startPause, toasts])

  return <ctx.Provider value={value}>{props.children}</ctx.Provider>
}

export const useSnackMessage = () => useContext(ctx)
