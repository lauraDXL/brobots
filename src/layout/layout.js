import React from 'react';
import Header from './header';
import Footer from './footer';
import Helmet from 'react-helmet';
import * as styles from '../styles/layout.module.scss';
import { useSiteMetadata } from '../hooks/metadata';
import '../styles/global.scss';

const Layout = props => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <Header {...props} />
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
        <link
          href='https://fonts.googleapis.com/css?family=Montserrat'
          rel='stylesheet'
        />
      </Helmet>
      <div className={styles.content}>{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
