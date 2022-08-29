import React from 'react'
import * as styles from './Overlay.module.scss'

export interface OverlayProps {
  close?: (v : boolean) => void
}

export const Overlay = ({
  close,
} : OverlayProps) => (
  <div
    className={styles.overlay}
    onClick={() => close && close(false)}
  />
)
