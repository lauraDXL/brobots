import React from 'react';
import Layout from '../layout/layout';
import * as styles from '../styles/results_styles.module.scss';
import { results } from '../static_data/results';
import Carousel from 'react-bootstrap/Carousel';

const Results = props => {
  const { language } = props.pageContext;
  return (
    <Layout {...props}>
      <div className={styles.container}>
        {results.map((event, id) => (
          <div key={id} className={styles.card}>
            <div className={styles.info}>
              <h4>{event.title}</h4>
              <p className={styles.location}>{event.location}</p>
              <p>
                {language === 'en' && event.description_en
                  ? event.description_en
                  : event.description}
              </p>
            </div>
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

            <p className={styles.date}>{event.date}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Results;
