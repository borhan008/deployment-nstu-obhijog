import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@/components/ui/button";
import {
  BrowserRouter as Router,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import DocumentTable from "./pages/User/DocumentTable";
import Forms from "./pages/User/Forms";
import UserLayout from "./pages/User/UserLayout";
import { Toaster } from "@/components/ui/sonner";
import PrivateRouter from "./pages/User/Context/PrivateRouter";
import Profile from "./pages/User/Profile/Profile";
import Department from "./pages/Admin/Department/Deaprtment";
import AdminLayout from "./pages/Admin/AdminLayout";
import MakeComplain from "./pages/User/Complaints/MakeComplaint";
import ViewComplaints from "./pages/User/Complaints/ViewComplaints";
import EditComplaint from "./pages/User/Complaints/EditComplaint";
import AdminHome from "./pages/Admin/Home/AdminHome";
import ComplainCaegories from "./pages/Admin/Complaint/ComplaintCategories";
import EmployeeCategories from "./pages/Admin/Employee/EmployeeCategory";
import Employee from "./pages/Admin/Employee/Employee";
import { AdminComplaints } from "./pages/Admin/Complaint/AdminComplaints";
import { Resolve } from "./pages/Admin/Complaint/Resolve";
import { ViewResolveUser } from "./pages/User/Complaints/ViewResolveUser";
import { Users } from "./pages/Admin/Complaint/Users";
import Notification from "./pages/User/Notification/Notification";
import UserHome from "./pages/User/Home/UserHome";
import NotFound from "./pages/Common/NotFound";
import { Logout } from "./pages/Common/Logout";
import Professions from "./pages/Admin/Profession/Profession";
import BanglaGuideline from "./pages/User/BanglaGuideline/BanglaGuideline";
import Buildings from "./pages/Admin/Buildings/Buildings";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />}></Route>
      <Route
        path="/forms"
        element={
          <UserLayout>
            <Forms />
          </UserLayout>
        }
      ></Route>
      <Route
        path="/complaint"
        element={
          <PrivateRouter>
            <UserLayout>
              <ViewComplaints />
            </UserLayout>
          </PrivateRouter>
        }
      ></Route>
      <Route
        path="/Home"
        element={
          <PrivateRouter>
            <UserLayout>
              <BanglaGuideline />
            </UserLayout>
          </PrivateRouter>
        }
      ></Route>

      <Route
        path="/complaint/edit/:complaint_id"
        element={
          <PrivateRouter>
            <UserLayout>
              <EditComplaint />
            </UserLayout>
          </PrivateRouter>
        }
      ></Route>

      <Route
        path="/resolve/:complaint_id"
        element={
          <PrivateRouter>
            <UserLayout>
              <ViewResolveUser />
            </UserLayout>
          </PrivateRouter>
        }
      ></Route>

      <Route
        path="/complaint/new"
        element={
          <PrivateRouter>
            <UserLayout>
              <MakeComplain />
            </UserLayout>
          </PrivateRouter>
        }
      ></Route>
      <Route
        path="/notifications"
        element={
          <PrivateRouter>
            <UserLayout>
              <Notification />
            </UserLayout>
          </PrivateRouter>
        }
      ></Route>
      <Route
        path="/bangla-guideline"
        element={
          <PrivateRouter>
            <UserLayout>
              <BanglaGuideline />
            </UserLayout>
          </PrivateRouter>
        }
      ></Route>
      <Route
        path="/profile"
        element={
          <UserLayout>
            <Profile />
          </UserLayout>
        }
      ></Route>

      <Route
        path="/admin/department"
        element={
          <AdminLayout>
            <Department />
          </AdminLayout>
        }
      ></Route>

      <Route
        path="/admin/"
        element={
          <AdminLayout>
            <AdminHome />
          </AdminLayout>
        }
      ></Route>

      <Route
        path="/admin/category/"
        element={
          <PrivateRouter>
            <AdminLayout>
              <ComplainCaegories />
            </AdminLayout>
          </PrivateRouter>
        }
      ></Route>
      <Route
        path="/admin/employees/category/"
        element={
          <PrivateRouter>
            <AdminLayout>
              <EmployeeCategories />
            </AdminLayout>
          </PrivateRouter>
        }
      ></Route>
      <Route
        path="/admin/employee/"
        element={
          <PrivateRouter>
            <AdminLayout>
              <Employee />
            </AdminLayout>
          </PrivateRouter>
        }
      ></Route>
      <Route
        path="/admin/complaint/"
        element={
          <PrivateRouter>
            <AdminLayout>
              <AdminComplaints />
            </AdminLayout>
          </PrivateRouter>
        }
      ></Route>
      <Route
        path="/admin/complaint/:complaint_id"
        element={
          <PrivateRouter>
            <AdminLayout>
              <Resolve />
            </AdminLayout>
          </PrivateRouter>
        }
      ></Route>

      <Route
        path="admin/resolve/:complaint_id"
        element={
          <PrivateRouter>
            <AdminLayout>
              <ViewResolveUser />
            </AdminLayout>
          </PrivateRouter>
        }
      ></Route>
      <Route
        path="/admin/users"
        element={
          <PrivateRouter>
            <AdminLayout>
              <Users />
            </AdminLayout>
          </PrivateRouter>
        }
      ></Route>
      <Route
        path="/admin/professions"
        element={
          <PrivateRouter>
            <AdminLayout>
              <Professions />
            </AdminLayout>
          </PrivateRouter>
        }
      ></Route>
      <Route
        path="/admin/buildings"
        element={
          <PrivateRouter>
            <AdminLayout>
              <Buildings />
            </AdminLayout>
          </PrivateRouter>
        }
      ></Route>
      <Route
        path="/logout"
        element={
          <PrivateRouter>
            <Logout />
          </PrivateRouter>
        }
      ></Route>
      <Route path="*" element={<NotFound />}></Route>
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
