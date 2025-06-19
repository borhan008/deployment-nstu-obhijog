import React, { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { auth } from "../../../../firebase";
import axios from "axios";
import { toast } from "sonner";
import { ArrowLeft, Search } from "lucide-react";
import { DialogClose } from "@radix-ui/react-dialog";
import Loading from "../../Common/Loading";

export const ViewResolveUser = () => {
  const { complaint_id } = useParams();
  const [count, setCount] = useState(-1);

  if (Number.isNaN(parseInt(complaint_id)))
    return <Navigate to="/admin/complaint"></Navigate>;

  const [complaints, setComplaints] = useState({});
  const [resolve, setResolve] = useState({});
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const token = await auth?.currentUser?.getIdToken();
      const complaints = await axios.get(
        `${backendURL}/complaint/view/${complaint_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setComplaints(...complaints.data.complaints);
      setCount(complaints.data.count);
      setResolve(complaints.data.resolved);
      console.log(complaints.data.resolved);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while fetchig complaints");
    }
  };

  return (
    <>
      {count === 1 ? (
        <div className="grid md:grid-cols-2 gap-2 w-full mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow-md space-y-4">
            {resolve ? (
              <>
                {" "}
                <h2 className="text-2xl font-bold text-gray-800">
                  Resolution of Your Complaint
                </h2>
                {resolve?.estimated_date && (
                  <div className="text-gray-700">
                    <span className="font-medium">Estimated Date:</span>{" "}
                    {resolve.estimated_date.split("T")[0]}
                  </div>
                )}
                <div className="text-gray-700">
                  <span className="font-medium">Resolution Details:</span>{" "}
                  {resolve?.resolved_details}
                </div>
                {resolve?.Employee && (
                  <div className="bg-gray-50 p-4 rounded-xl space-y-2">
                    <div className="text-gray-700 font-semibold">
                      Assigned Employee:
                    </div>
                    <div className="text-gray-800 font-semibold">
                      {resolve.Employee.employee_name}
                    </div>
                    <div className="text-gray-600 text-sm">
                      📞 {resolve.Employee.employee_mobile}
                    </div>
                    <div className="text-gray-600 text-sm">
                      🛠️{" "}
                      {resolve.Employee.ComplaintCataegory.complaint_cat_name}
                    </div>
                  </div>
                )}
                {resolve?.User && (
                  <div className="space-y-1">
                    <p className="text-gray-700 font-medium">Resolved By:</p>
                    <p className="text-gray-900 font-semibold">
                      {resolve.User.name}
                    </p>
                    <p className="text-gray-600 text-sm capitalize">
                      {resolve.User.Profession.profession_name}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {resolve.User.email}
                    </p>
                  </div>
                )}
              </>
            ) : (
              <h2>Noone resolved this yet.</h2>
            )}
          </div>

          <div className="sticky top-16 md:h-[calc(100vh-150px)] overflow-y-auto p-4 bg-white scrollbar-thin rounded-2xl shadow-md space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              {complaints.complaint_title}
            </h2>

            <div className="flex items-center gap-2">
              <Badge variant="outline">
                {complaints.ComplaintCataegory.complaint_cat_name}
              </Badge>
              <span className="text-sm text-gray-500">
                Created :{" "}
                {new Date(complaints.createdAt.toString()).toLocaleString()},
              </span>
              <span className="text-sm text-gray-500">
                Last Updated :{" "}
                {new Date(complaints.updatedAt.toString()).toLocaleString()}
              </span>
            </div>
            <div className="prose prose-sm max-w-none text-gray-700">
              <strong>Summary:</strong>{" "}
              <p className="italic">{complaints.summary}</p>
            </div>
            <div className="mt-2 border-t border-gray-200 pt-4">
              <h3 className="text-lg font-medium text-gray-900">
                {complaints.User.name},{" "}
                <span className="font-normal text-gray-600 capitalize">
                  {complaints?.User?.Profession?.profession_name || "Undefined"}
                </span>
                {complaints?.User?.Profession?.profession_name.toLowerCase() ===
                  "student" && (
                  <span className="font-normal text-gray-700 uppercase text-body2">
                    {", "}
                    {complaints?.User?.roll || ""}
                  </span>
                )}
              </h3>
              <p className="text-sm text-gray-600">
                {complaints?.User?.Department?.dept_full_name}
              </p>
              <p className="text-sm text-gray-600">
                {" "}
                {complaints?.User?.mobile}
              </p>
              <p className="text-sm text-blue-600 underline">
                {complaints?.User?.email}
              </p>
              <p>
                {complaints?.Buildings?.building_name && (
                  <span>
                    {" "}
                    Building : {complaints?.Buildings?.building_name},
                  </span>
                )}
                {complaints?.room_no && (
                  <span> Room : {complaints?.room_no}</span>
                )}
              </p>
            </div>

            <div className="prose prose-sm max-w-none text-gray-700">
              <p>{complaints?.complaint_description}</p>
            </div>
          </div>
        </div>
      ) : count === -1 ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-6 text-center space-y-4 h-[70vh]">
          <ArrowLeft className="w-12 h-12 text-gray-400" />
          <h2 className="text-2xl font-bold text-gray-800">Not Found</h2>
          <p className="text-gray-600 text-sm">
            The content you are looking for does not exist.
          </p>
          <Link
            to="/complaint"
            className="mt-4 inline-flex items-center px-4 py-2 bg-black text-white text-sm font-medium rounded-md transition"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Link>
        </div>
      )}
    </>
  );
};
