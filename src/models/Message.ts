import { z } from "zod";

export const MessageSchema = z.object({
  fullName: z
    .string({
      required_error: "Lütfen isminizi giriniz.",
      invalid_type_error: "İsim ve soyisim karakterlerden oluşmalıdır.",
    })
    .trim()
    .min(2, { message: "Ad ve soyad en az 2 harfli olmalı." })
    .max(30, { message: "Ad ve soyad en falza 30 harfli olmalı." }),
  email: z.string().email().trim().toLowerCase(),
  topic: z
    .string({
      required_error: "Lütfen başlık giriniz.",
      invalid_type_error: "Başlık geçerli karakterlerden oluşmalıdır.",
    })
    .trim()
    .min(2, { message: "Başlık en az 2 harfli olmalı." })
    .max(30, { message: "Başlık en fazla 30 harfli olmalı." }),
  message: z
    .string({
      required_error: "Lütfen mesajınızı giriniz.",
      invalid_type_error: "Mesaj geçerlikarakterlerden oluşmalıdır.",
    })
    .trim()
    .min(10, { message: "Mesaj en az 10 harfli olmalı." })
    .max(200, { message: "Mesaj en fazla 200 karakter içermeli." }),
  date: z.coerce.date(),
});
