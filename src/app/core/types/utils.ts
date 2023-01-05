// export type ArrayElement<ArrayType extends readonly unknown[]> =
//   ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export type ArrayElement<A> = A extends readonly (infer T)[] ? T : never
