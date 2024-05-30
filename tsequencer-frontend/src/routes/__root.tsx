import { Outlet, createRootRoute } from "@tanstack/react-router";

import NavBarContainer from "../components/NavBarContainer/index";
import PageNotFoundComponent from "@/components/UtilityComponents/PageNotFoundComponent";

export const Route = createRootRoute({
  component: () => (
    <>
      <NavBarContainer />
      <Outlet />
    </>
  ),
  notFoundComponent: () => {
    return <PageNotFoundComponent />;
  },
});
