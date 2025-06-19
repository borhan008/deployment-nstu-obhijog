import { useState } from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Home, Settings, LogOut, Folder, Bell } from "lucide-react";
import clsx from "clsx";

export default function User() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

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
              <h2 className="text-lg font-semibold mb-6 text-gray-800">My Dashboard</h2>
              <Sidebar active={active} setActive={setActive} />
            </div>
          </SheetContent>
        </Sheet>

        <span className="text-sm font-medium text-gray-600">Dashboard</span>

        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-6 h-6 text-gray-700" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-ping" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
        </Button>
      </header>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:w-64 flex-col p-6 bg-white/80 backdrop-blur-lg shadow-lg border-r border-gray-200">
        <h2 className="text-xl font-bold mb-6 text-gray-800">My Dashboard</h2>
        <Sidebar active={active} setActive={setActive} />
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col mt-16 md:mt-0">
        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between px-8 py-4 border-b shadow-sm bg-white/80 backdrop-blur-lg z-40">
          <h1 className="text-2xl font-bold text-gray-800">{active}</h1>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-6 h-6 text-gray-700" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-ping" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
          </Button>
        </div>

        <main className="flex-1 p-6 md:p-8">
          <div className="text-gray-600">
            This is the <strong>{active}</strong> page content.
          </div>
        </main>
      </div>
    </div>
  );
}

function Sidebar({ active, setActive }) {
  const links = [
    { label: "Home", icon: <Home className="w-5 h-5" /> },
    { label: "Projects", icon: <Folder className="w-5 h-5" /> },
    { label: "Settings", icon: <Settings className="w-5 h-5" /> },
    { label: "Logout", icon: <LogOut className="w-5 h-5" /> },
  ];

  return (
    <nav className="flex flex-col gap-3">
      {links.map((link) => (
        <button
          key={link.label}
          onClick={() => setActive(link.label)}
          className={clsx(
            "flex items-center gap-3 px-4 py-2 rounded-lg transition-all font-medium text-sm",
            active === link.label
              ? "bg-gray-900 text-white shadow"
              : "text-gray-700 hover:bg-gray-100"
          )}
        >
          {link.icon}
          {link.label}
        </button>
      ))}
    </nav>
  );
}
