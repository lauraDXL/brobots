import React from 'react';
import Layout from '../layout/layout';
import robotel from '../assets/Robotel2.svg';
import * as styles from '../styles/home.module.scss';
import ReactTypingEffect from 'react-typing-effect';

const IndexPage = props => {
  const { language } = props.pageContext;
  return (
    <Layout {...props}>
      <div className={styles.text}>
        <ReactTypingEffect
          style={{ marginBottom: '1.5vh' }}
          cursor={' '}
          displayTextRenderer={(text, i) => {
            return (
              <h1 key={i}>
                {text.split('').map((char, i) => {
                  const key = `${i}`;
                  return (
                    <span
                      key={key}
                      style={{ fontFamily: 'Zekton', fontSize: '2em' }}
                    >
                      {char}
                    </span>
                  );
                })}
              </h1>
            );
          }}
          text={['Bringing the future closer.']}
        />
        <p>
        {language === 'en'
                    ? 'An old saying us that whoever resembles, gathers.\n As for us... \nSome are extroverts, others are introverts. Some of us like rock\'n\'roll, others of us listen to electronic music or rap. Some of us love action movies, others drama, anime or comedy. Many of us prefer to play on the computer, many of us also play with the ball. At the mountains or at sea, in a city break or simply lounging on the couch.\n So different, but still together. In the BroBots team\'s recipe there are many totally distinct ingredients, but they are linked together by the passion to make... something. Come with us to have a better perspective on our "something".'
                    : 'Un vechi proverb ne spune că cine se aseamănă, se adună. Cât despre noi... Unii suntem extrovertiți, ceilalți suntem introvertiți. Unora dintre noi ne place rock\'n\'roll-ul, alții dintre noi ascultă muzică electronică sau rap. Unii dintre noi adora filmele de acțiune, alții dramele, animeurile sau comediile. Mulți preferăm să ne jucăm pe calculator, tot mulți dintre noi se joacă cu mingea. La munte sau la mare, în citybreak sau, pur și simplu, tolăniți pe canapea.\nAtât de diferiți, dar totuși împreună. În rețeta echipei BroBots sunt multe ingrediente total distincte, dar legate împreună de pasiunea de a face... ceva. Haide alături de noi pentru a avea o perspectivă mai bună asupra \'cevaului\' nostru.'}
        </p>
      </div>
      <div className={styles.image}>
        <img src={robotel} alt='robotel' />
      </div>
    </Layout>
  );
};

export default IndexPage;
