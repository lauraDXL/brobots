import React from 'react';
import Layout from '../layout/layout';
import { events as other } from '../static_data/events';
import { events as media } from '../static_data/media';
import { events as demo } from '../static_data/demo';

import * as styles from '../styles/event.module.scss';
import Carousel from 'react-bootstrap/Carousel';

const Event = props => {
  const location = props.location;
  const events = [...other, ...media, ...demo];
  const { language } = props.pageContext;

  const event = events.find(
    event => event.key === location.pathname.split('/')[3]
  );

  return (
    <Layout>
      <div className={styles.page}>
        <div className={styles.primaryArea}>
          <h1>{event.title}</h1>
          <p className={styles.location}>
            {event.location}, {event.date}
          </p>
          <div className={styles.carousel}>
            <Carousel pause='false' touch>
              {event.images.length > 0 &&
                event.images.map((image, key) => (
                  <Carousel.Item interval={2000} key={key}>
                    <img
                      className='d-block w-100'
                      src={image}
                      alt='First slide'
                    />
                  </Carousel.Item>
                ))}
            </Carousel>
          </div>
          <p className={styles.description}>
            {language === 'en' && event.description_en
              ? event.description_en
              : event.description}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Event;
