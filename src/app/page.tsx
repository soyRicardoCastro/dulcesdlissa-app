import Image from "next/image";
import { cookies } from "next/headers";
import Nav from "@/components/nav";
import FormUser from "@/components/form-user";
import RealtimeCourses from "./realtime-courses";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database.types";

export default async function Page() {
  const supabase = createServerComponentClient<Database>({
    cookies,
  });

  const { data } = await supabase.from("course").select("*");

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100">
      <Nav />

      <Hero />

      <section>
        <RealtimeCourses serverCourses={data ?? []} />
      </section>
    </main>
  );
}

export function Hero() {
  return (
    <div className="container-grid">
      <div className="flex flex-col gap-2 md:hidden">
        <div className="grid grid-cols-4 gap-2">
          <Image
            alt="torta de chocolate"
            src="/aniversario.jpeg"
            className="h-52 w-full"
            width={600}
            height={200}
          />
          <Image
            alt="torta de chocolate"
            src="/natalia.jpeg"
            className="h-52 w-full"
            width={200}
            height={200}
          />
          <Image
            alt="torta de chocolate"
            src="/julissa.jpeg"
            className="h-52 w-full"
            width={200}
            height={200}
          />
          <Image
            alt="torta de chocolate"
            src="/pedacito-de-fresa.jpeg"
            className="h-52 w-full"
            width={200}
            height={200}
          />
        </div>
        <FormUser />
      </div>
      <div className="child">
        <div>
          <Image
            alt="torta de chocolate"
            src="/natalia.jpeg"
            className="h-full w-full"
            width={600}
            height={600}
          />
        </div>
        <div>
          <Image
            alt="torta de chocolate"
            src="/todavia-no-soy-chef.jpeg"
            className="h-full w-full"
            width={600}
            height={600}
          />
        </div>
      </div>

      <div className="child mid">
        <div>
          <div>
            <Image
              alt="torta de chocolate"
              src="/torta-de-fresa-invertida.jpeg"
              className="h-full w-full"
              width={600}
              height={600}
            />
          </div>
          <div>
            <Image
              alt="torta de chocolate"
              src="/julissa-torta.jpeg"
              className="h-full w-full"
              width={600}
              height={600}
            />
          </div>
        </div>

        <FormUser />

        <div>
          <div>
            <Image
              alt="torta de chocolate"
              src="/julissa.jpeg"
              className="h-full w-full"
              width={600}
              height={600}
            />
          </div>
          <div>
            <Image
              alt="torta de chocolate"
              src="/torta-pedacito-y-grande.jpeg"
              className="h-full w-full"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>

      <div className="child">
        <div>
          <Image
            alt="torta de chocolate"
            src="/julissa.jpeg"
            className="h-full w-full"
            width={600}
            height={600}
          />
        </div>
        <div>
          <Image
            alt="torta de chocolate"
            src="/torta-pedacito-y-grande.jpeg"
            className="h-full w-full"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}
