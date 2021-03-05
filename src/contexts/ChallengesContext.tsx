
import React, { useState, createContext, ReactNode, useEffect } from 'react';
import Cookie from 'js-cookie';
import challenges from '../../Challenges.json';
import { LevelUpModal } from '../components/LevelUpModal';

interface ChallengesProviderProps { //
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengeCompleted: number;
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
  experienceToNextLevel: number;
  levelUp: () => (void);
  startNewChallenge: () => (void);
  resetChallenge: () => (void);
  completedChallenge: () => (void);

}

export const ChallengesContext = createContext({} as ChallengeContextData);

export const ChallengeProvider: React.FC<ChallengesProviderProps> = ({ children, ...rest}) => {
  const [ level, setLevel ] = useState(rest.level ?? 1); //If the rest.{props} does not exist in the cookie it assumes a default value
  const [ currentExperience, setCurrentExperience ] = useState(rest.currentExperience ?? 0);
  const [ challengesCompleted, setChallengesCompleted ] = useState(rest.challengeCompleted ?? 0);
  const [ activeChallenge, setActiveChallenge ] = useState(null);
  const [ isLevelModalOpen, setIsLevelModalOpen] = useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();//Ask for user permission to show pop up
  }, []) //[] Execute only one time when the component is showed on screen

  useEffect(() => {
    Cookie.set('level', level.toString());
    Cookie.set('currentExperience', currentExperience.toString());
    Cookie.set('challengesCompleted', challengesCompleted.toString());

  }, [level, currentExperience, challengesCompleted]);

  function levelUp() {
    setLevel(level + 1);
    setIsLevelModalOpen(true);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length); // Create a random challenge
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play(); //plays a audio when starts a new challenge

    if (Notification.permission == 'granted') {
      new Notification('Novo desafio😴', {
        body: `Valendo ${challenge.amount}`
      })
    }
  }

  function resetChallenge() { //returns the status to the original value if the user clicks fail
    setActiveChallenge(null);
  }

  function completedChallenge() {
    if(!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience -= experienceToNextLevel; //
      levelUp(); //If the final experience is greater than or equal to the experience for the next level, the user will level up
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);

  }


  return (
    <ChallengesContext.Provider value={{
      level,
      currentExperience,
      challengesCompleted,
      levelUp,
      startNewChallenge,
      activeChallenge,
      resetChallenge,
      experienceToNextLevel,
      completedChallenge

    }}>
      {children}
      {isLevelModalOpen && <LevelUpModal/>}
      </ChallengesContext.Provider>
  )
;}
