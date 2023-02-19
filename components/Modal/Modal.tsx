'use client';

import {
  Modal as ChakraModal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { memo } from 'react';
import { useSelector } from 'react-redux';

import { Props } from './types';

import { useAppDispatch } from '@/src/store';
import { isModalVisibleSelector } from '@/src/store/modal/modalSelector';
import { toggleModal } from '@/src/store/modal/modalSlice';
import Button from '@/weebtools-components/components/Button';

function Modal({
  children,
  type,
  closeOnBackgroundClick = true,
  title,
}: Props) {
  const dispatch = useAppDispatch();
  const isVisible = useSelector(isModalVisibleSelector(type));
  const closeModal = () => {
    dispatch(toggleModal(type));
  };

  return (
    <ChakraModal
      isOpen={isVisible}
      onClose={closeModal}
      closeOnOverlayClick={closeOnBackgroundClick}
      size={'full'}>
      <ModalOverlay />
      <ModalContent>
        {title ? <ModalHeader>{title}</ModalHeader> : null}
        <Button
          onClick={closeModal}
          icon={faTimes}
          variant="filled"
          position="fixed"
          top="2"
          right="2"
          width="0"
        />
        <ModalBody>{children}</ModalBody>

        {/* <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter> */}
      </ModalContent>
    </ChakraModal>
  );
}

export default memo(Modal);
