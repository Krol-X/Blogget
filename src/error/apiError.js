export class ApiError extends Error {
  constructor(status, message) {
    super();
    this.name = 'ApiError';
    this.status = status;
    this.message = message;
  }
}

const newApiError = (status) => (
  (msg) => new ApiError(status, msg)
);

export const UNAUTHORIZED = 401;
export const FORBIDDEN = 403;
export const NOTFOUND = 404;
export const INTERNAL = 500;

export const unauthorizedError = newApiError(UNAUTHORIZED);
export const forbiddenError = newApiError(FORBIDDEN);
export const notFoundError = newApiError(NOTFOUND);
export const internalError = newApiError(INTERNAL);

export const isApiError = (obj, status) => (
  (obj instanceof ApiError) && (obj.status === status)
);
