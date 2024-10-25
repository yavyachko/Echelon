import classes from './NumberCards.module.scss'

export default function NumbersCards() {
  return (
    <section className={classes["cards-container"]}>
      <div className={classes["card"]}>
        <h3 className={classes["title"]}>15+</h3>
        <p className={classes["subtitle"]}>of experience<br/>in the industry</p>
      </div>
      <div className={classes["card"]}>
        <h3 className={classes["title"]}>300+</h3>
        <p className={classes["subtitle"]}>loyal <br />clients</p>
      </div>
      <div className={classes["card"]}>
        <h3 className={classes["title"]}>30+</h3>
        <p className={classes["subtitle"]}>dedicated<br/>professionals</p>
      </div>
    </section>
  )
}
