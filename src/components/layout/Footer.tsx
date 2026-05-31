import { BrandName } from "./Header";
import Logo from "@public/icons/wanna-tutor.png";
import Link from "next/link";
import Image from "next/image";
import { SlSocialInstagram } from "react-icons/sl";
import { MdOutlineWhatsapp } from "react-icons/md";
import { GrYoutube } from "react-icons/gr";
export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white flex flex-col p-6 gap-6 mt-10 md:flex-row md:grid md:gap-8 md:grid-cols-4 md:items-stretch md:py-12">
      <div className="flex gap-2 flex-col">
        <Image src={Logo} alt="Wanna Tutor Logo" width={50} height={50} />
        <BrandName className="text-white" />
        <p className="md:text-lg ">
          WannaTutor is a platform that connects tutors and parents to help
          students find the best tutors for their needs. Our mission is to make
          education accessible and affordable for everyone.
        </p>
        <div className="flex gap-4 py-2">
          <Link
            href="https://wa.me/918074870325?text=Hello%20WannaTutor,%20I%20want%20to%20know%20more%20about%20you"
            className="flex items-center gap-1 hover:underline"
          >
            <MdOutlineWhatsapp size={30} />
          </Link>
          <Link
            href="https://www.instagram.com/wannatutor/"
            className="flex items-center gap-1 hover:underline"
          >
            <SlSocialInstagram size={25} />
          </Link>
          <Link
            href="https://www.youtube.com/@wannatutor"
            className="flex items-center gap-1 hover:underline"
          >
            <GrYoutube size={30} />
          </Link>
        </div>
      </div>
      <LinkSection
        label="Quick Links"
        links={[
          { name: "Home", href: "/" },
          { name: "Find a Tutor", href: "/find-tutor" },
          { name: "Become a Tutor", href: "/become-tutor" },
          { name: "About Us", href: "/about" },
        ]}
      />
      <LinkSection
        label="Support"
        links={[
          {
            name: "Contact Us",
            href: "tel:+91 8074870325",
          },
          {
            name: "Privacy Policy",
            href: "/privacy-policy",
          },
          {
            name: "Terms & Conditions",
            href: "/terms-and-conditions",
          },
        ]}
      />
      <LinkSection
        label="Contact Us"
        links={[
          {
            name: "Email: info@wannatutor.in",
            href: "mailto:info@wannatutor.in",
          },
          { name: "Phone: +91 8074870325", href: "tel:+91 8074870325" },
          {
            name: "WhatsApp: +91 8074870325",
            href: "https://wa.me/918074870325?text=Hello%20WannaTutor,%20I%20want%20to%20know%20more%20about%20you",
          },
          {
            name: "Address: Hyderabad, Telangana, India",
            href: "#",
          },
        ]}
      />
      <p className="text-center border-t border-gray-200/20 pt-4 text-sm">
        &copy; {new Date().getFullYear()} WannaTutor. All rights reserved.
      </p>
    </footer>
  );
}

function LinkSection({
  label,
  links,
}: {
  label: string;
  links: { name: string; href: string }[];
}) {
  return (
    <section className="flex flex-col gap-2">
      <h3 className="font-semibold text-lg md:text-xl">{label}</h3>
      <div className="flex flex-col gap-1">
        {links?.map((link) => (
          <Link key={link.name} href={link.href} className="hover:underline">
            {link.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
