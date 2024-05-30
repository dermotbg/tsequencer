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
      <h1 className="text-stone-200 text-6xl p-6 mt-20 ">Oops!</h1>
      <h2 className="text-stone-200 text-6xl p-6 m-4 ">This page doesn't exist.</h2>
      <h3 className="text-stone-200 text-4xl">Redirecting you back to the homepage...</h3>
      <p className="text-stone-200 text-xl">
        Not redirecting?
        <Link to="/">
          <Button className="text-stone-200 italic text-xl pl-1 animate-pulse" variant={"link"}>
            Click here
          </Button>
        </Link>
      </p>
    </div>
  );
};

export default PageNotFoundComponent;
