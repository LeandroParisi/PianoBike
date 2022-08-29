import { Squash as Hamburger } from 'hamburger-react';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Header.module.scss';
const Header = ({ openMenu, setOpenMenu, }) => {
    const history = useHistory();
    return (React.createElement("header", { className: styles.header },
        React.createElement(Hamburger, { toggled: openMenu, toggle: () => setOpenMenu(!openMenu) })));
};
Header.propTypes = {
    openMenu: PropTypes.bool.isRequired,
    setOpenMenu: PropTypes.func.isRequired,
};
export default Header;
