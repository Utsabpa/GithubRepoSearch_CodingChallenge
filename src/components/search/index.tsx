import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ThemeContext from '../../context/theme';
import Toggle from '../toggle';
import styles from './search.module.scss';
import { ISearchProps } from './types';

const Search = ({ onSubmit }: ISearchProps) => {
  // Taking in the translator from i18next package
  const { t } = useTranslation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [value, setValue] = useState('');

  const onTextChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.trim()) {
      onSubmit(value);
    }
  };
  return (
    <div className={`${styles['container']} ${styles[theme]}`}>
      <form className={styles['form']} onSubmit={onFormSubmit} data-cy="user-form">
        <input
          type="text"
          className={styles['search']}
          value={value}
          onChange={onTextChange}
          data-cy="user-input"
        />
        <button
          className={styles['search-button']}
          data-cy="user-submit">
          {t('searchText')}
        </button>
      </form>
      <div className={styles["toggle"]}>
        <Toggle onToggle={() => toggleTheme()} />
      </div>
    </div>
  );
};

export default Search;
