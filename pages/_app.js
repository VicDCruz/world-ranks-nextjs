import React from 'react';
import { ConfigProvider } from 'antd';
import App from 'next/app';
import esES from 'antd/lib/locale/es_ES';
import Layout from '../components/Layout';
import '../styles/antd.less';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ConfigProvider locale={esES}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ConfigProvider>
    );
  }
}

export default MyApp;
