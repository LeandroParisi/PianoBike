import classNames from 'classnames'
import React from 'react'
import * as globals from '../../../assets/styling/scss/globals.module.scss'
import * as styles from './Footer.module.scss'

const Footer = () => (
    <footer className={classNames(globals.fullWidth, styles.footer)}>
      <div className={classNames(styles.section, styles.left)}>
        <p>© 2022 PianoBike Org.</p>
      </div>
      <div className={classNames(styles.section, styles.center)}>
        <p>CNPJ: 29.418.255-0001-50</p>
      </div>
      <div className={classNames(styles.section, styles.right)}>
        <p>Produção cultural: <a href='mailto:gestao@ohgloriaproducoes.com.br'>gestao@ohgloriaproducoes.com.br</a></p>
        <p><a target="_blank" href='https://www.instagram.com/piano.bike/'>More info</a></p>
      </div>
    </footer>
)

export default Footer
