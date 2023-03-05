import * as Components from "antd";
import React from "react";
import type IFormField from "../IFormField";
import { Controller, useController, useFormContext } from "react-hook-form";

const Input = ({
  name,
  label,
  required,
  defaultValue,
  prefix,
  type,
  disabled,
  maxLength,
}: IFormField): JSX.Element => {
  const { control } = useFormContext();
  const {
    fieldState: { error },
  } = useController({ name, control });

  return (
    <Components.Form.Item
      htmlFor={name}
      required={required}
      labelCol={{ span: 24 }}
      label={label}
      validateStatus={error?.message && "error"}
    >
      <Controller
        name={name}
        control={control}
        rules={{ required }}
        render={({ field }) => (
          <Components.Input
            size="large"
            {...field}
            type={type}
            prefix={prefix}
            disabled={disabled}
            maxLength={maxLength}
            defaultValue={defaultValue}
          />
        )}
      />
    </Components.Form.Item>
  );
};

export default Input;
