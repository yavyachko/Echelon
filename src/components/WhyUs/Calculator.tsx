import classes from "./Calculator.module.scss";
import { useEffect, useState } from "react";
import CalculatorInput from "../UI/CalculatorInput";
import CalculatorDropdown from "../UI/CalculatorDropdown";
import CardIllustration from "../Icons/CardIllustration";

export default function Calculator() {
  const [input, setInput] = useState({
    employees: "",
    sector: "",
    revenue: "",
    vulnerabilities: "",
  });
  
  const [resultValue, setResultValue] = useState(0);

  useEffect(() => {
    const targetValue = +input.revenue + +input.vulnerabilities;

    if (targetValue < resultValue) {
      setResultValue(targetValue); // Если новое значение меньше, обновляем сразу
      return;
    }

    const interval = setInterval(() => {
      if (resultValue < targetValue) {
        if (targetValue < 1000) {
          setResultValue((prev) => Math.min(prev + 5, targetValue));
        } else if (resultValue < 100000) {
          setResultValue((prev) => Math.min(prev + 250, targetValue));
        } else {
          setResultValue(targetValue); // Устанавливаем сразу, если больше 100000
        }
      } else {
        clearInterval(interval);
      }
    }, 1);

    return () => clearInterval(interval);
  }, [input.revenue, input.vulnerabilities, resultValue]);

  function handleInput(value: string, action: string): void {
    setInput((prevState) => ({ ...prevState, [action]: value }));
  }

  return (
    <div className={classes["calculator"]}>
      <h3 className={classes["calculator-title"]}>
        Calculate how much undetected vulnerabilities could cost you personally.
        Tens, hundreds, or millions of dollars?
      </h3>
      <div className={classes["body"]}>
        <div className={classes["inputs"]}>
          <CalculatorDropdown
            name="employees"
            options={["0-50", "50-250", "250-500"]}
            state={input.employees}
            label="Number of Employees"
            handler={handleInput}
          />
          <CalculatorDropdown
            name="sector"
            options={["Technology", "Agriculture", "Design"]}
            state={input.sector}
            label="Industry Sector"
            handler={handleInput}
          />
          <CalculatorInput
            name="revenue"
            handler={handleInput}
            state={input.revenue}
            label="Estimated Annual Revenue"
            placeholder="$300 000"
          />
          <CalculatorInput
            name="vulnerabilities"
            handler={handleInput}
            state={input.vulnerabilities}
            label="Detected Vulnerabilities"
            subtext="(in the Last Year)"
            placeholder="30"
          />
        </div>
        <div className={classes["result"]}>
          <h3 className={classes["result-title"]}>Potential losses</h3>
          <span className={classes["result-value"]}>
            ${resultValue}
          </span>
        </div>
      </div>

      <CardIllustration type="calculator" />
    </div>
  );
}