import { z } from "zod";

export const personSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  birthdate: z.date().min(new Date(1900, 0, 1), { message: "Invalid date" }),
  gender: z.enum(["male", "female"]),
  avatar: z.string().optional(),
  phoneNumber: z
    .string()
    .regex(/^\+\d+$/, "Phone number must start with a '+'")
    .min(1, { message: "Phone is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  email: z.string().email().min(1, { message: "Email is required" }),
});

export type PersonSchemaType = z.infer<typeof personSchema>;
