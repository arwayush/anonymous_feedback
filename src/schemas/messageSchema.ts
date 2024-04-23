import { Content } from "next/font/google";
import { z } from "zod";

export const acceptMessageSchema = z.object({
  content: z
    .string()
    .min(10, { message: "Content must be at least of 10 characeters" })
    .max(300, { message: "Content must not be longer than 300 charaters" }),
});
