import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
export default async function Home() {
  const session=await getAuthSession();
  if(session?.user){
    redirect("/dashboard");
  }
  return (
    <div className="absolute translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
    Hello
    </div>
  );
}
