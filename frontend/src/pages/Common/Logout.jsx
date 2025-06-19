import React, { useEffect } from "react";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import { toast } from "sonner";

export const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const signOutAndRedirect = async () => {
      await auth.signOut();
      toast.success("Logout Successfully.");
      navigate("/");
    };

    signOutAndRedirect();
  }, [navigate]);
  return <Loading />;
};
