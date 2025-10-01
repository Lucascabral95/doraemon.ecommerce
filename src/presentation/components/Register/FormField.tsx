import React, { memo } from "react";

interface FormFieldProps {
  label: string;
  id: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
  pattern?: string;
  title?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  children?: React.ReactNode;
}

export const FormField = memo<FormFieldProps>(
  ({
    label,
    id,
    name,
    type,
    value,
    onChange,
    disabled = false,
    required = false,
    placeholder,
    pattern,
    title,
    onFocus,
    onBlur,
    children,
  }) => (
    <div className="contenedor-label-input">
      <label htmlFor={id}>{label}</label>
      <div className="contenedor-input">
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          placeholder={placeholder}
          pattern={pattern}
          title={title}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {children}
      </div>
    </div>
  )
);

FormField.displayName = "FormField";
