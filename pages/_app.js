import { ConfigProvider } from 'antd';
import esES from 'antd/lib/locale/es_ES';
import '../styles/antd.less';

function MyApp({ Component, pageProps }) {
  return (
    <ConfigProvider locale={esES}>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}

export default MyApp
