"use client";
import { useState, useEffect } from "react";
import Text from "@/components/ui/Text";
import { MdKeyboardArrowRight } from "react-icons/md";
import CircularProgress from "@mui/material/CircularProgress";
import Link from "next/link";
import MuiCard from "@mui/material/Card";

export default function OverViewSection() {
  const [tutorApplications, setTutorApplications] = useState([]);
  const [parentApplications, setParentApplications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function getApplications() {
      //for tutor applications
      const res = await fetch("/api/admin/tutor-applications");
      const data = await res.json();
      if (data.success) setTutorApplications(data.data);
      //for parent applications
      const res2 = await fetch("/api/admin/parent-applications");
      const data2 = await res2.json();
      if (data2.success) setParentApplications(data2.data);
      setIsLoading(false);
    }
    getApplications();
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
        <Card
          title="Parent Applications"
          count={parentApplications.length}
          href="/admin/parent-applications"
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
      <MuiCard className="flex flex-col gap-4 p-4 border border-gray-200 relative">
        <Text className="text-lg font-medium md:text-2xl">{title}</Text>
        {!isLoading && (
          <h3 className="text-3xl font-semibold md:text-4xl">{count}</h3>
        )}
        {isLoading && <CircularProgress size={28} />}
        <MdKeyboardArrowRight className="text-2xl absolute bottom-4 right-4 text-gray-500" />
      </MuiCard>
    </Link>
  );
}
