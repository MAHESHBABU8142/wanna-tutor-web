import Text from "@/components/ui/Text";

export default function ProcessList({ steps }: { steps: StepProps[] }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 md:pt-4">
      {steps.map((step) => (
        <Step key={step.title} {...step} />
      ))}
    </ul>
  );
}

type StepProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

function Step({ title, description, icon: Icon }: StepProps) {
  return (
    <li className="flex flex-col bg-blue-50 gap-4 items-start border border-gray-300 rounded-lg p-6">
      {Icon}
      <Text className="md:text-3xl text-2xl">{title}</Text>
      <Text variant="secondary" className="text-base">
        {description}
      </Text>
    </li>
  );
}
