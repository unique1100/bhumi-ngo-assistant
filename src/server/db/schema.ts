import { relations, sql } from "drizzle-orm";
import {
  index,
  integer,
  pgTableCreator,
  primaryKey,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { type AdapterAccount } from "next-auth/adapters";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `bhumi_${name}`);


export const volunteers = createTable("volunteers", {
  id: varchar("id", { length: 255 }).notNull().primaryKey(),
  name: varchar("name", { length: 255 }),
  phone: varchar("phone", { length: 255 }).notNull(),
  location: varchar("location", { length: 255 }).notNull(),
  verified: timestamp("verified", {
    mode: "date",
    withTimezone: true,
  }).default(sql`CURRENT_TIMESTAMP`),
});

export const sessions = createTable("sessions", {
  id: varchar("id", { length: 255 }).notNull().primaryKey(),
  expires: timestamp("expires", {
    mode: "date",
    withTimezone: true,
  }).notNull(),
  data: text("data").notNull(),
});

export const donations = createTable("donations", {
  id: serial("id").primaryKey(),
  amount: integer("amount").notNull(),
  name: varchar("name", { length: 255 }).notNull(),
})