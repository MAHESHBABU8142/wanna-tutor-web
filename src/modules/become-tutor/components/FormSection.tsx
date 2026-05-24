"use client";
import Button from "@/components/ui/Button";
import Input, { Select } from "@/components/ui/Input";
import { IoCheckmarkCircle } from "react-icons/io5";
import Text from "@/components/ui/Text";
import { NavButton } from "@/components/ui/Button";
import { useState } from "react";

export default function FormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    teachingMode: "online",
  });
  const [loading, setLoading] = useState(false);
  const [isSucessShown, setIsSuccessShown] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    console.log(formData);
    const response = await fetch("/api/become-tutor", {
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
        teachingMode: "online",
      });
    }
    setLoading(false);
  }

  return (
    <>
      {isSucessShown && <FormSuccess />}
      <section className="px-8 flex flex-col gap-4 md:gap-8 md:px-[8%]">
        <Text>Please fill out the form below</Text>
        <Text
          variant="secondary"
          className="text-gray-600 text-base md:text-base"
        >
          After submitting, our team will contact you personally to verify
          details and complete your profile.
        </Text>
        <form
          id="become-tutor-form"
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-8"
        >
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
            label="Teaching Mode"
            required
            value={formData.teachingMode}
            onChange={(e) =>
              setFormData({ ...formData, teachingMode: e.target.value })
            }
            optionsList={[
              { value: "online", label: "Online" },
              { value: "offline", label: "Offline" },
              { value: "both", label: "Both" },
            ]}
          />
          <div className="flex flex-col gap-2">
            <Button
              loading={loading}
              type="submit"
              className="text-base p-3 mt-1 rounded-md"
            >
              Submit
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

function FormSuccess() {
  return (
    <section className="fixed top-0 left-0 w-full h-full md:pt-[10%] bg-white py-12 px-8 flex flex-col items-center gap-8 pt-[25%] ">
      <IoCheckmarkCircle className="text-green-600 text-8xl" />
      <Text className="text-3xl text-center">
        Details submitted successfully!
      </Text>
      <Text variant="secondary" className="text-center text-lg text-gray-600">
        We received your details and will contact you within 24 hours.
      </Text>
      <NavButton
        href="/"
        className="absolute bottom-20 right-8 left-8 text-base p-3 mt-1 rounded-md md:static"
      >
        Back to Home
      </NavButton>
    </section>
  );
}
