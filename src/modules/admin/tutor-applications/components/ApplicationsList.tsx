"use client";
import Text from "@/components/ui/Text";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import Skeleton from "@mui/material/Skeleton";
import Card from "@mui/material/Card";
type Application = {
  id: string;
  name: string;
  email: string;
  phone: string;
  teachingMode: string;
  appliedAt: Date;
};

export default function ApplicationsList() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function getApplications() {
      const res = await fetch("/api/admin/tutor-applications");
      const data = await res.json();
      if (data.success) setApplications(data.data.reverse());
      setIsLoading(false);
    }
    getApplications();
  }, []);

  return (
    <section className="flex flex-col gap-4 px-4 py-2 md:px-[4%] pb-[10%]">
      <Text className="text-xl md:text-3xl">
        Applications ({applications.length})
      </Text>
      {!isLoading ? (
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 px-2">
          {applications.map((application) => {
            return (
              <Card
                key={application.id}
                className="flex flex-col gap-3 p-4 border border-gray-200 relative"
              >
                <Detail property="Name" value={application.name} />
                <Detail property="Email" value={application.email} />
                <Detail property="Phone" value={application.phone} />
                <Detail
                  property="Teaching Mode"
                  value={application.teachingMode}
                />
                <Detail
                  property="Applied At"
                  value={dayjs(application.appliedAt).format(
                    "DD MMM YY hh:mm A",
                  )}
                />
              </Card>
            );
          })}
        </ul>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 px-2">
          {[...Array(6).keys()].map((i) => (
            <li key={i}>
              <SkeletonCard />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

function Detail({ property, value }: { property: string; value: string }) {
  return (
    <p className="font-medium">
      {property}: {value}
    </p>
  );
}

function SkeletonCard() {
  return (
    <Skeleton
      animation="wave"
      variant="rectangular"
      height={200}
      className="rounded-lg"
      sx={{
        bgcolor: "#DCDFE0",
      }}
    />
  );
}
