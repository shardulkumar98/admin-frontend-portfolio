import routes from "constant/routes";
import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom";
import PrivateRoute from "./private-route";
import PublicRoute from "./public-route";
// import Layout from "components/Layouts";

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        {routes?.map((route, index) => {
          const { component: Component, path, restricted, layout } = route;
          return (
            <Route
              key={index}
              path={path}
              element={
                restricted && layout ? (
                  <PrivateRoute component={Component} />
                ) : restricted ? (
                  <div>
                    <PrivateRoute component={Component} />
                  </div>
                ) : (
                  <PublicRoute restricted={false} component={Component} />
                )
              }
            />
          );
        })}
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
