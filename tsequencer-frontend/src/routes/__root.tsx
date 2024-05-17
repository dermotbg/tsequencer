import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import NavBarContainer from '../components/NavBarContainer/index'

export const Route = createRootRoute({
  component: () => (
    <>
      <NavBarContainer />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})