import '../styles/global.scss';

import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <head>
        <title>Skin Gamer Token</title>
      </head>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
