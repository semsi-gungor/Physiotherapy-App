import { z } from "zod";

export const ServiceSchema = z.object({
  id: z.string().optional(),
  title: z
    .string({ required_error: "Hizmet için başlık gerekli." })
    .min(3, { message: "Başlık için en az 3 karakter girilmeli." })
    .max(50, { message: "Başlık için en fazla 50 karakter girilmeli." }),
  serviceId: z
    .string({ required_error: "Hizmet için id gerekli." })
    .min(3, { message: "Hizmet ID için en az 3 karakter girilmeli." })
    .max(30, { message: "Hizmet ID için en fazla 30 karakter girilmeli." }),
  body: z
    .string({ required_error: "Hizmet için açıklama gerekli." })
    .min(10, { message: "Açıklama için en az 10 karakter girilmeli." })
    .max(500, { message: "Açıklama için en fazla 500 karakter girilmeli." }),
  definition: z
    .string({ required_error: "Hizmet için tanım gerekli." })
    .min(30, { message: "Tanım için en az 30 karakter girilmeli." })
    .max(1000, { message: "Tanım için en fazla 1000 karakter girilmeli." }),
  bodyImage: z
    .string({ required_error: "Hizmet için görsel linki gerekli." })
    .url({ message: "Hatalı URL girişi." }),
  headerImage: z
    .string({ required_error: "Hizmet başlığı için görsel linki gerekli." })
    .url({ message: "Hatalı URL girişi." }),
  treatments: z.string().array(),
});
