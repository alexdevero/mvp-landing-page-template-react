import { memo } from 'react'

import styles from './snack-message.module.css'

export interface SnackMessageProps {
  text: string;
  onDismiss: () => void;
}

export const SnackMessage = memo((props: SnackMessageProps) => (
  <span className={styles.toastWrapper}>
    <span className={styles.toastText}>{props.text}</span>
    <button className={styles.toastCancelIcon} onClick={props.onDismiss}>
      &times;
    </button>
  </span>
))

SnackMessage.displayName = 'SnackMessage'
