import { Badge } from "@/components/ui/badge";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
export default async function Home() {
  const session = await getAuthSession();
  if (session?.user) {
    redirect("/dashboard");
  }
  return (
    <div className="flex flex-col items-center text-center min-h-screen pt-28 px-5 bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <div className="flex items-center justify-center p-4 md:px-8  gap-1 text-4xl md:text-7xl">
        <p className=" font-heading text-3xl md:text-6xl lg:text-7xl">
          Welcome to{" "}
        </p>
        <p className="  font-bold text-neutral-400 drop-shadow-xl shadow-white">
          {" "}
          Quizzy{" "}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center px-8">
        <p className="max-w-[42rem] leading-normal text-slate-400 text-center sm:text-xl sm:leading-8">
          Quizzy is a platform that helps you to prepare for NPTEL by taking
          quizzes on any topic.
        </p>
        <Badge className=" bg-green-400 mt-3 p-1 ">SignIn to Start</Badge>
      </div>
    </div>
  );
}
