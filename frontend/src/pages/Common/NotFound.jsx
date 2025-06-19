import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-xl w-full text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <img
            src="/images/nstu_logo.gif"
            alt="NSTU Logo"
            className="max-w-[80px]"
          />
          <img
            src="/images/logo-colour.png"
            alt="NSTU logo"
            className="max-w-[250px]"
          />
        </div>
        <h1 className="text-8xl font-extrabold text-gray-900 mb-2">404</h1>
        <p className="text-xl text-muted-foreground mb-6">Page Not Found</p>
        <Button asChild className="text-lg px-6 py-4">
          <Link to="/">Go to Home</Link>
        </Button>
      </div>
    </div>
  );
}
