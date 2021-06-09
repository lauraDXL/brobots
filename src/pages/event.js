import React from 'react';
import Layout from '../layout/layout';
import { events as other } from '../static_data/events';
import { events as media } from '../static_data/media';
import { events as demo } from '../static_data/demo';

import * as styles from '../styles/event.module.scss';
import Carousel from 'react-bootstrap/Carousel';

const Event = props => {
  const { location } = props;
  const events =
    location && location.state && location.state.type === 'demo'
      ? demo
      : location && location.state && location.state.type === 'media'
      ? media
      : other;

  const { language } = props.pageContext;
  const event = location && location.state && events[location.state.id];

  return (
    <Layout>
      <div className={styles.page}>
        {event ? (
          <div className={styles.primaryArea}>
            <h1>{language === 'en' && event.title_en
                    ? event.title_en
                    : event.title}</h1>
            <p className={styles.location}>
            {language === 'en' && event.location_en
                  ? event.location_en
                  : event.location}, {event.date}
            </p>
            <div className={styles.carousel}>
              <Carousel touch>
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
            <p>
                <a href={event.link}>
                {language === 'en' && event.link
                  ? "Go to article"
                  : event.link?"Link către articol":""}
                </a>
              </p>
          </div>
        ) : (
          'This page is currently unavailable'
        )}
      </div>
    </Layout>
  );
};

export default Event;
