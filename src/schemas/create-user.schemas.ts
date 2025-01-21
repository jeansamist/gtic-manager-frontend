import { z } from "zod";
import { personSchema } from "./person.schema";
import { userSchema } from "./user.schema";
export const createUserSchema = userSchema.merge(personSchema);

export type CreateUserSchemaType = z.infer<typeof createUserSchema>;
