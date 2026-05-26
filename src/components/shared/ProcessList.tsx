import Text from "@/components/ui/Text";
import Card from "@mui/material/Card";

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
    <Card className="flex flex-col bg-white gap-4 items-start p-6 border border-gray-200">
      {Icon}
      <Text className="md:text-3xl text-2xl">{title}</Text>
      <Text variant="secondary" className="text-base">
        {description}
      </Text>
    </Card>
  );
}
