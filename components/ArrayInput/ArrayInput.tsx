import { Flex, IconButton } from "@chakra-ui/react";
import { faAdd, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { compact } from "lodash";
import { memo, useEffect, useState } from "react";
import Button from "../Button";
import Input from "../Input";

import { Props } from "./types";

function ArrayInput({ values, getArrayValue }: Props) {
  const [inputValues, setInputValues] = useState<string[]>(compact(values));

  useEffect(() => {
    getArrayValue?.(inputValues);
  }, [inputValues]);

  const addMoreHandler = () => {
    setInputValues((prevInputValues) => [...prevInputValues, ""]);
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
      <Flex key={index} gap={2}>
        <Input
          value={value}
          getValue={(newValue) => {
            setValueHandler(index, newValue);
          }}
        />
        <IconButton
          variant={"gray"}
          onClick={() => removeOneHandler(index)}
          icon={<FontAwesomeIcon icon={faMinus} />}
          aria-label={"Remove"}
        />
      </Flex>
    );
  }

  return (
    <Flex flexDir={"column"} gap={2}>
      {inputValues?.map((value, index) => renderValue(value, index))}
      <Flex alignSelf={"flex-end"}>
        <IconButton
          onClick={addMoreHandler}
          variant="filled"
          icon={<FontAwesomeIcon icon={faAdd} />}
          aria-label={"Add more"}
        />
      </Flex>
    </Flex>
  );
}

export default memo(ArrayInput);
