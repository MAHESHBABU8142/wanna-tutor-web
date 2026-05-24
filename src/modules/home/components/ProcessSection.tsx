"use client";

import Text from "@/components/ui/Text";
import cn from "@/lib/class-merge";
import { ComponentPropsWithoutRef, useState } from "react";
import { FaRegRegistered } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { MdOutlineManageSearch } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { FaPersonCircleCheck } from "react-icons/fa6";
export default function ProcessSection() {
  const [selectedRole, setSelectedRole] = useState<"tutor" | "parent">("tutor");
  return (
    <section className="flex flex-col items-center gap-4 md:gap-6">
      <Text>How It Works</Text>
      <Text variant="secondary">Get started in 3 simple steps</Text>
      <section className="flex flex-col gap-4 px-6">
        <div className="flex items-center self-center border border-blue-500 rounded-xl text-blue-600">
          <FilterButton
            isSelected={selectedRole === "tutor"}
            onClick={() => setSelectedRole("tutor")}
          >
            Tutor
          </FilterButton>
          <FilterButton
            isSelected={selectedRole === "parent"}
            onClick={() => setSelectedRole("parent")}
          >
            Parent/Student
          </FilterButton>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 md:pt-4">
          {selectedRole === "tutor"
            ? TUTOR_STEPS.map((step) => <Step key={step.title} {...step} />)
            : PARENT_STEPS.map((step) => <Step key={step.title} {...step} />)}
        </ul>
      </section>
    </section>
  );
}

const FilterButton = ({
  isSelected,
  ...props
}: ComponentPropsWithoutRef<"button"> & {
  isSelected: boolean;
}) => {
  return (
    <button
      className={cn(
        "px-6 py-3 font-medium rounded-lg transition-colors duration-200 cursor-pointer",
        isSelected && "bg-blue-600 text-white",
      )}
      {...props}
    />
  );
};

type StepProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

function Step({ title, description, icon: Icon }: StepProps) {
  return (
    <li className="flex flex-col bg-blue-50 gap-4 items-start border border-gray-300 rounded-lg p-6">
      {Icon}
      <Text className="md:text-3xl">{title}</Text>
      <Text variant="secondary">{description}</Text>
    </li>
  );
}

const TUTOR_STEPS: StepProps[] = [
  {
    title: "Register",
    description: "Create your tutor profile with your details",
    icon: <FaRegRegistered className="text-5xl text-blue-500" />,
  },
  {
    title: "Get Approved",
    description: "Your profile is reviewed and published",
    icon: <RiVerifiedBadgeFill className="text-5xl text-blue-500" />,
  },
  {
    title: "Get Inquiries",
    description: "Get inquiries from students and parents",
    icon: <BsFillPeopleFill className="text-5xl text-blue-500" />,
  },
];

const PARENT_STEPS: StepProps[] = [
  {
    title: "Search",
    description: "Find tutors by subject, class, or location",
    icon: <MdOutlineManageSearch className="text-5xl text-blue-500" />,
  },
  {
    title: "Explore",
    description: "View tutor profiles, experience, and teaching details",
    icon: <MdOutlineExplore className="text-5xl text-blue-500" />,
  },
  {
    title: "Connect",
    description: "Contact the tutor and start learning",
    icon: <FaPersonCircleCheck className="text-5xl text-blue-500" />,
  },
];
