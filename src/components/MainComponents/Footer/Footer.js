import classNames from 'classnames';
import React from 'react';
import * as globals from '../../../assets/styling/scss/globals.module.scss';
import * as styles from './Footer.module.scss';
const Footer = () => (React.createElement("footer", { className: classNames(globals.fullWidth, styles.footer) },
    React.createElement("div", { className: (styles.section, styles.left) },
        React.createElement("p", null, "\u00A9 2022 PianoBike - non profit organization")),
    React.createElement("div", { className: (styles.section, styles.center) },
        React.createElement("p", null, "CNPJ: 29.418.255-0001-50")),
    React.createElement("div", { className: (styles.section, styles.right) },
        React.createElement("p", null,
            "Produ\u00E7\u00E3o cultural: ",
            React.createElement("a", { href: 'mailto:gestao@ohgloriaproducoes.com.br' }, "gestao@ohgloriaproducoes.com.br")),
        React.createElement("p", null,
            React.createElement("a", { target: "_blank", href: 'https://www.instagram.com/piano.bike/' }, "More info")))));
export default Footer;
