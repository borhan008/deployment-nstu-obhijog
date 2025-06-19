import React from "react";
import { useAuth } from "./AuthProvider";
import { Navigate } from "react-router-dom";
import { toast } from "sonner";

export default function PrivateRouter({ children }) {
  const { profileComplete } = useAuth();
  console.log(profileComplete);

  return profileComplete ? children : <Navigate to="/profile" />;
}
