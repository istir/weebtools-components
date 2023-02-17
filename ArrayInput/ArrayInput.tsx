import { faAdd, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { compact } from 'lodash';
import { memo, useEffect, useState } from 'react';

import styles from './styles.module.css';
import { Props } from './types';

import Button from '@/components/Base/Button';
import Input from '@/components/Base/Input';

function ArrayInput({ values, getArrayValue }: Props) {
  const [inputValues, setInputValues] = useState<string[]>(compact(values));

  useEffect(() => {
    getArrayValue?.(inputValues);
  }, [inputValues]);

  const addMoreHandler = () => {
    setInputValues((prevInputValues) => [...prevInputValues, '']);
  };

  const removeOneHandler = (index: number) => {
    setInputValues((prevInputValues) =>
      prevInputValues.filter((_value, prevIndex) => prevIndex !== index)
    );
  };

  const setValueHandler = (index: number, newValue: string) => {
    setInputValues((prevInputValues) =>
      prevInputValues.map((prevInputValue, prevIndex) =>
        prevIndex === index ? newValue : prevInputValue
      )
    );
  };

  function renderValue(value: string, index: number) {
    return (
      <div key={index} className={styles.inputContainer}>
        <div className={styles.inputContainerInner}>
          <Input
            value={value}
            getValue={(newValue) => {
              setValueHandler(index, newValue);
            }}
          />
        </div>
        <Button onClick={() => removeOneHandler(index)}>
          <FontAwesomeIcon icon={faMinus} />
        </Button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {inputValues?.map((value, index) => renderValue(value, index))}
      <Button onClick={addMoreHandler}>
        <FontAwesomeIcon icon={faAdd} />
      </Button>
    </div>
  );
}

export default memo(ArrayInput);
