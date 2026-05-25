"use client";
import { useState, useEffect } from "react";
import Text from "@/components/ui/Text";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

export default function OverViewSection() {
  const [tutorApplications, setTutorApplications] = useState([]);

  useEffect(() => {
    async function getTutorApplications() {
      const res = await fetch("/api/admin/tutor-applications");
      const data = await res.json();
      console.log(data);
      if (data.success) setTutorApplications(data.data);
    }
    getTutorApplications();
  }, []);

  return (
    <section className="flex flex-col gap-4 px-4 py-2  bg-blue-50">
      <Text className="text-2xl">Overview</Text>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2">
        <Card
          title="Tutor Applications"
          count={tutorApplications.length}
          href="/admin/tutor-applications"
        />
      </ul>
    </section>
  );
}

function Card({
  title,
  count,
  href,
}: {
  title: string;
  count: number;
  href: string;
}) {
  return (
    <Link href={href}>
      <li className="flex flex-col gap-4 bg-white rounded-lg p-4 border border-gray-200 relative">
        <Text className="text-lg font-medium">{title}</Text>
        <h3 className="text-3xl font-semibold">{count}</h3>
        <MdKeyboardArrowRight className="text-2xl absolute bottom-4 right-4 text-gray-500" />
      </li>
    </Link>
  );
}
