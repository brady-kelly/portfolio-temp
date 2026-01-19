type Success<T> = {
  success: true;
  data: T;
};

type Failure<E> = {
  success: false;
  error: E;
};

// The Result is a union of these two possibilities
export type Result<T, E> = Success<T> | Failure<E>;

// Helper functions for easy creation
export function ok<T, E>(data: T): Result<T, E> {
  return { success: true, data };
}

export function err<T, E>(error: E): Result<T, E> {
  return { success: false, error };
}
