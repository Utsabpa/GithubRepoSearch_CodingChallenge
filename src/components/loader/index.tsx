import styles from './loader.module.scss';
import { ILoaderProps } from './types';

// Loader component rendering the Loader
const Loader = ({ className }: ILoaderProps) => {
  return (
    <div
      className={`${styles['lds-circle']} ${className ?? ''}`}
      data-cy="loader">
      <div></div>
    </div>
  );
};

export default Loader;
