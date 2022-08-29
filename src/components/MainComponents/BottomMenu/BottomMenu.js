import { Box, Modal, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import * as styles from './BottomMenu.module.scss';
const BottomMenu = ({}) => {
    const [openedModals, setOpenedModals] = useState({ bePart: false, knowMore: false });
    function handleButtonClick(key, open) {
        return () => {
            setOpenedModals({
                ...openedModals,
                [key]: open,
            });
        };
    }
    function renderButton(text, config) {
        return (React.createElement(React.Fragment, null,
            React.createElement(Button, { variant: 'contained', size: 'medium', color: 'primary', className: styles.buttons, disabled: config.disabled, onClick: config.open }, text),
            React.createElement(Modal, { open: config.isOpened, onClose: config.close, "aria-labelledby": "modal-modal-title", "aria-describedby": "modal-modal-description" },
                React.createElement(Box, null,
                    React.createElement(Typography, { id: styles.modalTitle, variant: "h6", component: "h2" }, "Text in a modal"),
                    React.createElement(Typography, { id: "modal-modal-description", sx: { mt: 2 } }, "Duis mollis, est non commodo luctus, nisi erat porttitor ligula.")))));
    }
    return (React.createElement("nav", { className: styles.bottomMenu },
        renderButton('Saiba mais', {
            disabled: false,
            isOpened: openedModals.knowMore,
            open: handleButtonClick('knowMore', true),
            close: handleButtonClick('knowMore', false),
        }),
        renderButton('Faça parte!', {
            disabled: false,
            isOpened: openedModals.bePart,
            open: handleButtonClick('bePart', true),
            close: handleButtonClick('bePart', false),
        })));
};
export default BottomMenu;
