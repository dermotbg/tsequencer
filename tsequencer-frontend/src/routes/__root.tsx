import { Outlet, createRootRoute } from "@tanstack/react-router";

import NavBarContainer from "../components/NavBarContainer/index";
import PageNotFoundComponent from "@/components/UtilityComponents/PageNotFoundComponent";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

export const Route = createRootRoute({
  component: () => (
    <div className="flex min-h-dvh flex-col">
      <NavBarContainer />
      <Outlet />
      <Footer />
      <Toaster />
    </div>
  ),
  notFoundComponent: () => {
    return <PageNotFoundComponent />;
  },
});
