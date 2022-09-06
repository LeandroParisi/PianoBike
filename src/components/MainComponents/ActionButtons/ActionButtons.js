/* eslint-disable max-len */
import { Box, Modal } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import * as styles from './ActionButtons.module.scss';
const formUrl = 'http://eepurl.com/h9Zzv5';
const knowMoreButtonInfo = {
    title: 'Somos o promotor de uma revolução na arte de rua!',
    description: ['O PianoBike nasceu do desejo de mudar a forma como a arte de rua é feita na América Latina!', 'Somos a ponte entre os artistas, o público, o governo e as empresas.', 'Já fizemos uma mini revolução no Rio de Janeiro em 2019 e 2020 e agora, pós pandemia, estamos entrando de cabeça no mundo online e nossa escala agora é global!', 'Quer fazer parte desta revolução??', 'Clique em "FAÇA PARTE" para saber como.'],
};
const ActionButtons = () => {
    const [openedModals, setOpenedModals] = useState({ bePart: false, knowMore: false });
    function handleButtonClick(key, open) {
        return () => {
            setOpenedModals({
                ...openedModals,
                [key]: open,
            });
        };
    }
    function renderButton(label, config) {
        return (React.createElement(React.Fragment, null,
            React.createElement(Button, { variant: 'contained', size: 'medium', color: 'primary', className: styles.buttons, disabled: config.disabled, onClick: config.open }, label),
            config.info
                && React.createElement(Modal, { open: config.isOpened, onClose: config.close, "aria-labelledby": "modal-modal-title", "aria-describedby": "modal-modal-description" },
                    React.createElement(Box, null,
                        React.createElement("h3", { id: styles.modalTitle }, config.info.title),
                        React.createElement("div", null, config.info.description.map((p) => React.createElement("p", null, p)))))));
    }
    return (React.createElement("nav", { className: styles.bottomMenu },
        renderButton('Saiba mais', {
            disabled: false,
            isOpened: openedModals.knowMore,
            open: handleButtonClick('knowMore', true),
            close: handleButtonClick('knowMore', false),
            info: knowMoreButtonInfo,
        }),
        renderButton('Faça parte!', {
            disabled: false,
            isOpened: openedModals.bePart,
            open: () => window.open(formUrl, '_blank').focus(),
            close: handleButtonClick('bePart', false),
        })));
};
export default ActionButtons;
