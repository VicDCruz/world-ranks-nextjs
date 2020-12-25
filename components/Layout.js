import Head from 'next/head';
import '../styles/global.css';

function Layout(props) {
    return (
        <div>
            <Head>
                <title>World ranks</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="font-sans">
                {props.children}
            </div>
        </div>
    )
}

export default Layout