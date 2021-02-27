// This file contains all the components that are repeated/shared within the application

import { ChallengeProvider } from '../contexts/ChallengesContext';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengeProvider>
      <Component {...pageProps} />
    </ChallengeProvider>
  )

}

export default MyApp
