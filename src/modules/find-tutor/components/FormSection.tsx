"use client";
import { useState } from "react";
import Button from "@/components/ui/Button";
import Input, { Select } from "@/components/ui/Input";
import Text from "@/components/ui/Text";
import FormSuccess from "@/components/shared/FormSuccess";

export default function FormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    grade: "1",
    preferredMode: "online",
    requesterType: "student",
  });
  const [loading, setLoading] = useState(false);
  const [isSucessShown, setIsSuccessShown] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const response = await fetch("/api/find-tutor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (response.status === 201) {
      setIsSuccessShown(true);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        grade: "1",
        preferredMode: "online",
        requesterType: "student",
      });
    }
    setLoading(false);
  }

  return (
    <>
      {isSucessShown && (
        <FormSuccess
          title="Request submitted successfully"
          description="Thanks! We received your requirement.
          Our team will contact you shortly."
        />
      )}
      <section className="px-8 flex flex-col gap-4 md:gap-8 md:px-[8%]">
        <Text>Tutor Requirement Form</Text>
        <Text
          variant="secondary"
          className="text-gray-600 text-base md:text-base"
        >
          Fill out a few details and we&apos;ll contact you to help find a
          suitable tutor.
        </Text>
        <form
          id="become-tutor-form"
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-8"
        >
          <Select
            label="Requester Type"
            required
            value={formData.requesterType}
            onChange={(e) =>
              setFormData({ ...formData, requesterType: e.target.value })
            }
            optionsList={[
              { value: "student", label: "Student" },
              { value: "parent", label: "Parent" },
            ]}
          />

          <Input
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
            required
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
          />
          <Input
            label="Phone"
            type="tel"
            placeholder="Enter your phone number"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <Select
            label="Grade"
            required
            value={formData.grade}
            onChange={(e) =>
              setFormData({ ...formData, grade: e.target.value })
            }
            optionsList={[
              { value: "1", label: "1" },
              { value: "2", label: "2" },
              { value: "3", label: "3" },
              { value: "4", label: "4" },
              { value: "5", label: "5" },
              { value: "6", label: "6" },
              { value: "7", label: "7" },
              { value: "8", label: "8" },
              { value: "9", label: "9" },
              { value: "10", label: "10" },
              { value: "11", label: "11" },
              { value: "12", label: "12" },
            ]}
          />
          <Select
            label="Preferred Mode"
            required
            value={formData.preferredMode}
            onChange={(e) =>
              setFormData({ ...formData, preferredMode: e.target.value })
            }
            optionsList={[
              { value: "online", label: "Online" },
              { value: "offline", label: "Offline" },
              { value: "any", label: "Any" },
            ]}
          />
          <div className="flex flex-col gap-2">
            <Button
              loading={loading}
              type="submit"
              className="text-base p-3 mt-1 rounded-md"
            >
              Submit Request
            </Button>
            <p className="text-sm text-gray-600 px-2">
              By submitting this form, you agree to our{" "}
              <a href="/privacy-policy" className="underline">
                privacy policy
              </a>{" "}
              and{" "}
              <a href="/terms-and-conditions" className="underline">
                terms and conditions
              </a>
              .
            </p>
          </div>
        </form>
      </section>
    </>
  );
}
