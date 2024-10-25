import classes from "./HowItWorks.module.scss";
import ArrowIcon from "../Icons/ArrowIcon";
import CardIllustration from "../Icons/CardIllustration";

export default function HowItWorks() {
  return (
    <section className={classes["container"]}>
      <div className={classes["text"]}>
        <h2 className={classes["title"]}>
          Echelon is an automated system for regular{" "}
          <span>cybersecurity checks</span>
        </h2>
        <p className={classes["subtitle"]}>How does Echelon work?</p>
      </div>
      <div className={classes["content"]}>
        <div className={classes["card-light"]}>
          <div className={classes["card-left"]}>
            <h3 className={classes["card-title"]}>Automatic operation</h3>
            <p className={classes["card-text"]}>
              Echelon operates automatically based on the methods of Red Team.
              Each day, Echelon takes up more time-consuming routine tasks to
              conduct quality audits and cut costs. Whilst manual audits do not
              cover the full spectrum of potential vulnerabilities.
            </p>
          </div>
          <div className={classes["card-right"]}>
            <div className="arrow-container_dark arrow-container_rotated">
              <ArrowIcon></ArrowIcon>
            </div>
            <div className={classes["icon-wrapper"]}>
              <CardIllustration type='HowItWorks1'></CardIllustration>
            </div>
          </div>
        </div>

        <div className={classes["card-dark"]}>
          <div className={classes["card-left"]}>
            <h3 className={classes["card-title"]}>Regular checks</h3>
            <p className={classes["card-text"]}>
              Checks are regular and require minimal human involvement. In Echelon, you can set the day and time of the check. All discovered vulnerabilities, as well as versionsof installed software, are monitored. A report with recommendations
            </p>
          </div>
          <div className={classes["card-right"]}>
            <div className="arrow-container_light arrow-container_rotated">
              <ArrowIcon></ArrowIcon>
            </div>
            <div className={classes["icon-wrapper"]}>
            <CardIllustration type='HowItWorks2'></CardIllustration>
            </div>
          </div>
        </div>

        <div className={classes["card_100"]}>
          <div className={classes["card-left"]}>
            <h3 className={classes["card-title"]}>In the end: you save time, money, and continuously improve all aspects of cybersecurity</h3>
          </div>
          <div className={classes["card-right"]}>
            <div className={classes["icon-wrapper"]}>
            <CardIllustration type='HowItWorks3'></CardIllustration>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
