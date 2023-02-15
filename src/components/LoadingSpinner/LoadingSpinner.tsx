import { memo } from 'react';
import { useSelector } from 'react-redux';

import { Props } from '@/components/Base/LoadingSpinner/types';
import Spinner from '@/components/Base/Spinner';
import { isLoadingSelector } from '@/store/loading/loadingSelectors';

function LoadingSpinner({ loadingActionType, size }: Props) {
  const isLoading = useSelector((state) =>
    isLoadingSelector(state, loadingActionType)
  );
  if (isLoading) return <Spinner size={size} />;
  return <div></div>;
}

export default memo(LoadingSpinner);
