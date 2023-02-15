import { Modals } from '@/types/modals';

export type Props = {
  children: JSX.Element;
  closeOnBackgroundClick?: boolean;
  type: Modals;
  animationDuration?: number;
};
