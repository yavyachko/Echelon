import { useState } from "react";
import Button from "../UI/Button";
import pricingItems from "./data";
import PricingItem from "./PricingItem";
import classes from "./Pricing.module.scss"

export default function PricingPlans() {

  const[annual, setAnnual] = useState(false)

  return (
    <section>
      <div className={classes["plans__top"]}>
        <Button classes={`plan__switch ${annual ? "" : "active"}`} onclick={()=>setAnnual(!annual)}>Price per month</Button>
        <Button classes={`plan__switch ${annual ? "active" : ""}`} onclick={()=>setAnnual(!annual)}>Price with annual payment</Button>
      </div>
      <div className={classes["plans__body"]}>
        {pricingItems.map(item=><PricingItem
          heading={item.heading}
          subtext={item.subtext}
          advantages={item.advantages}
          limitations={item.limitations}
          price={item.price}
          sub={item.sub}
        />)}
      </div>
    </section>
  )
}
