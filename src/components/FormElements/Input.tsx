import React from "react";
import { Form, Input } from "antd";
import { Controller } from "react-hook-form";
interface ITextInputProps {
  label?: string;
  name: string;
  rules?: any;
  control: any;
  placeholder?: string;
  className?: string;
  value?: string | number;
  type?: string;
  onBlur?: any;
  autoComplete?: string;
  disabled?: boolean;
  onChange?: any;
}
const TextInput: React.FC<ITextInputProps> = ({
  label,
  name,
  rules,
  placeholder,
  className,
  type,
  control,
  onBlur,
  autoComplete,
  disabled,
}: ITextInputProps) => (
  <Form.Item label={label} name={name} rules={rules}>
    <Controller
      render={({ field: { onBlur: onHookBlur, value, onChange } }) => (
        <Input
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={(e) => onChange(e)}
          onBlur={() => {
            onHookBlur();
            if (onBlur) onBlur();
          }}
          disabled={disabled}
          autoComplete={autoComplete}
          className={className}
        />
      )}
      control={control}
      name={name}
    />
  </Form.Item>
);

export default TextInput;
