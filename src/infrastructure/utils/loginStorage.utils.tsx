import { LOGIN_CONFIG } from "../constants/login.constants";

export class LoginStorageManager {
  static saveAuthData(email: string): void {
    try {
      localStorage.setItem(LOGIN_CONFIG.storage.authStatus, "true");

      const emailData = { email };
      localStorage.setItem(
        LOGIN_CONFIG.storage.userEmail,
        JSON.stringify(emailData)
      );
    } catch (error) {
      console.error("Error saving auth data:", error);
    }
  }

  static clearAuthData(): void {
    localStorage.removeItem(LOGIN_CONFIG.storage.authStatus);
    localStorage.removeItem(LOGIN_CONFIG.storage.userEmail);
    // localStorage.removeItem("datosMios");
  }

  static hasActiveSession(): boolean {
    return localStorage.getItem(LOGIN_CONFIG.storage.authStatus) === "true";
  }

  static getSavedEmail(): string | null {
    try {
      const emailData = localStorage.getItem(LOGIN_CONFIG.storage.userEmail);
      if (emailData) {
        const parsed = JSON.parse(emailData);
        return parsed.email || null;
      }
    } catch (error) {
      console.error("Error reading saved email:", error);
    }
    return null;
  }
}
