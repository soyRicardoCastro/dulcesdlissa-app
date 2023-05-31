"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/react-hook-form/form";

const createCourseSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "El curso debe tener como minimo dos letras.",
    })
    .max(50, {
      message: "No puede ser mas largo de 50 letras.",
    }),
  description: z.string({
    required_error: "Por favor provee una descripción del curso.",
  }),
  sections: z
    .array(
      z
        .object({
          name: z.string({
            required_error: "Por favor provee un nombre de la sección",
          }),
          lessons: z
            .object({
              name: z.string({
                required_error: "Por favor provee un nombre de la lección",
              }),
              resources: z
                .object({
                  name: z.string({
                    required_error: "Por favor provee un nombre del recurso",
                  }),
                  type: z.enum(["VIDEO", "ARCHIVO", "IMAGEN"]),
                  url: z.string(),
                })
                .optional(),
            })
            .optional(),
        })
        .optional()
    )
    .optional(),
});

type CreateCourseValues = z.infer<typeof createCourseSchema>;

// This can come from your database or API.
const defaultValues: Partial<CreateCourseValues> = {
  name: "Curso de Muestra",
  description: "Descripcion de muestra",
  sections: [
    {
      name: "Seccion 1",
      lessons: {
        name: "Lesson 1",
        resources: {
          name: "Imagen",
          type: "IMAGEN",
          url: "",
        },
      },
    },
  ],
};

export function ProfileForm() {
  const form = useForm<CreateCourseValues>({
    resolver: zodResolver(createCourseSchema),
    defaultValues,
    mode: "onChange",
  });

  const { fields, append } = useFieldArray({
    name: "sections",
    control: form.control,
  });

  function onSubmit(data: CreateCourseValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre del Curso</FormLabel>
              <FormControl>
                <Input placeholder="Curso de Mini Pizzas" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                You can manage verified email addresses in your{" "}
                <Link href="/examples/forms">email settings</Link>.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descripción</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Este curso te ayudara a llevar a"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          {fields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`sections.${index}`}
              render={() => (
                <FormItem>
                  <FormLabel className={cn(index !== 0 && "sr-only")}>
                    Secciones del curso
                  </FormLabel>
                  <FormDescription className={cn(index !== 0 && "sr-only")}>
                    Añade secciones del curso, junto con las lecciones que este
                    tiene y los recursos
                  </FormDescription>
                  <FormControl>
                    <Input
                      {...form.register(`sections.${index}.name`)}
                      placeholder="Nombre de la seccion"
                    />
                    <Input
                      {...form.register(
                        `sections.${index}.lessons.name` as const
                      )}
                      placeholder="Nombre de la leccion"
                    />
                    <Input
                      {...form.register(
                        `sections.${index}.lessons.resources.name` as const
                      )}
                      placeholder="Nombre del recurso"
                    />
                    <Input
                      {...form.register(
                        `sections.${index}.lessons.resources.type` as const
                      )}
                      placeholder="Tipo del recurso: VIDEO | IMAGEN | ARCHIVO"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button
            type="button"
            variant="link"
            size="sm"
            className="mt-1"
            onClick={() => append({ name: "Lesson" })}
          >
            Crear otra leccion
          </Button>
        </div>
        <Button type="submit">Crear Curso</Button>
      </form>
    </Form>
  );
}
