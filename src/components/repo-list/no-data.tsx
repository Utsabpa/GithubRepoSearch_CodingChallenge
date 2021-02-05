import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './list.module.scss';

// Rendered in case of no data
// Using React.memo to cache the result as it doesn't need to be evaluated again and again
const NoData = React.memo(() => {
  const { t } = useTranslation();
  return (
    <div className={styles['no-data']} data-cy="no-data-found">
      {t("noDataFound")}
    </div>
  );
});

export default NoData; 