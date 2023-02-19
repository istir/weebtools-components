import { Modals } from '@/src/types/modals';

export type Props = {
  children: JSX.Element;
  closeOnBackgroundClick?: boolean;
  type: Modals;
  title?: string;
};
