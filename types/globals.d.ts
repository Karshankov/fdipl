export { };

// Create a type for the roles
export type Roles = "Преподаватель" | "Учащийся" | "Пользователь";

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Roles
    };
  }
}