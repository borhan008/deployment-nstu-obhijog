import { useEffect, useState } from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Menu,
  Home,
  Folder,
  Users,
  Tags,
  Briefcase,
  LogOut,
  Bell,
  UserCog,
  Folders,
  BuildingIcon,
} from "lucide-react";
import clsx from "clsx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuth } from "../User/Context/AuthProvider";

export default function AdminLayout({ children }) {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const routeTitle = {
    "/admin": "Home",
    "/admin/complaint": "Complaints",
    "/admin/users": "Users",
    "/admin/category": "Category",
    "/admin/employee": "Employee",
    "/admin/department": "Department",
    "/admin/professions": "Profession",
    "/admin/buildings": "Buildings",
  };

  const active = routeTitle[location.pathname] || "Dashboard";

  useEffect(() => {
    if (user?.role !== "ADMIN") {
      toast.error("Unauthorized.");
      navigate("/");
    }
  }, [user]);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Mobile Header */}
      <header className="md:hidden h-16 px-4 flex items-center justify-between bg-white/80 backdrop-blur-lg shadow-sm border-b w-full fixed top-0 z-50">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6 text-gray-700" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-64 bg-white/80 backdrop-blur-xl border-none shadow-xl"
          >
            <div className="pt-8 px-4">
              <img
                src="/images/logo-colour.png"
                alt="logo"
                className="mx-auto"
              />
              <h2 className="text-lg font-semibold mb-6 mt-2 text-center text-gray-800">
                My Dashboard
              </h2>
              <Sidebar active={active} />
            </div>
          </SheetContent>
        </Sheet>

        <span className="text-sm font-medium text-gray-600">Dashboard</span>
      </header>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:w-64 flex-col p-6 bg-white/80 backdrop-blur-lg shadow-lg border-r border-gray-200">
        <img src="/images/logo-colour.png" alt="logo" className="mb-4" />
        <Sidebar active={active} />
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col mt-16 md:mt-0">
        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between px-8 py-4 border-b shadow-sm bg-white/80 backdrop-blur-lg z-40">
          <h1 className="text-2xl font-bold text-gray-800">{active}</h1>
        </div>

        <main className="flex-1 p-6 md:p-8">
          <div className="text-gray-600">{children}</div>
        </main>
      </div>
    </div>
  );
}

function Sidebar({ active }) {
  const links = [
    { label: "Home", href: "/admin", icon: <Home className="w-5 h-5" /> },
    {
      label: "Complaints",
      href: "/admin/complaint",
      icon: <Folder className="w-5 h-5" />,
    },
    {
      label: "Department",
      href: "/admin/department",
      icon: <Folders className="w-5 h-5" />,
    },
    {
      label: "Profession",
      href: "/admin/professions",
      icon: <UserCog className="w-5 h-5" />,
    },
    {
      label: "Users",
      href: "/admin/users",
      icon: <Users className="w-5 h-5" />,
    },
    {
      label: "Category",
      href: "/admin/category",
      icon: <Tags className="w-5 h-5" />,
    },
    {
      label: "Employee",
      href: "/admin/employee",
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      label: "Buildings",
      href: "/admin/buildings",
      icon: <BuildingIcon className="w-5 h-5" />,
    },

    { label: "Logout", href: "/logout", icon: <LogOut className="w-5 h-5" /> },
  ];

  return (
    <nav className="flex flex-col gap-3">
      {links.map((link) => (
        <Link
          key={link.label}
          to={link.href}
          className={clsx(
            "flex items-center gap-3 px-4 py-2 rounded-lg transition-all font-medium text-sm",
            link.label === active
              ? "bg-black text-white"
              : "text-gray-700 hover:bg-gray-100"
          )}
        >
          {link.icon}
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
