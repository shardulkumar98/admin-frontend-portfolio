/* eslint-disable no-unused-vars */
import { ReactElement, useEffect, useState } from 'react'
import { Controller } from 'react-hook-form'
import { Select } from 'antd'

interface SelectFieldProps {
  options: any[]
  defaultValue?: any
  control: any
  name: string
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  props?: any
  mode?: string
  loading?: boolean
  onSearch?: (value: string) => void
  placeholder?: string
  handleValue?: (value: any) => void
  value?: string
  suffixIcon?: ReactElement
  onChange?: any
  disabled?: boolean
  showSearch?: boolean
}

const SelectField = ({
  options,
  defaultValue,
  control,
  name,
  onFocus,
  props,
  mode,
  loading,
  onSearch,
  placeholder,
  handleValue,
  suffixIcon,
  disabled,
  showSearch,
}: SelectFieldProps) => {
  const [selectOptions, setSelectOptions] = useState(options)

  useEffect(() => {
    setSelectOptions(options)
  }, [options])

  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Select
            defaultValue={defaultValue}
            {...props}
            loading={loading}
            onChange={(e) => {
              onChange(e)
              handleValue && handleValue(e)
            }}
            style={{ width: '100%' }}
            mode={mode}
            value={value || undefined}
            options={selectOptions}
            onFocus={onFocus}
            onSearch={onSearch}
            placeholder={placeholder}
            allowClear
            suffixIcon={suffixIcon}
            disabled={disabled}
            showSearch={showSearch}
          />
        )}
      />
    </div>
  )
}

export default SelectField
