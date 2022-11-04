import React from 'react';
import Layout from '../layout/layout';
import * as styles from '../styles/team.module.scss';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { alumni } from '../static_data/alumni';

const Team = props => {
  const data = alumni;
  const { language } = props.pageContext;

  return (
    <Layout {...props}>
      <div className={styles.container}>
        {data.length > 0 &&
          data.map((human, id) => (
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

                   {human.linkedin && (
                      <a href={human.linkedin} target='_blank' rel='noreferrer'>
                        <FaLinkedin />
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
