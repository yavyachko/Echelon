import HeroBigLogo from "../Icons/HeroBigLogo";
import Button from "../UI/Button";
import ArrowIcon from "../Icons/ArrowIcon";
import classes from "./Hero.module.scss";
import ThickStar from "../Icons/ThickStar";

export default function Hero() {
  return (
    <section className={classes["hero"]}>
      <div className={classes["title"]}>
        <HeroBigLogo className={classes["hero-logo"]}></HeroBigLogo>
      </div>
      <h1 className={classes["subtitle"]}>
        <ThickStar />
        Automatic information security audit for business
      </h1>
      <div className={classes["bottom-block"]}>
        <div className={classes["left-wrapper"]}>
          <div className="arrow-container">
            <ArrowIcon></ArrowIcon>
          </div>
          <span>
            Check your company's IT infrastructure and find out what
            vulnerabilities are threatening you right now
          </span>
        </div>
        <Button onclick={() => {}} classes="button_gradient">
          Check information assets
        </Button>
      </div>
    </section>
  );
}
