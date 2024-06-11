import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

const PageNotFoundComponent = () => {
  const navigate = useNavigate({ from: "/" });

  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate({ to: "/" });
    }, 3000);
    return () => clearTimeout(timerId);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="mt-20 p-6 text-6xl text-stone-200">Oops!</h1>
      <h2 className="m-4 p-6 text-6xl text-stone-200">This page doesn't exist.</h2>
      <h3 className="text-4xl text-stone-200">Redirecting you back to the homepage...</h3>
      <p className="text-xl text-stone-200">
        Not redirecting?
        <Link to="/">
          <Button className="animate-pulse pl-1 text-xl italic text-stone-200" variant={"link"}>
            Click here
          </Button>
        </Link>
      </p>
    </div>
  );
};

export default PageNotFoundComponent;
