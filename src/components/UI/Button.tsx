import { ReactNode } from "react"

type Props = {
  classes: string,
  onclick: () => void;
  children: ReactNode;
}

export default function Button({children, classes, onclick}:Props) {
  return (
    <button className={classes} onClick={onclick}>
      {children}
    </button>
  )
}
