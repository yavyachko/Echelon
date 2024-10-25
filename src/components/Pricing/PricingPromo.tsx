import bg from '../../assets/images/pricing-promo-bg.png'
import Button from '../UI/Button'
import classes from './Pricing.module.scss'

export default function PricingPromo() {
  return (
    <section className={classes['promo']}>
      <h3 className={classes['promo__title']}>Trial scan</h3>
      <p className={classes["promo__subtitle"]}>Demo scan with a basic version of the report</p>
      <ul>
        <li>&mdash; All of our modules are used to conduct the scan.</li>
        <li>&mdash; A check is performed using the vulnerability database, and a report is generated.</li>
        <li>&mdash; Based on the scan results, a basic report on identified security issues is created.</li>
        <li>&mdash; Additionally, you can purchase the full version of the report</li>
      </ul>
      <div className={classes["promo__right"]}>
        <h4>Host and subdomain limitations:</h4>
        <ul>
          <li>No more than 100 external IP addresses</li>
          <li>No more than 30 subdomains</li>
        </ul>
      </div>
      <Button classes='button button-100 button_gradient' onclick={()=>{}}>Try it free</Button>
    </section>
  )
}

