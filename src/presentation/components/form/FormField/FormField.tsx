import React from "react";

// import "./FormField.scss";

interface FormFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  htmlFor?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  error,
  required = false,
  children,
  htmlFor,
}) => {
  return (
    <div className={`contenedor-label-input ${error ? "has-error" : ""}`}>
      <label htmlFor={htmlFor} className="field-label">
        {label} {required && <span className="required">*</span>}
      </label>
      <div className="contenedor-input">
        {children}
        {error && (
          <div className="error-message" role="alert">
            <span className="error-icon">⚠</span>
            {error}
          </div>
        )}
      </div>
    </div>
  );
};
