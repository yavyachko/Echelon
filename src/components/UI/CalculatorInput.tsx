type Props = {
  handler: (value: string, action: string) => void;
  name: string;
  state: string;
  label: string;
  subtext?: string;
  placeholder: string;
};

import classes from "./CalculatorInput.module.scss";

export default function CalculatorInput({
  handler,
  state,
  name,
  label,
  subtext,
  placeholder,
}: Props) {
  return (
    <label htmlFor={name} className={classes["label"]}>
      <span>
        {label} <span className={classes["subtext"]}>{subtext}</span>
      </span>
      <input
        name={name}
        id={name}
        type="text"
        onChange={(e) => handler(e.target.value, name)}
        value={state}
        placeholder={placeholder}
      ></input>
    </label>
  );
}
