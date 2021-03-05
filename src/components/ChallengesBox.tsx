import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export const ChallengesBox: React.FC = () => {
  const { activeChallenge, resetChallenge, completedChallenge }  = useContext(ChallengesContext);
  const { resetCoundown } = useContext(CountdownContext)

  function handleChallengeSucceeded() {
    resetChallenge()
    completedChallenge()
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCoundown();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      { activeChallenge? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount}</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
            >
              Falhei</button>

            <button
              type="button" 
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSucceeded}
            >
              Completei</button>

          </footer>
        </div>
      ) :(
          <div className={styles.challengeNotActive}>
            <strong>Inicie um ciclo para receber desafios a serem completados</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level-up"/>
              Avance de levels completando desafios.
            </p>
        </div>
      ) }
    </div>
  )
}
