import { z } from "zod";

export const signUpSchema = z.object({
    firstName: z
        .string()
        .min(1, { message: "First name is required" })
        .max(20, { message: "First name must be less than 20 characters" })
        .regex(/^[a-zA-Z]+$/, { message: "First name must only contain letters" }),

    lastName: z
        .string()
        .min(1, { message: "Last name is required" })
        .max(20, { message: "Last name must be less than 20 characters" })
        .regex(/^[a-zA-Z]+$/, { message: "Last name must only contain letters" }),

    email: z
        .string()
        .email({ message: "Invalid email address" })
        .refine((email) => email.endsWith('@gmail.com'), { message: "Only gmail accounts are allowed" }),

    phone: z
        .string()
        .length(10, { message: 'Phone no. should only be of 10 numbers' }),

    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters long" })
        .max(20, { message: "Maximum limit of password is 20 characters" })
        .refine((password) => /[a-z]/.test(password), { message: "Password must contain at least one lowercase letter" })
        .refine((password) => /[A-Z]/.test(password), { message: "Password must contain at least one uppercase letter" })
        .refine((password) => /\d/.test(password), { message: "Password must contain at least one numeric" })
        .refine((password) => /[@#$!_]/.test(password), { message: "Password must contain at least one special character (@/#/$/!/_)" }),

    confirmPassword: z.string()
}).superRefine(({ password, confirmPassword }, ctx) => {
    if(password !== confirmPassword) {
        ctx.addIssue({
            code: "custom",
            path: ["confirmPassword"],
            message: "Passwords do not match"
        });
    }
});