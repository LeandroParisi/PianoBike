import { ThemeProvider, Typography } from '@mui/material'
import classNames from 'classnames'
import type { HeadFC } from 'gatsby'
import * as React from 'react'
import '../assets/styling/scss/reset.scss'
import { theme } from '../assets/styling/themes/Mui/createtheme'
import ActionButtons from '../components/MainComponents/ActionButtons/ActionButtons'
import Footer from '../components/MainComponents/Footer/Footer'
import { Overlay } from '../components/Templates/Overlay/Overlay'
import * as styles from './Home/Styles/index.module.scss'

const youtubeVideoInfo = {
  controls: 0,
  autoplay: 0,
  rel: 0,
  mute: 1,
  modestbranding: 1,
  showinfo: 0,
}

function ParseObjectToStringInfo<T>(obj : Record<string, T>) {
  return Object.entries(obj).map(([k, v]) => `${k}=${v}`).join('&')
}

const LandingPage = () => (
  <ThemeProvider theme={theme}>
    <main className={styles.mainPage}>
      <Overlay />
      <iframe
        className={styles.mainVideo}
        src={`https://www.youtube.com/embed/GsqhJHC_wgI?P${ParseObjectToStringInfo(youtubeVideoInfo)}`}
        title="Promo video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      <article className={classNames(styles.pitchPhrase)}>
        <Typography variant="h1" component="h1">O 1º sobre rodas da América Latina!</Typography>
        <Typography variant="h1" component="h2">Em uma nova etapa: agora você pode fazer parte desta revolução!</Typography>
      </article>
      <ActionButtons />
      <Footer />
    </main>
  </ThemeProvider>
)

export default LandingPage

export const Head: HeadFC = () => (
  <>
    <title>PianoBike</title>
    <meta name="author" content="Leandro Parisi" />
    <meta name="description" content="First LATAM piano on wheels. Changing the way street are is done on our continent " />
  </>
)
