import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Flame } from "lucide-react";
// import WordCloud from "../WordCloud";
// import { prisma } from "@/lib/db";



const HotTopicsCard = async () => {
//   const topics = await prisma.topic_count.findMany({});
//   const formattedTopics = topics.map((topic) => {
//     return {
//       text: topic.topic,
//       value: topic.count,
//     };
//   });
  return (
    <Card className="hover:cursor-pointer hover:opacity-75 col-span-3">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-2xl font-bold">History</CardTitle>
        <Flame size={28} strokeWidth={2.5} />
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          View past quiz attempts.
        </p>
      </CardContent>
    </Card>
  );
};

export default HotTopicsCard;