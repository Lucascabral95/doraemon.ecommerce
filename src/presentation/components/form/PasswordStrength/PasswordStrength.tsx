import React from "react";

import { PasswordValidation } from "../../../../infrastructure/types/register.types";
import { PASSWORD_STRENGTH_CONFIG } from "../../../../infrastructure/constants/register.constants";

interface PasswordStrengthProps {
  validation: PasswordValidation;
  showRequirements?: boolean;
}

export const PasswordStrength: React.FC<PasswordStrengthProps> = ({
  validation,
  showRequirements = true,
}) => {
  const config = PASSWORD_STRENGTH_CONFIG[validation.strength];

  return (
    <div className="password-strength">
      <div className="strength-bar">
        <div
          className="strength-fill"
          style={{
            width: `${validation.score}%`,
            backgroundColor: config.color,
          }}
        />
      </div>

      <div className="strength-label" style={{ color: config.color }}>
        {config.label}
      </div>

      {showRequirements && (
        <div className="password-requirements">
          <div
            className={`requirement ${validation.minLength ? "met" : "unmet"}`}
          >
            <span className="icon">{validation.minLength ? "✓" : "○"}</span>
            Al menos 6 caracteres
          </div>
          <div
            className={`requirement ${
              validation.hasUpperCase ? "met" : "unmet"
            }`}
          >
            <span className="icon">{validation.hasUpperCase ? "✓" : "○"}</span>
            Una letra mayúscula
          </div>
          <div
            className={`requirement ${
              validation.hasLowerCase ? "met" : "unmet"
            }`}
          >
            <span className="icon">{validation.hasLowerCase ? "✓" : "○"}</span>
            Una letra minúscula
          </div>
          <div
            className={`requirement ${validation.hasNumbers ? "met" : "unmet"}`}
          >
            <span className="icon">{validation.hasNumbers ? "✓" : "○"}</span>
            Un número
          </div>
          <div
            className={`requirement ${
              validation.hasSpecialChars ? "met" : "unmet"
            }`}
          >
            <span className="icon">
              {validation.hasSpecialChars ? "✓" : "○"}
            </span>
            Un carácter especial
          </div>
        </div>
      )}
    </div>
  );
};
