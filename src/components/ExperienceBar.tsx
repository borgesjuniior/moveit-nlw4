import React from 'react';
import Styles from '../styles/components/ExperienceBar.module.css';

export const ExperienceBar: React.FC = () => {
  return (
    <header className={Styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: '60%' }}></div>

        <span className={Styles.currentExperience} style={{ left: '60%' }}>300 xp</span>
      </div>
      <span>600 xp</span>
    </header>
  )
}
