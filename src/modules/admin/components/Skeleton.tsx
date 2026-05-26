import Skeleton from "@mui/material/Skeleton";

function SkeletonCard() {
  return (
    <Skeleton
      animation="wave"
      variant="rectangular"
      height={200}
      className="rounded-lg"
      sx={{
        bgcolor: "#DCDFE0",
      }}
    />
  );
}

function SkeletonList() {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 px-2">
      {[...Array(6).keys()].map((i) => (
        <li key={i}>
          <SkeletonCard />
        </li>
      ))}
    </ul>
  );
}

export { SkeletonCard, SkeletonList };
