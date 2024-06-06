import { LoaderCircle } from "lucide-react";

const LoadingSpinner = ({ size = 120, margin = 20 }) => {
  return (
    <div className={`flex flex-${margin === 20 ? "col" : "row"} items-center`}>
      <LoaderCircle size={size} className={`animate-spin m-${margin}`} />
    </div>
  );
};

export default LoadingSpinner;
