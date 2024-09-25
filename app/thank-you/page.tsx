"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ThankYouPage() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/');
    }, 3000);
    return () => clearTimeout(timeout);
  }, [router]);
  return (
    <div className="h-screen p-8  pt-28  bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]  dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading">Thank You</h1> 
  
    </div>
  );
}
