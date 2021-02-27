
import React, { useState, createContext, ReactNode } from 'react';

interface ChallengesProviderProps { //
  children: ReactNode;
}

interface ChallengeContextData { //Says the format that my context will follow
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  levelUp: () => (void);
  startNewChallenge: () => (void);

}

export const ChallengesContext = createContext({} as ChallengeContextData);

export const ChallengeProvider: React.FC<ChallengesProviderProps> = ({ children }) => {
  const [ level, setLevel ] = useState(1);
  const [ currentExperience, setCurrentExperience ] = useState(0);
  const [ challengesCompleted, setChallengesCompleted ] = useState(0);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    console.log('newChallenge')
  }


  return (
    <ChallengesContext.Provider value={{level, currentExperience, challengesCompleted, levelUp, startNewChallenge }}>
      {children}
    </ChallengesContext.Provider>
  )
;}
