import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import PageNotFound from "../pages/PageNotFound";
import HomePage from "../pages/HomePage";
import Decisions from "../pages/Decisions";
import Members from "../pages/Members";
import NewsPage from "../pages/NewsPage";
import Services from "../pages/Services";
import Events from "../pages/Events";
import Complaints from "../pages/Complaints";
import ProtectedRoute from "../pages/ProtectedRoute";
import Login from "../pages/Login";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<ProtectedRoute redirectPath="/login">
                <Layout />
            </ProtectedRoute>} errorElement={<PageNotFound />} >
                <Route index element={<HomePage />} />
                <Route path="news" element={<NewsPage  />} />
                <Route path="decisions" element={<Decisions />} />
                <Route path="events" element={<Events  />} />
                <Route path="services" element={<Services />} />
                <Route path="about" element={<Members />} />
                <Route path="complaints" element={<Complaints />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
        </>
    )
);

export default router