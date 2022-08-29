import * as React from 'react';
import '../assets/styling/scss/reset.scss';
import * as styles from './Home/Styles/index.module.scss';
import './Home/Styles/youtubeVideo.module.scss';
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
const LandingPage = () => (React.createElement("main", { className: styles.mainPage },
    React.createElement("iframe", { className: styles.mainVideo, src: `https://www.youtube.com/embed/GsqhJHC_wgI?P${ParseObjectToStringInfo(youtubeVideoInfo)}`, title: "YouTube video player", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" })));
export default LandingPage;
export const Head = () => (React.createElement(React.Fragment, null,
    React.createElement("title", null, "PianoBike"),
    React.createElement("meta", { name: "author", content: "Leandro Parisi" }),
    React.createElement("meta", { name: "description", content: "First LATAM piano on wheels. Changing the way street are is done on our continent " })));
