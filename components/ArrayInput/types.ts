export type Props = {
  values?: string[] | null;
  getArrayValue?: (value: string[]) => void;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
