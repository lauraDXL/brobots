import React from 'react';
import Layout from '../layout/layout';
import * as styles from '../styles/event.module.scss';
import { events } from '../static_data/media';
import { Link } from 'gatsby';

const Media = props => {
  const { language } = props.pageContext;
  return (
    <Layout {...props}>
      <div className={styles.container}>
        {events.map((event, id) => (
          <div key={id} className={styles.card}>
            <div className={styles.background}>
              <Link to={`/${language}/event`} state={{ id, type: 'media' }}>
                {event.cover && (
                  <img src={event.cover} alt={`${event.cover}`} />
                )}
              </Link>
            </div>
            <div className={styles.info}>
              <Link to={`/${language}/event`} state={{ id, type: 'media' }}>
                <h4>{event.title}</h4>
              </Link>
              <p className={styles.location}>{event.location}</p>
              <p>
              {language === 'en' && event.description_en
                ? event.description_en
                : event.description}
              </p>

            </div>
            <p className={styles.date}>{event.date}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Media;
