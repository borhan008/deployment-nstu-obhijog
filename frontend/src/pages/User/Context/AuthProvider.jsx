import { getAuth, signOut } from "firebase/auth";
import { useContext, createContext, useEffect, useState } from "react";
import { auth } from "../../../../firebase";
import Loading from "../../Common/Loading";
import Home from "../../Home/Home";
import { Navigate } from "react-router-dom";
import { toast, Toaster } from "sonner";
import axios from "axios";

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profileComplete, setProfileComplete] = useState(true);
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setLoading(true);
      setUser(user);
      try {
        const token = await auth?.currentUser?.getIdToken();
        const response = await axios.get(`${backendURL}/user`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setProfileComplete(true);
        setUser({ ...user, role: response.data.user.role });
        if (response?.data?.user?.block) {
          await signOut(auth);
        }
      } catch (error) {
        console.log(error);
        if (error?.response?.data?.logout) {
          toast.error("You're blocked");
          signOut(auth);
        }
        setProfileComplete(false);
      } finally {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, loading, setLoading, profileComplete }}
    >
      <Toaster richColors position="top-center" />
      {loading ? <Loading /> : user ? children : <Home />}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
