import { z } from "zod";

export const userSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  password: z.string().min(1, { message: "Password is required" }),
  roleId: z.number().optional(),
  personId: z.number().optional(),
});

export type UserSchemaType = z.infer<typeof userSchema>;
