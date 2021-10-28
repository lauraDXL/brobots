import React from 'react';
import * as styles from '../styles/layout.module.scss';
import logo from '../assets/logo.png';
import { FaRobot } from 'react-icons/fa';
import Translation from './translation/translation_menu';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import { stack as Menu } from 'react-burger-menu';
import '../styles/menu.css';

const Header = props => {
  const { path } = props;

  const currentPage = path && path.split('/').reverse()[1];

  return (
    <>
      <div className={styles.header}>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
        <div className={styles.links}>
          <Link
            activeClassName={styles.active}
            className={styles.normal}
            to='/'
          >
            {(currentPage === 'en' || currentPage === 'ro') && <FaRobot />}
            <FormattedMessage id='home' />
          </Link>
          <Link
            activeClassName={styles.active}
            className={styles.normal}
            to='/team'
          >
            {currentPage === 'team' && <FaRobot />}
            <FormattedMessage id='team' />
          </Link>
          <Link
            activeClassName={styles.active}
            className={styles.normal}
            to='/alumni'
          >
            {currentPage === 'alumni' && <FaRobot />}
            <FormattedMessage id='alumni' />
          </Link>
          <div className={styles.events}>
            <button
              className={
                currentPage === 'media' ||
                currentPage === 'demos' ||
                currentPage === 'events'
                  ? styles.active
                  : styles.normal
              }
            >
              {(currentPage === 'media' ||
                currentPage === 'demos' ||
                currentPage === 'events') && <FaRobot />}
              <FormattedMessage id='events' />
            </button>
            <div className={styles.menu}>
              <Link className={styles.normal} to='/media'>
                <FormattedMessage id='media' />
              </Link>
              <Link className={styles.normal} to='/demos'>
                <FormattedMessage id='demos' />
              </Link>
              <Link className={styles.normal} to='/events'>
                <FormattedMessage id='others' />
              </Link>
            </div>
          </div>
          <Link
            activeClassName={styles.active}
            className={styles.normal}
            to='/results'
          >
            {currentPage === 'results' && <FaRobot />}
            <FormattedMessage id='results' />
          </Link>
          <Link
            activeClassName={styles.active}
            className={styles.normal}
            to='/contact'
          >
            {currentPage === 'contact' && <FaRobot />}
            <FormattedMessage id='contact' />
          </Link>
          <Translation />
        </div>
      </div>
      <div className={styles.row}>
        <Menu className={styles.mobileMenu}>
          <Link
            activeClassName={styles.active}
            className={styles.normal}
            to='/'
          >
            <FormattedMessage id='home' />
          </Link>
          <Link
            activeClassName={styles.active}
            className={styles.normal}
            to='/team'
          >
            <FormattedMessage id='team' />
          </Link>
          <Link
            activeClassName={styles.active}
            className={styles.normal}
            to='/alumni'
          >
            <FormattedMessage id='alumni' />
          </Link>
          <Link
            to='/media'
            activeClassName={styles.active}
            className={styles.normal}
          >
            <FormattedMessage id='media' />
          </Link>
          <Link
            activeClassName={styles.active}
            className={styles.normal}
            to='/demos'
          >
            <FormattedMessage id='demos' />
          </Link>
          <Link
            activeClassName={styles.active}
            className={styles.normal}
            to='/events'
          >
            <FormattedMessage id='other_events' />
          </Link>
          <Link
            activeClassName={styles.active}
            className={styles.normal}
            to='/results'
          >
            <FormattedMessage id='results' />
          </Link>
          <Link
            activeClassName={styles.active}
            className={styles.normal}
            to='/contact'
          >
            
            <FormattedMessage id='contact' />
          </Link>
          <Translation />
        </Menu>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
      </div>
    </>
  );
};

export default Header;
