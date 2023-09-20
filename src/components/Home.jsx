import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  const flexContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContents: 'center',
  };
  return (
    <div style={flexContainer}>
      <h2 className={styles.homeTitle}>Welcome to Our Page!</h2>
      <p className={styles.paragraph}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id cum
        asperiores totam quaerat unde rem praesentium. Voluptate facere cum
        eveniet dicta assumenda rerum id numquam dolor, doloribus, perspiciatis
        ad at! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
        modi, molestiae tenetur blanditiis placeat at cum, reiciendis quidem
        quibusdam accusantium sapiente, beatae consequuntur rem minima hic enim
        cupiditate assumenda atque? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ab ex excepturi iste in at voluptas! Officiis ratione
        nesciunt amet odio corrupti modi. Exercitationem atque, soluta
        voluptatem commodi dignissimos nostrum nihil?
      </p>
      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        quaerat id tenetur magni neque! Perferendis libero voluptates laudantium
        debitis, numquam ea dolores animi quo, blanditiis quis explicabo
        consequuntur maiores beatae. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Similique voluptate ipsa a labore, rerum nisi vel,
        iure ipsum itaque quas quaerat suscipit ipsam ducimus dicta odit,
        facilis excepturi et saepe? Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Nam vitae optio similique animi numquam! Porro animi
        magni voluptates eum vero, doloremque nisi, totam repellat fuga,
        sapiente quas. Accusamus, voluptas in?
      </p>
    </div>
  );
};

export default Home;
