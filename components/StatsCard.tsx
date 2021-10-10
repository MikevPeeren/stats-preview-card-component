import styles from "./StatsCard.module.scss";

import Image from "next/image";

const StatsCard = () => {
  return (
    <div className="flex flex-col justify-center items-center m-6 h-screen">
      <div className={`${styles.StatsCard} rounded-2xl`}>
        <div className="flex flex-col-reverse sm:flex-row h-screen">
          <div className="flex flex-col items-center sm:w-2/4 my-6">
            <div className="w-3/4">
              <h1>
                Get <span className={styles.VioletColor}>insights</span> that
                help your business grow.
              </h1>
              <h2 className="pt-10 text-center">
                Discover the benefits of data analytics and make better
                decisions regarding revenue, customer experience, and overall
                efficiency.
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row items-center text-center sm:w-3/4 mt-6">
              <div className="flex flex-col">
                <h3>10k+</h3>
                <h4>Companies</h4>
              </div>
              <div className="flex flex-col sm:px-16 py-4">
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
            className={`${styles.BackgroundImage} h-full w-full bg-contain bg-no-repeat rounded-t-2xl`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
