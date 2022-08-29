import { Squash as Hamburger } from 'hamburger-react'
import PropTypes from 'prop-types'
import React from 'react'
import { useHistory } from 'react-router-dom'
import styles from './Header.module.scss'

export interface HeaderProps {
  openMenu: boolean
setOpenMenu: (v : boolean) => void
}

const Header = ({
  openMenu,
  setOpenMenu,
} : HeaderProps) => {
  const history = useHistory()

  return (
    <header className={styles.header}>
      <Hamburger
        toggled={openMenu}
        toggle={() => setOpenMenu(!openMenu)}
      />
      {/* <Button onClick={() => history.push(routes.dashboard)} className={styles.logoContainer} styleType="main">
        <img className={styles.logo} src={logo} alt="logo" />
      </Button>
      <SideBar isOpened={openMenu} /> */}
    </header>
  )
}

Header.propTypes = {
  openMenu: PropTypes.bool.isRequired,
  setOpenMenu: PropTypes.func.isRequired,
}

export default Header
