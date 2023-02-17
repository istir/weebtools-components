import { HTMLAttributes } from "react";

export type Props = {
  children: JSX.Element[];
} & HTMLAttributes<HTMLDivElement>;
