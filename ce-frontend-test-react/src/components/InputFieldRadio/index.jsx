import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

import { Input, Container } from "./styles";

const InputRadio = (props) => {
  const inputRef = useRef([]);
  const { fieldName, registerField } = useField(props.name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
      getValue(refs) {
        const checked = refs.find((ref) => ref.checked);

        return checked ? checked.value : null;
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {props.options.map((option, index) => (
        <div key={index}>
          <Input
            type="radio"
            name={props.name}
            value={option.value}
            ref={(elRef) => (inputRef.current[index] = elRef)}
            {...props}
          />

          <label htmlFor={props.name}>{option.label}</label>
        </div>
      ))}
    </Container>
  );
};

export default InputRadio;
