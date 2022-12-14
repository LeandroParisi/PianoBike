import { ThemeProvider, Typography } from '@mui/material';
import classNames from 'classnames';
import * as React from 'react';
import '../assets/styling/scss/reset.scss';
import { theme } from '../assets/styling/themes/Mui/createtheme';
import ActionButtons from '../components/MainComponents/ActionButtons/ActionButtons';
import Footer from '../components/MainComponents/Footer/Footer';
import { Overlay } from '../components/Templates/Overlay/Overlay';
import * as styles from './Home/Styles/index.module.scss';
const youtubeVideoInfo = {
    controls: 0,
    autoplay: 0,
    rel: 0,
    mute: 1,
    modestbranding: 1,
    showinfo: 0,
};
function ParseObjectToStringInfo(obj) {
    return Object.entries(obj).map(([k, v]) => `${k}=${v}`).join('&');
}
const LandingPage = () => (React.createElement(ThemeProvider, { theme: theme },
    React.createElement("main", { className: styles.mainPage },
        React.createElement(Overlay, null),
        React.createElement("iframe", { className: styles.mainVideo, src: `https://www.youtube.com/embed/GsqhJHC_wgI?P${ParseObjectToStringInfo(youtubeVideoInfo)}`, title: "Promo video", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" }),
        React.createElement("article", { className: classNames(styles.pitchPhrase) },
            React.createElement(Typography, { variant: "h1", component: "h1" }, "O 1\u00BA sobre rodas da Am\u00E9rica Latina!"),
            React.createElement(Typography, { variant: "h1", component: "h2" }, "Em uma nova etapa: agora voc\u00EA pode fazer parte desta revolu\u00E7\u00E3o!")),
        React.createElement(ActionButtons, null),
        React.createElement(Footer, null))));
export default LandingPage;
export const Head = () => (React.createElement(React.Fragment, null,
    React.createElement("title", null, "PianoBike"),
    React.createElement("meta", { name: "author", content: "Leandro Parisi" }),
    React.createElement("meta", { name: "description", content: "First LATAM piano on wheels. Changing the way street are is done on our continent " })));
