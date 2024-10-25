import PricingPromo from './PricingPromo'
import classes from "./Pricing.module.scss"
import PricingPlans from './PricingPlans'

export default function Pricing() {
  return (
    <section>
      <h2 className={classes["title"]}>
        Pricing
      </h2>
      <PricingPromo />
      <PricingPlans />
    </section>
  )
}
