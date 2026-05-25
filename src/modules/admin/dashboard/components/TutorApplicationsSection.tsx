"use client";
import { useState } from "react";
import { useEffect } from "react";

export default function TutorApplicationsSection() {
  const [tutorApplications, setTutorApplications] = useState([]);

  useEffect(() => {
    async function getTutorApplications() {
      const res = await fetch("/api/admin/tutor-applications");
      const data = await res.json();
      if (data.success) setTutorApplications(data.data);
    }
    getTutorApplications();
  }, []);

  return (
    <section>
      <h1>Tutor Applications</h1>
      {tutorApplications.map((application) => (
        <p key={application}>{application}</p>
      ))}
    </section>
  );
}
