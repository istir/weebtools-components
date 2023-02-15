import { faRemove } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { CSSProperties, memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './styles.module.css';

import Button from '@/components/Base/Button';
import { Props } from '@/components/Base/Modal/types';
import { useAppDispatch } from '@/store';
import { isModalVisibleSelector } from '@/store/modal/modalSelectors';
import { toggleModal } from '@/store/modal/modalSlice';
import { Modals } from '@/types/modals';
import { convertSecondsToMilliseconds } from '@/utils/time';
function Modal({
  children,
  closeOnBackgroundClick = true,
  type,
  animationDuration = 0.3
}: Props) {
  const dispatch = useAppDispatch();
  const isVisible = useSelector(isModalVisibleSelector(type));
  const [showContent, setShowContent] = useState<boolean>(isVisible);

  useEffect(() => {
    if (isVisible) {
      setShowContent(true);
    } else {
      setTimeout(() => {
        setShowContent(false);
      }, convertSecondsToMilliseconds(animationDuration));
    }
  }, [isVisible]);

  const style = {
    '--animation-duration': `${animationDuration}s`
  } as React.CSSProperties;

  const toggleModalState = () => {
    dispatch(toggleModal(type));
  };

  const onBackgroundClick = () => {
    if (closeOnBackgroundClick) {
      toggleModalState();
    }
  };

  function renderCloseButton() {
    const style = {
      position: 'absolute',
      top: 5,
      right: 5,
      zIndex: 10
    } as CSSProperties;
    const previewStyle = {
      position: 'absolute',
      top: 'var(--titlebar-height)',
      right: 10,
      zIndex: 10
    } as CSSProperties;
    return (
      <Button
        square
        buttonType={type === Modals.PreviewModal ? 'ghost' : 'normal'}
        buttonStyle={type === Modals.PreviewModal ? previewStyle : style}
        onClick={toggleModalState}
      >
        <FontAwesomeIcon icon={faRemove} />
      </Button>
    );
  }

  function renderContent() {
    if (showContent) {
      return (
        <>
          {renderCloseButton()}
          {children}
        </>
      );
    } else {
      return <></>;
    }
  }
  return (
    <div
      className={`${styles.container} ${
        isVisible ? styles.visible : styles.hidden
      }`}
      style={style}
    >
      {/* Background should not be focusable by keyboard */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div className={styles.background} onClick={onBackgroundClick}></div>
      <div
        className={
          type === Modals.PreviewModal
            ? styles.previewChildContainer
            : styles.childContainer
        }
      >
        {renderContent()}
      </div>
    </div>
  );
}

export default memo(Modal);
