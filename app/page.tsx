/* eslint-disable @next/next/no-img-element */

import { options } from "../app/api/auth/[...nextauth]/option";
import Image from "next/image";
import { getServerSession } from "next-auth";
import learning from "../lib/distance-learning.svg"
export default async function Home() {
  const session = await getServerSession(options);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-white">
      <div className="flex items-center gap-2">
        {/* {session ? (
          <Link href="/api/auth/signout?callbackUrl=/">
            <div className="flex items-center justify-between  relative group">
              <img
                src={session.user.image}
                height={20}
                width={23}
                className="text-gray-300 hover:text-white cursor-pointer rounded-full"
                alt="Image"
              />
              <p className="absolute left-[50px] p-1 bg-transparent text-white border-none font-semibold text-xl opacity-0 group-hover:opacity-100">
                Logout
              </p>
            </div>
          </Link>
        ) : (
          <Link href="/api/auth/signin">
            <div className="flex items-center justify-between  relative group">
              <UserCircleIcon
                width={23}
                className="text-gray-300 hover:text-white cursor-pointer"
              />
              <p className="absolute left-[50px] p-1 bg-transparent text-white border-none font-semibold text-xl opacity-0 group-hover:opacity-100">
                Login
              </p>
            </div>
          </Link>
        )} */}

        <div>
          <h1 className="text-7xl font-bold">
            Preparing for your <br />
            AWS and Google
            <br /> Certifications was never this Easy
          </h1>
        </div>
        <div>
          <Image src={learning} alt="Error" className="" />

        </div>
      </div>
    </main>
  );
}
