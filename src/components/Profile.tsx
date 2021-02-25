import React from 'react';
import styled from '../styles/components/Profile.module.css';

export const Profile: React.FC = () => {
  return (
    <div className={styled.profileContainer}>
      <img src="https://github.com/borgesjuniior.png" alt="Júnior" />
      <div>
        <strong>borgesjuniior</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level 1
        </p>
      </div>
    </div>
  );
}
