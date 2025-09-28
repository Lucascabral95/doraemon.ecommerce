import React from "react";

interface FormFieldProps {
  label: string;
  name: string;
  type?: "text" | "number";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  placeholder,
}) => {
  return (
    <div className="contenedor-inputt">
      <label htmlFor={name}>
        {label} {!required && "(OPCIONAL)"}
      </label>
      <div className="cont-input">
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
