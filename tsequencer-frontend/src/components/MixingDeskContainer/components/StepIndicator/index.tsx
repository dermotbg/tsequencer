const stepIndicator = (stepNumber: number) => {
  // TODO: Style this a bit
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight pb-3">
      {`Step: ${stepNumber}`}
    </h3>
  );
};

export default stepIndicator;
