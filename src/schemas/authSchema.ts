import type { Static } from "@sinclair/typebox";
import { Type } from "@sinclair/typebox";

export const responseSchema = Type.Object({
  message: Type.String(),
});
export const querySchema = Type.Object({
  username: Type.String(),
  password: Type.String(),
});

export type Response = Static<typeof responseSchema>;
export type Query = Static<typeof querySchema>;
