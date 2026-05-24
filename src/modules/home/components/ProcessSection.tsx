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
import ProcessList from "@/components/shared/ProcessList";

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

        {selectedRole === "tutor" ? (
          <ProcessList steps={TUTOR_STEPS} />
        ) : (
          <ProcessList steps={PARENT_STEPS} />
        )}
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

const TUTOR_STEPS = [
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

const PARENT_STEPS = [
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
