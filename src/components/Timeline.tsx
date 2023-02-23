import styles from "@/styles/Home.module.css";
export default function Timeline() {
  return (
    <>
      <div className={styles["timeline-container"]}>
        <div className={styles["timeline-container__item"]}>
          <div className={styles["timeline-item-date"]}>Jan 27, 2023</div>
          <div className={styles.line}></div>
          <div className={styles["timeline-item-content"]}>
            <div className={styles["item-content__title"]}>
              Today was a good day
            </div>
            <div className={styles["item-content__body"]}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ex
              dolor nihil nulla dolores rerum recusandae cupiditate sed eos
              deserunt id provident ducimus minus repellendus reiciendis
              delectus, voluptas commodi ullam?
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
