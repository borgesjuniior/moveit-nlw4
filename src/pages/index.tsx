
// Main file
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { ChallengesBox } from '../components/ChallengesBox';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/CountDown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { CountdownProvider } from '../contexts/CountdownContext';
import styles from '../styles/pages/Home.module.css';
import { ChallengeProvider } from '../contexts/ChallengesContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengeProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengeCompleted={props.challengesCompleted}
      >

      <div className={styles.container}>
        <Head>
          <title>Moveit</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider> {/* CountdownProvider depends ChallengeProvider */}
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>

          <div>
            <ChallengesBox />
          </div>
        </section>
        </CountdownProvider>
      </div>
    </ChallengeProvider>
  )
}

// This function is triggered before the page is loaded (backend next.js)
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { level, currentExperience, challengesCompleted} = context.req.cookies; //get cookies from page

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
