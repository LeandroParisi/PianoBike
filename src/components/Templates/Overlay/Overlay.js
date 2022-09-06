import React from 'react';
import * as styles from './Overlay.module.scss';
export const Overlay = ({ close, }) => (React.createElement("div", { className: styles.overlay, onClick: () => close && close(false) }));
