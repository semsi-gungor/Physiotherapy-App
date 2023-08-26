import { z } from "zod";

export const UserSchema = z.object({
  id: z.string().optional(),
  fullName: z
    .string({
      required_error: "Lütfen isminizi giriniz.",
      invalid_type_error: "İsim ve soyisim karakterlerden oluşmalıdır.",
    })
    .trim()
    .min(5, { message: "İsim ve soysimiz en az 2 harfli olmalı." })
    .max(40, { message: "İsim en fazla 40 harfli olmalı." }),
  email: z
    .string({ required_error: "Lütfen e-mailinizi giriniz." })
    .email({ message: "Lütfen geçerli bir email giriniz." })
    .trim()
    .toLowerCase(),
  password: z
    .string({
      required_error: "Lütfen şifre giriniz.",
    })
    .trim()
    .min(8, { message: "Şifre en az 8 karakterden oluşmalı." })
    .max(16, { message: "Şifre en fazla 16 karakterden oluşmalı." }),
  tel: z
    .string()
    .trim()
    .min(10, { message: "Telefon en az 10 haneli olmalı." })
    .max(16, { message: "Telefon en fazla 16 haneden oluşabilir." })
    .regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, {
      message: "Hatalı telefon numarası.",
    }),
  role: z.enum(["PERSONNEL", "USER", "ADMIN"]),
  dob: z.string({
    required_error: "Lütfen doğum tarhinizi giriniz.",
  }),
});

export const LoginSchema = z.object({
  email: z
    .string({ required_error: "Lütfen e-mailinizi giriniz." })
    .email({ message: "Lütfen geçerli bir email giriniz." })
    .trim()
    .toLowerCase(),
  password: z
    .string({
      required_error: "Lütfen şifre giriniz.",
    })
    .trim()
    .min(8, { message: "Şifre en az 8 karakterden oluşmalı." })
    .max(16, { message: "Şifre en fazla 16 karakterden oluşmalı." }),
});

export const UserDeleteSchema = z.object({
  email: z
    .string({ required_error: "Lütfen e-mailinizi giriniz." })
    .email({ message: "Lütfen geçerli bir email giriniz." })
    .trim()
    .toLowerCase(),
  role: z.enum(["PERSONNEL", "ADMIN", "USER"]),
});

export const UserUpdateSchema = z.object({
  email: z
    .string({ required_error: "Lütfen e-mail giriniz." })
    .email({ message: "Lütfen geçerli bir email giriniz." })
    .trim()
    .toLowerCase(),
  dob: z.string({
    required_error: "Lütfen doğum tarhi giriniz.",
  }),
  fullName: z
    .string({
      required_error: "Lütfen isim giriniz.",
      invalid_type_error: "İsim ve soyisim karakterlerden oluşmalıdır.",
    })
    .trim()
    .min(5, { message: "İsim ve soyisim en az 2 harfli olmalı." })
    .max(40, { message: "İsim en fazla 40 harfli olmalı." }),
  tel: z
    .string({
      required_error: "Lütfen telefon numarası giriniz.",
    })
    .trim()
    .min(10, { message: "Telefon en az 10 haneli olmalı." })
    .max(16, { message: "Telefon en fazla 16 haneden oluşabilir." })
    .regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, {
      message: "Hatalı telefon numarası.",
    }),
});
