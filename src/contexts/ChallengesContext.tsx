
import React, { useState, createContext, ReactNode } from 'react';
import challenges from '../../Challenges.json';

interface ChallengesProviderProps { //
  children: ReactNode;
}

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengeContextData { //Says the format that my context will follow
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  levelUp: () => (void);
  startNewChallenge: () => (void);
  resetChallenge: () => (void);
}

export const ChallengesContext = createContext({} as ChallengeContextData);

export const ChallengeProvider: React.FC<ChallengesProviderProps> = ({ children }) => {
  const [ level, setLevel ] = useState(1);
  const [ currentExperience, setCurrentExperience ] = useState(0);
  const [ challengesCompleted, setChallengesCompleted ] = useState(0);
  const [ activeChallenge, setActiveChallenge ] = useState(null);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length); // Create a random challenge
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);
  }

  function resetChallenge() { //returns the status to the original value if the user clicks fail
    setActiveChallenge(null);
  }


  return (
    <ChallengesContext.Provider value={{
      level,
      currentExperience,
      challengesCompleted,
      levelUp,
      startNewChallenge,
      activeChallenge,
      resetChallenge

    }}>
      {children}
    </ChallengesContext.Provider>
  )
;}
