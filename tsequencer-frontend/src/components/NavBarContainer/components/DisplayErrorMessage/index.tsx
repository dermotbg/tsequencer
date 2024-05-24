const DisplayErrorMessage = ({ errorMessage }: { errorMessage: string | undefined }) => {
  return(
    <p className="text-right italic text-red-700 font light">
      {errorMessage}
    </p>
  )
}

export default DisplayErrorMessage