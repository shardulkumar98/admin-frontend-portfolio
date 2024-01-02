import Login from "views/login";

interface IRoute {
  path: string;
  restricted: boolean;
  component: () => any;
  exact: boolean;
  layout?: boolean;
}

export const LoginRoute = {
  component: Login,
  path: "/",
  exact: true,
  restricted: false,
  layout: false,
};

const ROUTES: IRoute[] = [LoginRoute];

export default ROUTES;
