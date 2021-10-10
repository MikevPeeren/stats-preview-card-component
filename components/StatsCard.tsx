import styles from "./StatsCard.module.scss";

import Image from "next/image";

const StatsCard = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen h-screen">
      <div className={`${styles.StatsCard} rounded-2xl`}>
        <div className="flex flex-row justify-between h-full">
          <div className="flex flex-col justify-between items-center w-2/4 my-32">
            <div className="w-3/5">
              <h1>
                Get <span className={styles.VioletColor}>insights</span> that
                help your business grow.
              </h1>
              <h2 className="pt-10">
                Discover the benefits of data analytics and make better
                decisions regarding revenue, customer experience, and overall
                efficiency.
              </h2>
            </div>
            <div className="flex flex-row justify-between w-3/5">
              <div className="flex flex-col justify-between">
                <h3>10k+</h3>
                <h4 className="text-gray">Companies</h4>
              </div>
              <div className="flex flex-col">
                <h3>314</h3>
                <h4>Templates</h4>
              </div>
              <div className="flex flex-col">
                <h3>12M+</h3>
                <h4>Queries</h4>
              </div>
            </div>
          </div>
          <div
            className={`${styles.BackgroundImage} w-2/4 h-full bg-cover bg-no-repeat rounded-r-2xl`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
