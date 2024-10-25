import CardIllustration from '../Icons/CardIllustration'
import Button from '../UI/Button'
import classes from './BlockMiniWhyUs.module.scss'

export default function BlockMiniWhyUs() {
  return (
    <section>
      <h2 className={classes["title"]}>What can Echelon check to enhance your cybersecurity?</h2>
      <div className={classes["body"]}>
        <div className={classes["card"]}>
          <CardIllustration type="whyus1"/>
          <h3 className={classes["card-title"]}>external network perimeter</h3>
        </div>
        <div className={classes["card"]}>
          <CardIllustration type="whyus2"/>
          <h3 className={classes["card-title"]}>web applications
            <span>(custom, frameworks, crm, etc.)</span>
          </h3>
        </div>
        <div className={classes["card"]}>
          <CardIllustration type="whyus3"/>
          <h3 className={classes["card-title"]}>osint
            <span>(leaks, source code, etc.)</span>
          </h3>
        </div>
      </div>
      <Button classes='button button-100 button_gradient' onclick={()=>{}}>Check information assets</Button>
    </section>
  )
}
