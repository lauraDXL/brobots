import React from 'react';
import Layout from '../layout/layout';
import * as styles from '../styles/event.module.scss';
import { events } from '../static_data/demo';
import { Link } from 'gatsby';

const Demos = props => {
  const { language } = props.pageContext;

  return (
    <Layout {...props}>
      <div className={styles.container}>
        {events.map((event, id) => (
          <div key={id} className={styles.card}>
            <div className={styles.background}>
              <Link to={`/${language}/event`} state={{ id, type: 'demo' }}>
                {event.cover && (
                  <img src={event.cover} alt={`${event.cover}`} />
                )}
              </Link>
            </div>
            <div className={styles.info}>
              <Link to={`/${language}/event`} state={{ id, type: 'demo' }}>
                <h4>
					{language === 'en' && event.title_en
                    ? event.title_en
                    : event.title}</h4>
              </Link>

              <p className={styles.location}>
                {language === 'en' && event.location_en
                  ? event.location_en
                  : event.location}
              </p>
			  
              <p>
                {language === 'en' && event.description_en
                  ? event.description_en.slice(0, 100)
                  : event.description.slice(0, 100)}
                ...
              </p>
            </div>
            <p className={styles.date}>
				{language === 'en' && event.date_en
                  ? event.date_en
                  : event.date}
				 </p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Demos;
