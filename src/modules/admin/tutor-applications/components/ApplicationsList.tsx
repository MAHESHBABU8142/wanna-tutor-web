"use client";
import Text from "@/components/ui/Text";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import CircularProgress from "@mui/material/CircularProgress";
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
    <section className="flex flex-col gap-4 px-4 py-2 md:px-[4%]">
      <Text className="text-xl md:text-3xl">
        Applications ({applications.length})
      </Text>
      {!isLoading ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2">
          {applications.map((application) => {
            return (
              <li
                key={application.id}
                className="flex flex-col gap-3 bg-blue-50 rounded-lg p-4 border border-gray-200 relative"
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
              </li>
            );
          })}
        </ul>
      ) : (
        <CircularProgress size={40} className="self-center mt-30" />
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
