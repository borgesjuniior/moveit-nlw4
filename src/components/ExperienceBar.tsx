import React from 'react';

export const ExperienceBar: React.FC = () => {
  return (
    <header className="experience-bar">
      <span>0 xp</span>
      <div>
        <div style={{ width: '60%' }}></div>

        <span className="current-experience" style={{ left: '60%' }}>300 xp</span>
      </div>
      <span>600 xp</span>
    </header>
  )
}
