import { z } from "zod";

export const signInSchema = z.object({
    email: z
        .string()
        .email()
        .refine((email) => email.endsWith('@gmail.com'), { message: 'Invalid email address' }),

    password: z
        .string()
        .min(1, { message: 'Password is required' })
        .transform((val) => val.replace(/\s/g, ""))
        .refine((val) => /^[a-zA-Z0-9@#$!_]+$/.test(val), { message: 'Password can only contain (a-z, A-Z, 0-9 & "@/#/$/!/_"' })
})