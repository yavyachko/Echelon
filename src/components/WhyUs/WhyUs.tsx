import classes from "./WhyUs.module.scss";
import Calculator from "./Calculator";
import firstPicture from "../../assets/images/whyus1.png";
import secondPicture from "../../assets/images/whyus2.png";
import thirdPicture from "../../assets/images/whyus3.png";
import cardBg from "../../assets/images/whyus-bg.png";
import BlockMiniWhyUs from "./BlockMiniWhyUs";

export default function WhyUs() {
  return (
    <>
    <section>
      <h2 className={classes["title"]}>Why do you need echelon?</h2>
      <div className={classes["section-body"]}>
        <div className={classes["cards"]}>
          <div className={classes["card"]}>
            <div className="text-wrapper">
              <h3 className={classes["card-title"]}>Massive Malware Threats</h3>
              <p className={classes["card-text"]}>
                More than 5 billion malware attacks occur every year{" "}
                <span>(according to SonicWall Capture Labs research)</span>
              </p>
            </div>

            <div className={classes["icon-wrapper"]}>
              <img
                src={firstPicture}
                alt="drawn graphic of increasing number of threats per year"
              />
            </div>
          </div>
          <div className={classes["card"]}>
            <div className="text-wrapper">
              <h3 className={classes["card-title"]}>
                The High Cost <br />
                of Data Breaches
              </h3>
              <p className={classes["card-text"]}>
                On average, each data breach costs a company $4.24 million
                <span>(according to IBM Security)</span>
              </p>
            </div>
            <div className={classes["icon-wrapper"]}>
              <img src={secondPicture} alt="downgrading numbers" />
            </div>
            <img
              src={cardBg}
              alt="colorfull gradient background"
              className={classes["bg"]}
            />
          </div>
          <div className={classes["card"]}>
            <div className="text-wrapper">
              <h3 className={classes["card-title"]}>
                Soaring Fines for Data Leaks
              </h3>
              <p className={classes["card-text"]}>
                The total amount of fines <br />
                and compensations <br />
                for data breaches reached <br />
                $385 million in one year <br />
                <span>(according to InfoWatch experts)</span>
              </p>
            </div>
            <div className={classes["icon-wrapper"]}>
              <img src={thirdPicture} alt="hand drawn database structure" />
            </div>
          </div>
          <Calculator />
        </div>
      </div>
    </section>
    <BlockMiniWhyUs />
    </>
  );
}
