import { NavButton } from "@/components/ui/Button";
import { IoIosWarning } from "react-icons/io";
import Text from "@/components/ui/Text";

export default function AccessDenied() {
  return (
    <section className="flex flex-col items-center gap-8 px-6 ">
      <div className="flex flex-col items-center gap-2">
        <IoIosWarning className="text-8xl text-red-600 md:text-9xl" />
        <Text className="text-2xl">Access Denied</Text>
      </div>
      <p className="text-center text-gray-600  md:text-lg ">
        {" "}
        You do not have the necessary permissions to access this page.{" "}
      </p>
      <NavButton
        href="/"
        className="text-base absolute bottom-25 right-8 left-8 p-3 mt-1 rounded-md md:static"
      >
        Back to Home
      </NavButton>
    </section>
  );
}
