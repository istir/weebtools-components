import { memo } from 'react';

import Button from '@/components/Base/Button';
import Text from '@/components/Base/Text';
import { useAppDispatch } from '@/store';
import { logoutAction } from '@/store/auth/authSlice';

function LogoutButton() {
  const dispatch = useAppDispatch();
  return (
    <Button
      onClick={() => {
        dispatch(logoutAction.started());
      }}
    >
      <Text>Logout</Text>
    </Button>
  );
}

export default memo(LogoutButton);
