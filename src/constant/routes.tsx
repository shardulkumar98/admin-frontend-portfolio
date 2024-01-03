import Dashboard from "pages/dashboard";
import Login from "views/login";

interface IRoute {
  path: string;
  restricted: boolean;
  component: () => any;
  exact: boolean;
  // layout?: boolean;
}

export const LoginRoute = {
  component: Login,
  path: "/",
  exact: true,
  restricted: false,
  // layout: false,
};

export const DashboardRoute = {
  component: Dashboard,
  path: "/dashboard",
  exact: true,
  restricted: true,
  // layout: false,
};

const ROUTES: IRoute[] = [LoginRoute, DashboardRoute];

export default ROUTES;
