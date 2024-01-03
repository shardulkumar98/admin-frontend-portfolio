import React from 'react'
import { Form, Input } from 'antd'
import { Controller } from 'react-hook-form'
interface ITextInputProps {
  label?: string
  name: string
  rules?: any
  control: any
  placeholder?: string
  className?: string
  value?: string | number
  type?: string
  onBlur?: any
  autoComplete?: string
  disabled?: boolean
  onChange?: any
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
            onHookBlur()
            if (onBlur) onBlur()
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
)

export default TextInput

// import { Controller } from "react-hook-form";
// import { Form, Input } from "antd";

// interface ITeaxtinputContainer {
//   placeholder: string;
//   required?: boolean;
//   value?: string;
//   onChange?: (e: any) => void;
//   onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
//   type?: string;
//   onWheel?: (e: any) => void;
//   control: any;
//   name: string;
//   disabled?: boolean;
//   prefix?: any;
//   className?: string;
//   handleInputChange?: any;
//   maxLength?: number;
//   onKeyDown?: any;
//   inputRef?: any;
//   onKeyUp?: any;
//   autocomplete?: string;
// }

// const TextInput = ({
//   placeholder,
//   required,
//   type,
//   onFocus,
//   onWheel,
//   name,
//   control,
//   prefix,
//   disabled,
//   className,
//   handleInputChange,
//   maxLength,
//   onKeyDown,
//   onKeyUp,
//   inputRef,
//   autocomplete,
// }: ITeaxtinputContainer) => (
//   <Form.Item>
//     <Controller
//       render={({ field: { value, onChange } }) => (
//         <Input
//           type={type}
//           placeholder={placeholder}
//           required={required}
//           value={value}
//           onChange={(e) => {
//             onChange(e.target.value);
//             handleInputChange(e); // Call the custom handleInputChange function
//           }}
//           onFocus={onFocus}
//           onWheel={onWheel}
//           prefix={prefix}
//           disabled={disabled}
//           className={className}
//           maxLength={maxLength}
//           onKeyDown={onKeyDown}
//           onKeyUp={onKeyUp}
//           ref={inputRef}
//           autoComplete={autocomplete}
//         />
//       )}
//       control={control}
//       name={name}
//     />
//   </Form.Item>
// );
// export default TextInput;
