import React from "react";

interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: readonly string[] | string[];
  required?: boolean;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
}) => {
  return (
    <div className="contenedor-inputt">
      <label htmlFor={name}>{label}</label>
      <div className="cont-input">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
