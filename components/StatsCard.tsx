import styles from "./StatsCard.module.css";

import Image from "next/image";

const StatsCard = () => {
  return (
    <div className={styles.StatsCardContainer}>
      <div className={styles.StatsCard}>
        <div className={styles.StatsCardContent}>
          <div className={styles.StatsCardContent__leftSide}>
            <h1>Get insights that help your business grow.</h1>
            <h2>
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </h2>
            <div>
              <div>
                <span>10k+</span>
                <span>Companies</span>
              </div>
              <div>
                <span>314</span>
                <span>Templates</span>
              </div>
              <div>
                <span>12M++</span>
                <span>Queries</span>
              </div>
            </div>
          </div>
          <div className={styles.StatsCardContent__rightSide}></div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
