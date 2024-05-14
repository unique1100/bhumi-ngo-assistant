import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { env } from "@/env";
import { volunteers } from "@/server/db/schema";
import { db } from "@/server/db";
import { eq } from "drizzle-orm";

export const postRouter = createTRPCRouter({

  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      const result = await fetch(`https://api.chatpdf.com/v1/chats/message`, {
        method: 'POST',
        headers: {
          'x-api-key': env["API_KEY"],
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sourceId: env["SOURCE_ID"],
          messages: [{ role: 'user', content: input.name }],
        }),
      });
      if (!result.ok) {
        throw new Error('Failed to fetch data');
      }
      return result.json();

     
    }),


    add: publicProcedure
    .input(z.object({ name: z.string().min(1), phone: z.string().min(9), location: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
        const random_integer = Math.floor(Math.random() * 1000000);
        console.log("Came happening");
        const result = await db.select().from(volunteers).where(eq(volunteers.phone, input.phone));
        if (result.length > 0) {
            return { msg: "Phone number already exists" };
        } else {
            await db.insert(volunteers).values({ id: random_integer.toString(), name: input.name, phone: input.phone, location: input.location });
            return { msg: "Volunteer Registration Success !" };
        }
    }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
