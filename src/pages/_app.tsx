// This file contains all the components that are repeated/shared within the application

import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
