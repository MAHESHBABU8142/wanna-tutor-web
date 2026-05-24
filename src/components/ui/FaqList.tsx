"use client";
import { IoIosAdd } from "react-icons/io";
import Collapse from "@mui/material/Collapse";
import { useState } from "react";

export default function FaqList({
  list,
}: {
  list: { q: string; a: string }[];
}) {
  return (
    <ul className="flex flex-col gap-3 md:flex-none md:grid md:grid-cols-2 md:gap-8">
      {list.map((item, index) => (
        <FaqListItem key={index} {...item} />
      ))}
    </ul>
  );
}

function FaqListItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="flex  cursor-pointer flex-col  gap-2 rounded-lg hover:bg-blue-50 p-1 border-b border-gray-200 transition duration-200 ease-in">
      <button
        onClick={() => setOpen(!open)}
        className="flex  justify-between text-start gap-2 md:text-xl font-medium"
      >
        {q}
        <IoIosAdd
          size={25}
          className={`font-semibold transition duration-200 ease-in ${open ? "rotate-45" : ""}`}
        />
      </button>
      <Collapse
        in={open}
        onClick={() => setOpen(!open)}
        style={{ paddingLeft: "7px" }}
        className="text-gray-800 md:text-xl"
      >
        {a}
      </Collapse>
    </li>
  );
}
