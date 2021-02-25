
// Main file
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
        </div>

        <div>

        </div>

      </section>
    </div>
  )
}
