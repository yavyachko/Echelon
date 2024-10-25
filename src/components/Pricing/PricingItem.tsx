import { PricingItemType } from "./data";
import classes from "./PricingItem.module.scss";

export default function PricingItem({
  heading,
  subtext,
  advantages,
  limitations,
  price,
  sub,
}: PricingItemType) {
  return (
    <div className={classes["card"]}>
      <h3>{heading}</h3>
      <p className={classes["subtitle"]}>
        {subtext.split("\n").map((line, index) => (
          <>
            {line}
            {index < subtext.split("\n").length - 1 && <br />}
          </>
        ))}
      </p>
      <ul className={classes["advantages"]}>
        {advantages.map((advantage) => (
          <li key={advantage}>{advantage}</li>
        ))}
      </ul>
      <svg width="260" height="1" viewBox="0 0 260 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="260" y2="0.5" stroke="white" strokeOpacity="0.2"/>
</svg>

      <h4 className={classes["limits"]}>Host and subdomain limitations:</h4>
      <ul>
        {limitations.map((item) => (
          <li key={item}>- {item}</li>
        ))}
      </ul>
      <div className={classes["pricing"]}>
        {price.usd}
        <span className={classes["mini"]}>$</span> / {price.usd} <span className={classes["mini"]}>AED</span>
      </div>
      {sub?.heading.length == 0 || sub?.text.length == 0 ? (
        <>
          <h4>Paid annualy</h4>
          <p>
            The plan is only available upon request, without automatic card
            subscription.
          </p>
        </>
      ) : (
        <button className="button">Order</button>
      )}
    </div>
  );
}
