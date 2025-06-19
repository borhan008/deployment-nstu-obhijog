import { useEffect, useState } from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Menu,
  Home,
  Settings,
  LogOut,
  Folder,
  Bell,
  BellIcon,
  BookAIcon,
} from "lucide-react";
import clsx from "clsx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";
import axios from "axios";

export default function UserLayout({ children }) {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);

  const backendURL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    checkCountNotification();
  }, []);

  const location = useLocation();
  const routeTitle = {
    "/home": "নির্দেশিকা",
    "/complaint": "অভিযোগ",
    "/profile": "প্রোফাইল",
    "/notifications": "নোটিফিকেশনস",
    "/logout": "লগ আউট",
  };
  const active = routeTitle[location.pathname] || "Dashboard";

  const checkCountNotification = async (req, res) => {
    try {
      const token = await auth?.currentUser?.getIdToken();
      const ntfc = await axios.get(`${backendURL}/notifications/count`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("ntfc.data");
      setCount(ntfc.data.count);
    } catch (error) {
      console.log(error);
    }
  };

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
              <img src="/images/logo-colour.png" alt="image" />
              <h2 className="text-lg font-semibold mb-6 mt-2 text-center text-gray-800">
                My Dashboard
              </h2>
              <Sidebar active={active} />
            </div>
          </SheetContent>
        </Sheet>

        <span className="text-sm font-medium text-gray-600">Dashboard</span>

        <Button variant="ghost" size="icon" className="relative" asChild>
          <Link to="/notifications">
            {count ? (
              <>
                <Bell className="w-6 h-6 text-gray-700" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-ping" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />{" "}
              </>
            ) : (
              <Bell className="w-6 h-6 text-gray-700" />
            )}
          </Link>
        </Button>
      </header>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:w-64 flex-col p-6 bg-white/80 backdrop-blur-lg shadow-lg border-r border-gray-200">
        <img src="/images/logo-colour.png" alt="image" className="mb-4" />

        <Sidebar active={active} />
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col mt-16 md:mt-0">
        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between px-8 py-4 border-b shadow-sm bg-white/80 backdrop-blur-lg z-40">
          <h1 className="text-2xl font-bold text-gray-800">{active}</h1>
          <Button variant="ghost" size="icon" className="relative" asChild>
            <Link to="/notifications">
              {count ? (
                <>
                  <Bell className="w-6 h-6 text-gray-700" />
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-ping" />
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />{" "}
                </>
              ) : (
                <Bell className="w-6 h-6 text-gray-700" />
              )}
            </Link>
          </Button>
        </div>

        <main className="flex-1 p-6 md:p-8">
          <div className="text-gray-600">{children}</div>
        </main>
      </div>
    </div>
  );
}

function Sidebar({ active }) {
  const navigate = useNavigate();
  const links = [
    { label: "নির্দেশিকা", href: "/home", icon: <Home className="w-5 h-5" /> },
    {
      label: "অভিযোগ",
      href: "/complaint",
      icon: <Folder className="w-5 h-5" />,
    },
    {
      label: "প্রোফাইল",
      href: "/profile",
      icon: <Settings className="w-5 h-5" />,
    },
    {
      label: "নোটিফিকেশনস",
      href: "/notifications",
      icon: <BellIcon className="w-5 h-5" />,
    },

    { label: "লগ আউট", href: "/logout", icon: <LogOut className="w-5 h-5" /> },
  ];

  return (
    <nav className="flex flex-col gap-3">
      {links.map((link) => (
        <Link
          key={link.label}
          className={clsx(
            "flex items-center gap-3 px-4 py-2 rounded-lg transition-all font-medium text-sm",
            link.label === active
              ? "bg-black text-white"
              : "text-gray-700 hover:bg-gray-100"
          )}
          to={link.href}
        >
          {link.icon}
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
