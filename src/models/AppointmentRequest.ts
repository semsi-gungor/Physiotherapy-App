import { z } from "zod";

export const AppointmentRequestSchema = z.object({
  fullName: z
    .string({
      required_error: "Lütfen isminizi giriniz.",
      invalid_type_error: "İsim ve soyisim karakterlerden oluşmalıdır.",
    })
    .trim()
    .min(2, { message: "Ad ve soyad en az 2 harfli olmalı." })
    .max(30, { message: "Ad ve soyad en falza 30 harfli olmalı." }),
  email: z.string().email().trim().toLowerCase(),
  tel: z
    .string()
    .trim()
    .min(10, { message: "Telefon en az 10 haneli olmalı." })
    .max(16, { message: "Telefon en fazla 16 haneden oluşabilir." })
    .regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, {
      message: "Hatalı telefon numarası.",
    }),
  message: z
    .string({
      required_error: "Lütfen mesajınızı giriniz.",
      invalid_type_error: "Mesaj geçerlikarakterlerden oluşmalıdır.",
    })
    .trim()
    .min(10, { message: "Mesaj en az 10 harfli olmalı." })
    .max(200, { message: "Mesaj en fazla 200 karakter içermeli." }),
  creationDate: z.string(),
  serviceId: z.string(),
  userId: z.string().optional(),
});
