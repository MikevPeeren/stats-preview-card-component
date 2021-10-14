import styles from "./StatsCard.module.scss";

import Image from "next/image";

const StatsCard = () => {
  return (
    <div className="flex flex-col justify-center items-center m-6 h-auto md:h-screen">
      <div className={`${styles.StatsCard} rounded-2xl`}>
        <div className="flex flex-col-reverse sm:flex-row">
          <div className="flex flex-col items-center sm:w-2/4 md:w-2/4 my-6 md:my-10">
            <div className="w-3/4 md:w-4/5">
              <h1>
                Get <span className={styles.VioletColor}>insights</span> that
                help your business grow.
              </h1>
              <h2 className="pt-6 text-center md:text-left">
                Discover the benefits of data analytics and make better
                decisions regarding revenue, customer experience, and overall
                efficiency.
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between text-center md:text-left w-3/4 md:w-4/5 mt-10">
              <div className="flex flex-col">
                <h3>10k+</h3>
                <h4>Companies</h4>
              </div>
              <div className="flex flex-col py-8">
                <h3>314</h3>
                <h4>Templates</h4>
              </div>
              <div className="flex flex-col">
                <h3>12M+</h3>
                <h4>Queries</h4>
              </div>
            </div>
          </div>
          <div className="sm:w-2/4">
            <div
              className={`${styles.BackgroundImage} bg-cover bg-no-repeat rounded-rb-none rounded-tr-none rounded-tl-2xl rounded-tr-2xl sm:rounded-tl-none sm:rounded-tr-none sm:rounded-br-2xl sm:rounded-tr-2xl`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
