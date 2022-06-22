import { useEffect } from "react"

export const useWindowEvent = <K extends string>(
  type: K,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | EventListenerOptions
) => {
  useEffect(() => {
    window.addEventListener(type, listener, options)

    return () => window.removeEventListener(type, listener, options)
  }, [listener, options, type])
}
