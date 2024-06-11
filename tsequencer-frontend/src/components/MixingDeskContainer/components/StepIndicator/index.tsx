const StepIndicator = ({ stepNumber }: { stepNumber: number }) => {
  return (
    <div className="mb-4 flex flex-row justify-center">
      <p className="border-relavtive rounded-lg border-4 border-white bg-stone-900 px-5 py-4 text-2xl font-semibold text-stone-200">
        {`Step: ${stepNumber}`}
      </p>
    </div>
  );
};

export default StepIndicator;
