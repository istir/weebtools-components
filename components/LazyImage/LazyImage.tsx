import { memo, useEffect, useState } from 'react';

import styles from './styles.module.css';
import { Props } from './types';

import Text from '@/components/Base/Text';
function LazyImage({ imageUrls, name }: Props) {
  const [initialImageLoaded, setInitialImageLoaded] = useState<boolean>(false);
  const [nextImageLoaded, setNextImageLoaded] = useState<boolean>(false);
  const onLoadInitialImageHandler = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    setInitialImageLoaded(true);
  };

  const onLoadNextImageHandler = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    setNextImageLoaded(true);
  };
  useEffect(() => {
    setNextImageLoaded(false);
    setInitialImageLoaded(false);
  }, [imageUrls]);
  function renderInitialImage() {
    switch (true) {
      case !!imageUrls?.small:
        return imageUrls?.small;
      case !!imageUrls?.medium:
        return imageUrls?.medium;
      case !!imageUrls?.normal:
        return imageUrls?.normal;
      case !!imageUrls?.large:
        return imageUrls?.large;
      default:
        return '';
    }
  }

  function renderNextImage() {
    switch (true) {
      case !!imageUrls?.large:
        return imageUrls?.large;
      case !!imageUrls?.normal:
        return imageUrls?.normal;
      case !!imageUrls?.medium:
        return imageUrls?.medium;
      case !!imageUrls?.small:
        return imageUrls?.small;
      default:
        return '';
    }
  }

  if (!imageUrls) return <Text>No image found</Text>;
  return (
    <div className={styles.container}>
      {nextImageLoaded ? null : (
        <img
          onLoad={onLoadInitialImageHandler}
          className={`${styles.image} ${styles.initialImage}`}
          src={renderInitialImage()}
          alt={name}
        />
      )}
      <img
        loading="lazy"
        onLoad={onLoadNextImageHandler}
        className={`${styles.image} ${
          nextImageLoaded ? styles.visible : styles.hidden
        }`}
        src={renderNextImage()}
        alt={name}
      />
    </div>
  );
  // return <img src={renderInitialImage()} alt={ } />;
}

export default memo(LazyImage);
