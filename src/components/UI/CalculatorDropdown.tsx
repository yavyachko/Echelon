type Props = {
  options: string[];
  handler: (value: string, action: string) => void;
  state: string;
  name: string;
  label: string;
};

import classes from "./CalculatorDropdown.module.scss";

export default function CalculatorDropdown({
  options,
  state,
  handler,
  name,
  label,
}: Props) {
  return (
    <label htmlFor={name} className={classes["label"]}>
      {label}
      <div className={classes["select-wrapper"]}>
        <select
          name={name}
          id={name}
          onChange={(e) => handler(e.target.value, name)}
          value={state}
        >
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 1V17M9 17L17 10.6M9 17L1 10.6"
            stroke="#07101C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </label>
  );
}
