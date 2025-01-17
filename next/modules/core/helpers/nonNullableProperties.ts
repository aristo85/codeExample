export type NonNullableProperties<T, P extends keyof T> = Omit<T, P> & {
  // T - type you want to modify; P - the field from T that we want to change to nonNullable.
  // Omit - delete P value from T
  // K in P - name of our value P That we passed here and T[K] - type of value
  [K in P]: NonNullable<T[K]>;
};
