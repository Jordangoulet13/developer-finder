import React from "react";

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
  FormInputTextArea,
} from "./form-input.styles";

const FormInput = ({ handleChange, label, textArea, ...props }) => (
  <GroupContainer>
    {textArea ? (
      <FormInputTextArea onChange={handleChange} {...props} />
    ) : (
      <FormInputContainer onChange={handleChange} {...props} />
    )}
    {label ? (
      <FormInputLabel className={props.value ? "shrink" : ""}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;
