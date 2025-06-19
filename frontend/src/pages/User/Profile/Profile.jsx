import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthProvider";
import axios from "axios";
import { auth } from "../../../../firebase";
import { toast } from "sonner";

export default function Profile() {
  const { user, setLoading } = useAuth();
  const [departments, setDepartments] = useState([]);
  const [professions, setProfessions] = useState([]);
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const email = user.email;
  const isStudent = email.split("@")[1] === "student.nstu.edu.bd";

  const [userProfession, setUserProfession] = useState(0);
  const [userDepartment, setUserDepartment] = useState(" ");
  const [mobile, setMobile] = useState("");
  const [roll, setRoll] = useState("");
  const domain = "@student.nstu.edu.bd";
  const phoneRegex = /^\+8801\d{9}$/;
  const [btnDisabled, setBtnDisabled] = useState(false);

  useEffect(() => {
    fetchAllNeeded();
  }, []);

  const fetchAllNeeded = async () => {
    try {
      const token = await auth?.currentUser?.getIdToken();
      const depts = await axios.get(`${backendURL}/departments`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDepartments(depts.data.departments);

      const profs = await axios.get(`${backendURL}/profession`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProfessions(profs.data.professions);
      if (isStudent) {
        setUserProfession(
          profs.data.professions.find(
            (ft) => ft.profession_name.toLowerCase() == "student"
          ).profession_id
        );
      }

      const userData = await axios.get(`${backendURL}/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (userData.status === 200) {
        setMobile(userData.data.user.mobile);
        setUserProfession(userData.data.user.profession_id);
        //setUserDepartment(userData.data.user.department_id);
        setRoll(userData.data.user.roll);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      if (isStudent) {
        const localPart = email.slice(0, -domain.length);

        const lastFour = localPart.slice(-4);
        const dept_id = lastFour.slice(0, 2);

        setUserDepartment(dept_id);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isStudent) {
      const rollRegex = new RegExp(
        `^[A-Z]{3}\\d{2}${userDepartment}\\d{3}[A-Z]$`
      );
      if (!rollRegex.test(roll)) {
        toast.error(
          "Your roll doesn't match with your department or the format."
        );
        return;
      }
    }
    if (!phoneRegex.test(mobile)) {
      toast.error("Mobile number format should be +8801....");
      return;
    }

    setBtnDisabled(true);
    try {
      const token = await auth?.currentUser?.getIdToken();
      await axios.post(
        `${backendURL}/user/create`,
        {
          profession_id: parseInt(userProfession),
          department_id: userDepartment,
          mobile: mobile,
          roll: roll,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Profile Updated Succesfully.");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        description: "error.error",
      });
    } finally {
      setBtnDisabled(false);
    }
  };
  return (
    <div className=" mx-auto p-6 md:p-8 bg-white/80 rounded-2xl shadow-lg backdrop-blur-xl border">
      <h2 className="text-2xl font-bold text-gray-800">Your Profile</h2>
      <p className="text-sm mb-6 font-bold">
        You have to complete your profile to submit your complaint.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="md:flex w-full gap-4">
          <div className="mb-4 space-y-1 w-full">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              disabled
              value={user.displayName}
            />
          </div>

          <div className="mb-4 space-y-1  w-full">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={user.email}
              disabled
            />
          </div>
        </div>

        <div className="lg:flex gap-4">
          <div className="mb-4 space-y-1 w-full">
            <Label>Profession</Label>

            <Select
              value={userProfession}
              onValueChange={(val) => setUserProfession(String(val))}
            >
              <SelectTrigger className="w-full capitalize" disabled={isStudent}>
                <SelectValue placeholder="Profession" />
              </SelectTrigger>
              <SelectContent>
                {professions.map((prof) => (
                  <SelectItem value={String(prof.profession_id)}>
                    {prof.profession_name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {isStudent && (
            <div className="mb-4 space-y-1 w-full">
              <Label htmlFor="mobile">Roll</Label>
              <Input
                id="roll"
                placeholder="ASH2101008M"
                value={roll}
                onChange={(e) => setRoll(e.target.value)}
                required
              />
            </div>
          )}

          <div className="mb-4 space-y-1  w-full">
            <Label>Deaprtment</Label>

            <Select
              value={userDepartment}
              onValueChange={(val) => setUserDepartment(String(val))}
              disabled={isStudent}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a Department" />
              </SelectTrigger>
              <SelectContent>
                {departments?.map((dept) => (
                  <SelectItem value={String(dept.department_id)}>
                    {dept.dept_full_name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mb-4 space-y-1">
          <Label htmlFor="mobile">Mobile</Label>
          <Input
            id="mobile"
            placeholder="+880"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </div>

        <div className="mb-4 flex items-center gap-2">
          <Checkbox id="agree" disabled checked />
          <Label htmlFor="agree" className="text-sm">
            I agree that all of them correct.
          </Label>
        </div>

        <div className="d-block overflow-hidden">
          <Button type="Submit" className="float-right" disabled={btnDisabled}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
