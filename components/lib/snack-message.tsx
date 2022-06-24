import { memo } from 'react'

import './../../styles/components/snack-message.module.css'

export interface SnackMessageProps {
  text: string;
  onDismiss: () => void;
}

export const SnackMessage = memo((props: SnackMessageProps) => (
  <span className="toast-wrapper">
    <span className="toast-text">{props.text}</span>
    <button className="toast-cancel-icon" onClick={props.onDismiss}>
      &times;
    </button>
  </span>
))

SnackMessage.displayName = 'SnackMessage'
