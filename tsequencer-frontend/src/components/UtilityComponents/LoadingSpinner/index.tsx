import { LoaderCircle } from "lucide-react";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center">
      <LoaderCircle size={120} className="animate-spin m-20" />;
    </div>
  );
};

export default LoadingSpinner;
