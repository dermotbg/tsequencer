import { Outlet, createRootRoute } from "@tanstack/react-router";

import NavBarContainer from "../components/NavBarContainer/index";
import PageNotFoundComponent from "@/components/UtilityComponents/PageNotFoundComponent";
import Footer from "@/components/Footer";

export const Route = createRootRoute({
  component: () => (
    <>
      <NavBarContainer />
      <Outlet />
      <Footer />
    </>
  ),
  notFoundComponent: () => {
    return <PageNotFoundComponent />;
  },
});
