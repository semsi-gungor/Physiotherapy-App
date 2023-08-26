import { z } from "zod";

export const BlogConfirmSchema = z.object({
  title: z
    .string()
    .trim()
    .min(2, { message: "Başlıken az 5 karakterden oluşmalı." })
    .max(40, { message: "Başlık en fazla 40 karakterden oluşabilir." }),
  summary: z
    .string()
    .trim()
    .min(2, { message: "Özet az 20 karakterden oluşmalı." })
    .max(500, { message: "Özet en fazla 500 karakterden oluşabilir." }),
  image: z.string().url({ message: "Geçersiz resim URL'si." }),
  tags: z.string().array(),
});
