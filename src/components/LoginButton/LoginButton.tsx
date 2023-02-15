import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { memo } from 'react';

import Button from '@/components/Base/Button';
import { useAppDispatch } from '@/store';
import { toggleModal } from '@/store/modal/modalSlice';
import { Modals } from '@/types/modals';

function LoginButton() {
  const dispatch = useAppDispatch();
  return (
    <Button
      square
      onClick={() => {
        dispatch(toggleModal(Modals.LoginModal));
      }}
    >
      <FontAwesomeIcon icon={faUser} />
    </Button>
  );
}

export default memo(LoginButton);
