import React from 'react';
import * as styles from './translation.module.scss';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';

const Translation = () => {
  const languageName = {
    en: 'EN',
    ro: 'RO'
  };

  return (
    <div className={styles.menu}>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <button
              key={language}
              onClick={() => changeLocale(language)}
              className={
                currentLocale === language
                  ? styles.currentLangOption
                  : styles.langOption
              }
            >
              {languageName[language]}
            </button>
          ))
        }
      </IntlContextConsumer>
    </div>
  );
};

export default Translation;
