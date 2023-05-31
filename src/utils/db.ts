import { Generated } from "kysely";
import { createKysely } from "@vercel/postgres-kysely";

interface UserTable {
  user_id: Generated<string>;
  clerk_id: string;
  isAdmin: boolean;
}

interface CourseTable {
  course_id: Generated<string>;
  name: string;
  description: string;
  category: "curso" | "curso";
  image_banner_url: string;
  video_trailer_url: string;
  price: number;
}

interface CoursesUser {
  courses_user_id: Generated<string>;
  course_id: string;
  users_id: Array<string>;
}

interface Section {
  user_id: Generated<string>;
  title: string;
}

interface SectionLesson {
  section_lesson_id: Generated<string>;
  course_id: string;
  lessons_id: Array<string>;
}

interface Lesson {
  lesson_id: Generated<string>;
  title: string;
}

interface LessonResourceSection {
  lesson_resource_section_id: Generated<string>;
  section_id: string;
  resource_id: Array<string>;
}

interface Resource {
  resource_id: Generated<string>;
  type: "video" | "file";
  video_url?: string;
  file_url?: string;
}

interface ResourceLesson {
  lesson_resource_id: Generated<string>;
  lesson_id: string;
  resource_id: string;
}

export interface Database {
  users: UserTable;
  courses: CourseTable;
  user_courses: CoursesUser;
  section: Section;
  section_lesson: SectionLesson;
  lesson: Lesson;
  lesson_resource_section: LessonResourceSection;
  resource: Resource;
  resource_lesson: ResourceLesson;
}

export const db = createKysely<Database>();
export { sql } from "kysely";
