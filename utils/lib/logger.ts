/* eslint-disable no-console */

type Severity = 'log' | 'info' | 'error' | 'warn'

export const logger = (message: unknown, severity: Severity) => {
  switch (severity) {
    case 'log':
      console.log(message)
      break
    case 'info':
      console.info(message)
      break
    case 'error':
      console.error(message)
      break
    case 'warn':
      console.warn(message)
      break
    default:
      console.log(message)
  }
}
