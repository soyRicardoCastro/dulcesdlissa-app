"use client";

import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import type { Database } from "@/lib/database.types";
import Link from "next/link";
type Course = Database["public"]["Tables"]["course"]["Row"];

export default function RealtimeCourses({
  serverCourses,
}: {
  serverCourses: Course[];
}) {
  const [courses, setCourses] = useState(serverCourses);
  const supabase = createClientComponentClient<Database>();

  useEffect(() => {
    setCourses(serverCourses);
  }, [serverCourses]);

  useEffect(() => {
    const channel = supabase
      .channel("*")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "posts" },
        (payload) =>
          setCourses((courses) => [...courses, payload.new as Course])
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, setCourses, courses]);

  return (
    <>
      {courses.map((course) => (
        <div key={course.course_id}>
          <Link href={`/${course.course_id}`}>{course.name}</Link>
        </div>
      ))}
    </>
  );
}
