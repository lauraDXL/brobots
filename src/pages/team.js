import React from 'react';
import Layout from '../layout/layout';
import * as styles from '../styles/team.module.scss';
import { team } from '../static_data/team';
import { volunteers } from '../static_data/volunteers';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

const Team = props => {
  const data1 = team;
  const data2 = volunteers;
  const { language } = props.pageContext;

  return (
    <Layout {...props}>
      <h2 className={styles.header}>{language === 'ro' ? "Membri" : "Members"}</h2>
      <div className={styles.container}>
        {data1.length > 0 &&
          data1.map((human, id) => (
            <div key={id} className={styles.card}>
              <div className={styles.background}>
                {human.img && <img src={human.img} alt={`${human.name}`} />}
                <div className={styles.media} />
                <div className={styles.contact}>
                  <div className={styles.links}>
                    {human.instagram && (
                      <a
                        href={human.instagram}
                        target='_blank'
                        rel='noreferrer'
                      >
                        <FaInstagram />
                      </a>
                    )}
                    {human.facebook && (
                      <a href={human.facebook} target='_blank' rel='noreferrer'>
                        <FaFacebook />
                      </a>
                    )}
                    {human.github && (
                      <a href={human.github} target='_blank' rel='noreferrer'>
                        <FaGithub />
                      </a>
                    )}
                    {human.email && (
                      <a
                        href={`mailto:${human.email}`}
                        target='_blank'
                        rel='noreferrer'
                      >
                        <MdMail />
                      </a>
                    )}
                  </div>
                  {human.phone && <p>{human.phone}</p>}
                </div>
              </div>
              <div className={styles.info}>
                <h4>{human.name}</h4>
                <p>
                  {language === 'ro' ? human.description : human.description_en}
                </p>
              </div>
            </div>
          ))}
      </div>

      <hr/>

      <h2 className={styles.header}>{language === 'ro' ? "Voluntari" : "Volunteers"}</h2>
      <div className={styles.container}>
        {data2.length > 0 &&
          data2.map((human, id) => (
            <div key={id} className={styles.card}>
              <div className={styles.background}>
                {human.img && <img src={human.img} alt={`${human.name}`} />}
                <div className={styles.media} />
                <div className={styles.contact}>
                  <div className={styles.links}>
                    {human.instagram && (
                      <a
                        href={human.instagram}
                        target='_blank'
                        rel='noreferrer'
                      >
                        <FaInstagram />
                      </a>
                    )}
                    {human.facebook && (
                      <a href={human.facebook} target='_blank' rel='noreferrer'>
                        <FaFacebook />
                      </a>
                    )}
                    {human.github && (
                      <a href={human.github} target='_blank' rel='noreferrer'>
                        <FaGithub />
                      </a>
                    )}
                    {human.email && (
                      <a
                        href={`mailto:${human.email}`}
                        target='_blank'
                        rel='noreferrer'
                      >
                        <MdMail />
                      </a>
                    )}
                  </div>
                  {human.phone && <p>{human.phone}</p>}
                </div>
              </div>
              <div className={styles.info}>
                <h4>{human.name}</h4>
                <p>
                  {language === 'ro' ? human.description : human.description_en}
                </p>
              </div>
            </div>
          ))}
      </div>
    </Layout>
  );
};

export default Team;
