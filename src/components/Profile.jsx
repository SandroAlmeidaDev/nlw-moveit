import { useContext } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

const Profile = () => {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/58606794?s=460&u=9d6f9a01453b3700d76faa6acde0b3663d5527a6&v=4" alt="Sandro Almeida da Silva"/>
            <div>
                <strong>Sandro Almeida da Silva</strong>
                <p>
                    <img src="icons/level.svg" alt="Level Icon"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}
export default Profile;
