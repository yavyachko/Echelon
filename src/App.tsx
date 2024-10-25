import Hero from "./components/Hero/Hero"
import HowItWorks from "./components/HowItWorks.tsx/HowItWorks"
import NumbersCards from "./components/NumbersCards/NumbersCards"
import Pricing from "./components/Pricing/Pricing"
import WhyUs from "./components/WhyUs/WhyUs"
import './styles/global.scss'

function App() {

  return (
    <>
      {/* <Hero></Hero> */}
      <NumbersCards></NumbersCards>
      <HowItWorks></HowItWorks>
      <WhyUs />
      <Pricing />
    </>
  )
}

export default App
