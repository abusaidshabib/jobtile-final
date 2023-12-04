import { createBrowserRouter } from "react-router-dom";
import MainWebRoute from "../AllRoutes/MainWebRoute";
import DashboardRoute from "../AllRoutes/DashboardRoute";

const allRouter = [
    ...MainWebRoute,
    // ...DashboardRoute
];

const router = createBrowserRouter(allRouter);
export default router;