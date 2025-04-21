export const extractErrorMessage = (error: unknown) =>
  error instanceof Error ? error.message : error;
