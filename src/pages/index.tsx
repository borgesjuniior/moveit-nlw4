
// Main file
import { CompletedChallenges } from '../components/CompletedChallenges';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import styled from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styled.container}>
      <ExperienceBar />
      <section>

        <div>
          <Profile />
          <CompletedChallenges />
        </div>

        <div>

        </div>

      </section>
    </div>
  )
}
