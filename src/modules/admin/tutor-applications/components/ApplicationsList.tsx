"use client";
import Text from "@/components/ui/Text";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { SkeletonList } from "@/modules/admin/components/Skeleton";
import ApplicationCard, {
  Detail,
} from "@/modules/admin/components/ApplicationCard";
type Application = {
  id: string;
  name: string;
  email: string;
  phone: string;
  teachingMode: string;
  createdAt: Date;
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
        Tutor Applications ({applications.length})
      </Text>
      {!isLoading ? (
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 px-2">
          {applications.map((application) => {
            return (
              <ApplicationCard key={application.id}>
                <Detail property="Name" value={application.name} />
                <Detail property="Email" value={application.email} />
                <Detail property="Phone" value={application.phone} />
                <Detail
                  property="Teaching Mode"
                  value={application.teachingMode}
                />
                <Detail
                  property="Applied At"
                  value={dayjs(application.createdAt).format(
                    "DD MMM YYYY, h:mm A",
                  )}
                />
              </ApplicationCard>
            );
          })}
        </ul>
      ) : (
        <SkeletonList />
      )}
    </section>
  );
}
