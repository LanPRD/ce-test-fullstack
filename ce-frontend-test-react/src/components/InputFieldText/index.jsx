import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

import { Input } from "./styles";

const InputText = (props) => {
  const inputRef = useRef(null);
  const { fieldName, registerField } = useField(props.name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return <Input ref={inputRef} {...props} />;
};

export default InputText;
