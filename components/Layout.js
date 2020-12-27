import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import '../styles/global.css';

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>World ranks</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="font-sans pb-10">
        {children}
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.object,
};

Layout.defaultProps = {
  children: {},
};

export default Layout;
