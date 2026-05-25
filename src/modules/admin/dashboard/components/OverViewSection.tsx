"use client";
import { useState, useEffect } from "react";
import Text from "@/components/ui/Text";
import { MdKeyboardArrowRight } from "react-icons/md";
import CircularProgress from "@mui/material/CircularProgress";
import Link from "next/link";

export default function OverViewSection() {
  const [tutorApplications, setTutorApplications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function getTutorApplications() {
      const res = await fetch("/api/admin/tutor-applications");
      const data = await res.json();
      console.log(data);
      if (data.success) setTutorApplications(data.data);
      setIsLoading(false);
    }
    getTutorApplications();
  }, []);

  return (
    <section className="flex flex-col gap-4 px-4 py-2  bg-blue-50 md:px-[4%]">
      <Text className="text-2xl md:text-4xl">Overview</Text>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 px-2">
        <Card
          title="Tutor Applications"
          count={tutorApplications.length}
          href="/admin/tutor-applications"
          isLoading={isLoading}
        />
      </ul>
    </section>
  );
}

function Card({
  title,
  count,
  href,
  isLoading,
}: {
  title: string;
  count: number;
  href: string;
  isLoading: boolean;
}) {
  return (
    <Link href={href}>
      <li className="flex flex-col gap-4 bg-white rounded-lg p-4 border border-gray-200 relative">
        <Text className="text-lg font-medium md:text-2xl">{title}</Text>
        {!isLoading && (
          <h3 className="text-3xl font-semibold md:text-4xl">{count}</h3>
        )}
        {isLoading && <CircularProgress size={28} />}
        <MdKeyboardArrowRight className="text-2xl absolute bottom-4 right-4 text-gray-500" />
      </li>
    </Link>
  );
}
