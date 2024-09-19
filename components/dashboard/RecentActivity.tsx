"use client"
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useRouter } from "next/navigation";

const RecentActivityCard =() => {
  const router = useRouter();
  return (
    <Card className="col-span-4 lg:col-span-3" onClick={() => {
      router.push("/recent");
    }}>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Recent Activity
        </CardTitle>
        <CardDescription>
        Get a quick overview of your recent activity.
        </CardDescription>
      </CardHeader>
      <CardContent className="max-h-[580px] overflow-scroll">
      </CardContent>
    </Card>
  
  );
};

export default RecentActivityCard;