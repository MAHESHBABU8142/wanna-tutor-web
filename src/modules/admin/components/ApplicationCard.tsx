import Card from "@mui/material/Card";

export default function ApplicationCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Card className="flex flex-col gap-3 p-4 border border-gray-200">
      {children}
    </Card>
  );
}

function Detail({ property, value }: { property: string; value: string }) {
  return (
    <p className="font-medium">
      {property}: {value}
    </p>
  );
}

export { Detail };
