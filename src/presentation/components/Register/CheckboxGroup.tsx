import React, { memo } from "react";
import { Link } from "react-router-dom";

interface CheckboxItemProps {
  id: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
  children: React.ReactNode;
}

const CheckboxItem = memo<CheckboxItemProps>(
  ({ id, name, checked, onChange, disabled, children }) => (
    <div className="check-check">
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={id}>
        <span>{children}</span>
      </label>
    </div>
  )
);

CheckboxItem.displayName = "CheckboxItem";

interface CheckboxGroupProps {
  formData: {
    termsAccepted: boolean;
    conditionsAccepted: boolean;
    marketingConsent: boolean;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSubmitting: boolean;
}

export const CheckboxGroup = memo<CheckboxGroupProps>(
  ({ formData, handleInputChange, isSubmitting }) => (
    <div className="contenedor-checks">
      <CheckboxItem
        id="termsAccepted"
        name="termsAccepted"
        checked={formData.termsAccepted}
        onChange={handleInputChange}
        disabled={isSubmitting}
      >
        HE LEÍDO Y ACEPTO LAS CONDICIONES CONTENIDAS EN LA POLÍTICA DE
        PRIVACIDAD SOBRE EL TRATAMIENTO DE MIS DATOS PARA GESTIONAR MI PEDIDO.
      </CheckboxItem>

      <CheckboxItem
        id="conditionsAccepted"
        name="conditionsAccepted"
        checked={formData.conditionsAccepted}
        onChange={handleInputChange}
        disabled={isSubmitting}
      >
        HE LEÍDO Y ACEPTO LAS{" "}
        <Link to="/condiciones-generales" className="condicioness">
          CONDICIONES GENERALES DE CONTRATACIÓN
        </Link>
      </CheckboxItem>

      <CheckboxItem
        id="marketingConsent"
        name="marketingConsent"
        checked={formData.marketingConsent}
        onChange={handleInputChange}
        disabled={isSubmitting}
      >
        CONSIENTO RECIBIR INFORMACIÓN COMERCIAL SOBRE LOS PRODUCTOS Y NOVEDADES
        DE DORAEMON
      </CheckboxItem>
    </div>
  )
);

CheckboxGroup.displayName = "CheckboxGroup";
