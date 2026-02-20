import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().min(3, "Name must be at least 3 characters"),

  email: z.string().email("Enter email as example@eg.com"),

  country: z.string().min(1, "Please select a country"),

  gender: z.string().min(1, "Please select gender"),

  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept terms" }),
  }),

  subscribe: z.boolean().optional(),

  source: z.string().optional(),
});
