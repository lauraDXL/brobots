import React from 'react';
import sponsori from '../assets/sponsors.png';
import * as styles from '../styles/layout.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <img src={sponsori} alt='sponsori' />
    </div>
  );
};

export default Footer;
