import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './toggle.module.scss';
import IToggleProps from './types';

const Toggle = (props: IToggleProps) => {
  // using useTranslation for taking string from the json file
  const { t } = useTranslation();
  const [value, setValue] = useState(true);

  const onToggle = (e: any) => {
    if (!props.onToggle) return;
    setValue(!value);
    e.nativeEvent.stopImmediatePropagation();
    e.stopPropagation();
    props.onToggle(value);
  };
  // Though a useless callback but we are caching it as well 
  const notifyChange = useCallback(() => null, []);
  return (
    <span className={styles["switch"]} onClick={onToggle} data-cy="toggle">
      <input type="checkbox" checked={value} onChange={notifyChange} />
      <span>
        <span className={`${styles["slider"]} ${styles["round"]}`}></span>
        <span className={styles['on-text']}>{t('light')}</span>
        <span className={styles['off-text']}>{t('dark')}</span>
      </span>
    </span>
  );
};

export default Toggle;