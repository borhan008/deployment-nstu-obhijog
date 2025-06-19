import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { X } from "lucide-react";
import { signInWithPopup } from "firebase/auth";

import styles from "./home.module.css";
import { auth, googleProvider } from "../../../firebase";
import { toast, Toaster } from "sonner";
import { useAuth } from "../User/Context/AuthProvider";
import { Link, useLocation } from "react-router-dom";

export default function Home() {
  const { user, loading } = useAuth();

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const userEmail = result.user.email;
      const emailDomain = userEmail.split("@")[1];

      if (
        emailDomain === "student.nstu.edu.bd" ||
        emailDomain === "nstu.edu.bd"
      ) {
        console.log(emailDomain);

        toast.success(
          `Welcome, ${result.user.displayName}. If you didn't complete your profile yet, please do it first to continue our services.`
        );
      } else {
        toast.error("You have to use instituional email to continute this.");
        await auth.signOut();
        return;
      }
    } catch (error) {
      toast.error("Something went wrong during authentication process.");
    }
  };

  return (
    <div className={`flex items-center px-5  ${styles.home_area}`}>
      <div>
        <div className="flex items-center gap-2">
          <div>
            <img
              src="images/nstu_logo.gif"
              alt="NSTU Logo"
              className="max-w-[60px]"
            />
          </div>
          <img
            src="images/logo-colour.png"
            alt="NSTU "
            className="max-w-[250px]"
          />
        </div>
        <h2
          className={`text-4xl py-2 max-w-lg font-extrabold tracking-tight ${styles.home_heading}`}
        >
          সহজ ও দ্রুত অভিযোগ সমাধান
        </h2>
        <p className="text-body text-gray-900 max-w-2xl mt-2">
          নোয়াখালী বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়ের জন্য একটি সহজ এবং
          সুনির্দিষ্ট প্ল্যাটফর্ম যা আপনাকে যেকোনো সময়, যেকোনো স্থানে অভিযোগ
          জমা দিতে, ট্র্যাক করতে এবং সমাধান করতে সক্ষম করে। ব্যবহারকারীদের জন্য
          বাস্তব-সময় আপডেট এবং কার্যকরী সমাধান প্রদান করে তাদের ক্ষমতায়ন করে।
        </p>

        {!user ? (
          <>
            {" "}
            <Button
              onClick={handleSignIn}
              className="bg-white text-black mt-4 cursor-pointer hover:bg-gray-100"
            >
              <Mail />
              আপনার ইনস্টিটিউশনাল মেইল দিয়ে লগইন করুন
            </Button>
            <p className="font-bold  text-sm mt-1">
              বাটনে ক্লিক করে আপনার nstu.edu.bd ডোমেইন যুক্ত ইমেইলটি নির্বাচন
              করুন।
            </p>
          </>
        ) : (
          <>
            <Button
              asChild
              className="bg-white text-black mt-4 cursor-pointer hover:bg-gray-100"
            >
              <Link to="/home">ইউজার প্যানেল</Link>
            </Button>
            {user?.role === "ADMIN" && (
              <Button
                asChild
                className="bg-white text-black mt-4 cursor-pointer hover:bg-gray-100 ml-2"
              >
                <Link to="/admin">অ্যাডমিন প্যানেল</Link>
              </Button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
