import React, { memo } from "react";
import { getPasswordStrength } from "../../../infrastructure/utils/validation";

interface PasswordStrengthProps {
  password: string;
}

export const PasswordStrength = memo<PasswordStrengthProps>(({ password }) => {
  if (!password) return null;

  const { strength, color, score } = getPasswordStrength(password);

  return (
    <div className="password-strength" style={{ marginTop: "8px" }}>
      <div
        className="strength-bar"
        style={{
          height: "4px",
          backgroundColor: "#e5e7eb",
          borderRadius: "2px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${score}%`,
            backgroundColor: color,
            transition: "all 0.3s ease",
          }}
        />
      </div>
      <span
        style={{
          fontSize: "12px",
          color,
          marginTop: "4px",
          display: "block",
        }}
      >
        Fuerza: {strength}
      </span>
    </div>
  );
});

PasswordStrength.displayName = "PasswordStrength";
