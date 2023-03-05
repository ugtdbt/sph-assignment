import * as Components from "antd";
import React from "react";
import type IFormField from "../IFormField";
import { Controller, useController, useFormContext } from "react-hook-form";

const TextArea = ({
  name,
  label,
  required,
  defaultValue,
}: IFormField): JSX.Element => {
  const { control } = useFormContext();

  const {
    fieldState: { error },
  } = useController({ name, control });

  return (
    <Components.Form.Item
      htmlFor={name}
      required={required}
      label={label}
      labelCol={{ span: 24 }}
      validateStatus={error?.message && "error"}
    >
      <Controller
        name={name}
        control={control}
        rules={{ required }}
        render={({ field }) => (
          <Components.Input.TextArea
            size="large"
            {...field}
            rows={4}
            defaultValue={defaultValue}
          />
        )}
      />
    </Components.Form.Item>
  );
};

export default TextArea;
