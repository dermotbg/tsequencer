const DisplayErrorMessage = ({ errorMessage }: { errorMessage: string | undefined }) => {
  return <p className="font light text-right italic text-red-700">{errorMessage}</p>;
};

export default DisplayErrorMessage;
