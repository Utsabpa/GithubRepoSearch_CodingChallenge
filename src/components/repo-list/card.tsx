import { useContext } from 'react';
import ThemeContext from '../../context/theme';
import { IRepoCard } from './types';
import styles from './list.module.scss';

// Card component: Showing the information about the repository
// For now, I am only showing the repository name
const Card = ({ data, className }: IRepoCard) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${styles['card']} ${className ?? ''} ${styles[theme]}`} >
      <div className={styles['name']}>{data.name}</div>
    </div>
  );
};

export default Card;
