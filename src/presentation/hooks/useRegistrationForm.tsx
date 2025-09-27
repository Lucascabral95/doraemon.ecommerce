import { useState, useCallback, useEffect } from "react";
import {
  RegisterFormData,
  RegisterFormState,
} from "../../infrastructure/types/register.types";
import { ValidationService } from "../../infrastructure/services/validation.service";

const initialFormData: RegisterFormData = {
  nombre: "",
  apellido: "",
  email: "",
  password: "",
  confirmPassword: "",
  fechaNacimiento: "",
  termsAccepted: false,
  conditionsAccepted: false,
  marketingConsent: false,
};

export const useRegistrationForm = () => {
  const [formState, setFormState] = useState<RegisterFormState>({
    data: initialFormData,
    errors: {},
    isSubmitting: false,
    isValid: false,
    touchedFields: new Set(),
  });

  const validateForm = useCallback((data: RegisterFormData) => {
    const errors = ValidationService.validateRegistrationForm(data);
    const isValid = Object.keys(errors).length === 0;
    setFormState((prev) => ({ ...prev, errors, isValid }));
  }, []);

  useEffect(() => {
    validateForm(formState.data);
  }, [formState.data, validateForm]);

  const updateField = useCallback(
    <K extends keyof RegisterFormData>(
      field: K,
      value: RegisterFormData[K]
    ) => {
      setFormState((prev) => ({
        ...prev,
        data: { ...prev.data, [field]: value },
        touchedFields: new Set(prev.touchedFields).add(field),
      }));
    },
    []
  );

  const touchField = useCallback((field: keyof RegisterFormData) => {
    setFormState((prev) => ({
      ...prev,
      touchedFields: new Set(prev.touchedFields).add(field),
    }));
  }, []);

  const setSubmitting = useCallback((isSubmitting: boolean) => {
    setFormState((prev) => ({ ...prev, isSubmitting }));
  }, []);

  const setGeneralError = useCallback((error: string) => {
    setFormState((prev) => ({
      ...prev,
      errors: { ...prev.errors, general: error },
    }));
  }, []);

  const resetForm = useCallback(() => {
    setFormState({
      data: initialFormData,
      errors: {},
      isSubmitting: false,
      isValid: false,
      touchedFields: new Set(),
    });
  }, []);

  return {
    formData: formState.data,
    errors: formState.errors,
    isSubmitting: formState.isSubmitting,
    isValid: formState.isValid,
    touchedFields: formState.touchedFields,
    updateField,
    touchField,
    setSubmitting,
    setGeneralError,
    resetForm,
  };
};
