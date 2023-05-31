import {
  pgTable,
  serial,
  text,
  boolean,
  pgEnum,
  integer,
} from "drizzle-orm/pg-core";
import { relations, InferModel } from "drizzle-orm";
import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";

export const courseCategoryEnum = pgEnum("course_category", [
  "CURSO",
  "TALLER",
]);
export const resourceTypeEnum = pgEnum("resource_type", ["VIDEO", "FILE"]);

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  userId: text("user_id"),
  isAdmin: boolean("is_admin").default(false),
});

export const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  name: text("name"),
  category: courseCategoryEnum("course_category"),
  description: text("description"),
  bannerImageUrl: text("banner_image_url"),
  videoTrailerUrl: text("video_trailer_url"),
  price: integer("price"),
});

export const usersRelations = relations(users, ({ many }) => ({
  courses: many(courses),
}));

export const coursesRelations = relations(courses, ({ many }) => ({
  users: many(users),
  sections: many(section),
}));

export const section = pgTable("section", {
  id: serial("id").primaryKey(),
  title: text("title"),
  courseId: integer("course_id").references(() => courses.id),
});

export const sectionRelation = relations(section, ({ one, many }) => ({
  course: one(courses),
  lessons: many(lesson),
}));

export const lesson = pgTable("lesson", {
  id: serial("id").primaryKey(),
  title: text("title"),
  sectionId: integer("section_id").references(() => section.id),
});

export const lessonRelation = relations(lesson, ({ one, many }) => ({
  section: one(section),
  resources: many(resource),
}));

export const resource = pgTable("resource", {
  id: serial("id").primaryKey(),
  type: resourceTypeEnum("resource_type"),
  videoUrl: text("video_url"),
  fileUrl: text("file_url"),
  lessonId: integer("lesson_id").references(() => lesson.id),
});

export const resourceRelation = relations(resource, ({ one }) => ({
  lesson: one(lesson),
}));

export type User = InferModel<typeof users>;
export type CreateUser = InferModel<typeof users, "insert">;
export type Course = InferModel<typeof courses>;
export type CreateCourse = InferModel<typeof courses, "insert">;
export type Section = InferModel<typeof section>;
export type Lesson = InferModel<typeof lesson>;
export type Resource = InferModel<typeof resource>;

export const db = drizzle(sql);
