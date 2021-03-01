import React, { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styled from '../styles/components/Profile.module.css';

export const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styled.profileContainer}>
      <img src="https://github.com/borgesjuniior.png" alt="Júnior" />
      <div>
        <strong>borgesjuniior</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}
