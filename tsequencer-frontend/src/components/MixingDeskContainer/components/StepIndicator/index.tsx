const StepIndicator = ({ stepNumber }: { stepNumber: number }) => {
  return (
    <div className="flex flex-row justify-center mb-4">
      <p className="bg-stone-900 text-stone-200 border-4 rounded-lg border-white border-relavtive text-2xl font-semibold px-5 py-4">
        {`Step: ${stepNumber}`}
      </p>
    </div>
  );
};

export default StepIndicator;
