import React from "react";
interface IFormField {
  placeholder?: string;
  name: string;
  label?: string;
  required?: boolean;
  defaultValue?: string | number;
  prefix?: React.ReactNode;
  type?: string;
  disabled?: boolean;
  maxLength?: number;
}

export default IFormField;
