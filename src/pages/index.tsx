
// Main file
import Head from 'next/head';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/CountDown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import styled from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styled.container}>
      <Head>
        <title>Moveit</title>
      </Head>

      <ExperienceBar />
      <section>

        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>

        <div>

        </div>

      </section>
    </div>
  )
}
