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

export const Resolve = () => {
  const { complaint_id } = useParams();
  const [count, setCount] = useState(-1);

  if (Number.isNaN(parseInt(complaint_id)))
    return <Navigate to="/admin/complaint"></Navigate>;

  const [complaints, setComplaints] = useState({});
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [searchCategory, setSearchCategory] = useState("0");
  const [employees, setEmployees] = useState([]);
  const [selectEmployee, setSelectEmployee] = useState(0);
  const [filteredEmployee, setFiltererEmployee] = useState([]);
  const [estimitaedDate, setEstimatedDate] = useState("");

  const [description, setDescription] = useState();
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    fetchComplaints();
    fetchCategories();
    fetchEmployees();
  }, []);

  const fetchComplaints = async () => {
    try {
      const token = await auth?.currentUser?.getIdToken();
      const complaints = await axios.get(
        `${backendURL}/admin/complaint/${complaint_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setComplaints(...complaints.data.complaints);
      if (complaints.data.resolved) {
        setDescription(complaints.data.resolved.resolved_details);
        if (complaints.data.resolved.estimated_date)
          setEstimatedDate(
            complaints.data.resolved.estimated_date.split("T")[0]
          );
        if (complaints.data.resolved.employee_id)
          setSelectEmployee(complaints.data.resolved.employee_id.toString());
      }
      setCount(complaints.data.count);
      console.log(complaints.data);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while fetchig complaints");
    }
  };
  const fetchCategories = async () => {
    try {
      const token = await auth?.currentUser?.getIdToken();
      const response = await axios.get(`${backendURL}/complaint/category`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data.categories);
      setCategories(response.data.categories);
    } catch (error) {
      console.log(error);
      toast.error("Failed to reloading categories.");
    }
  };

  const fetchEmployees = async () => {
    try {
      const token = await auth?.currentUser?.getIdToken();
      const employee = await axios.get(`${backendURL}/employee?take=1000`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(employee.data);
      setEmployees(employee.data.employees);
      setFiltererEmployee(employee.data.employees);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while fetching the data.");
    }
  };
  useEffect(() => {
    const filtered = employees.filter((emp) => {
      const name = emp.employee_name.toLowerCase();
      const mobile = emp.employee_mobile.toLowerCase();
      const searchText = search.toLowerCase();
      if (searchCategory === "0") {
        return name.includes(searchText) || mobile.includes(searchText);
      } else {
        return (
          emp.ComplaintCataegory.complaint_cat_id === Number(searchCategory) &&
          (name.includes(searchText) || mobile.includes(searchText))
        );
      }
    });

    setFiltererEmployee(filtered);
  }, [searchCategory, search]);

  const handleResolve = async (e) => {
    e.preventDefault();

    try {
      const token = await auth?.currentUser?.getIdToken();

      await axios.post(
        `${backendURL}/admin/complaint/resolve`,
        {
          complaint_id,
          resolved_details: description,
          employee_id: selectEmployee === "0" ? null : selectEmployee,
          estimated_date: estimitaedDate == "" ? null : estimitaedDate,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Your resolvation submitted");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while resolving an complaint");
    }
  };

  return (
    <>
      {count === 1 ? (
        <div className="grid  md:grid-cols-2 gap-2 w-full mx-auto">
          <div className="">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Resolve a Complaint
            </h2>
            <form action="" onSubmit={handleResolve}>
              <div className="mb-4 space-y-1">
                <Label htmlFor="description">
                  Describe about the soluton of the problem
                </Label>
                <Textarea
                  id="description"
                  placeholder="Describe about the soluton of the problem"
                  rows={20}
                  required
                  className="min-h-64"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="flex gap-2 items-end">
                <div>
                  <Label htmlFor="date" className="mb-1">
                    Estimated Date
                  </Label>
                  <Input
                    id="date"
                    placeholder="Describe the issue in detail"
                    type="date"
                    className="max-w-34 mb-0 pb-0"
                    value={estimitaedDate}
                    onChange={(e) => setEstimatedDate(e.target.value)}
                  />
                </div>
                <div>
                  <Dialog className="max-h-md">
                    <DialogTrigger asChild>
                      <Button variant="outline">
                        Assign Specific Employee
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-lg max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Search Employee</DialogTitle>
                        <DialogDescription>
                          Make changes to your profile here. Click save when
                          you're done.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex gap-2">
                        <div className="w-full relative">
                          <Input
                            placeholder="Search..."
                            className="w-full pr-[50px]"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                          />
                          <Button
                            variant="secondary"
                            className="gap-1  border-0 absolute right-[0] top-[0]"
                            onClick={fetchEmployees}
                          >
                            <Search className="h-2 w-2" />
                          </Button>
                        </div>
                        <div>
                          <Select
                            value={searchCategory}
                            onValueChange={(val) => setSearchCategory(val)}
                            required
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a Category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0">All Categories</SelectItem>
                              {categories &&
                                categories?.map((cat) => (
                                  <SelectItem
                                    key={cat.complaint_cat_id}
                                    value={cat.complaint_cat_id.toString()}
                                  >
                                    {cat.complaint_cat_name}
                                  </SelectItem>
                                ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-2">
                        {filteredEmployee.map((emp) => (
                          <DialogClose asChild>
                            <div
                              key={emp.employee_id}
                              className={` rounded-2xl py-2 px-3 border cursor-pointer transition-all duration-200 ${
                                emp.employee_id === Number(selectEmployee)
                                  ? "bg-gray-100 text-white"
                                  : "bg-white"
                              }`}
                              onClick={() => setSelectEmployee(emp.employee_id)}
                            >
                              <h2 className="text-xl font-semibold text-gray-800 mb-1">
                                {emp.employee_name}{" "}
                                <span className="	text-sm text-grey-100">
                                  {emp.ComplaintCataegory.complaint_cat_name}
                                </span>
                              </h2>
                              <p className="text-gray-600">
                                {emp.employee_mobile}
                              </p>
                            </div>
                          </DialogClose>
                        ))}
                      </div>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button type="button">Save changes</Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>

              <div>
                {Number(selectEmployee) != 0 &&
                  employees.map(
                    (emp) =>
                      emp.employee_id === Number(selectEmployee) && (
                        <div
                          key={emp.employee_id}
                          className={`my-2 rounded-2xl py-2 px-3 border cursor-pointer transition-all duration-200 ${
                            emp.employee_id === Number(selectEmployee)
                              ? "bg-gray-100 text-white"
                              : "bg-white"
                          }`}
                          onClick={() => setSelectEmployee(emp.employee_id)}
                        >
                          <h2 className="text-xl font-semibold text-gray-800 mb-1">
                            {emp.employee_name}{" "}
                            <span className="	text-sm text-grey-100">
                              {emp.ComplaintCataegory.complaint_cat_name}
                            </span>
                          </h2>
                          <p className="text-gray-600">{emp.employee_mobile}</p>
                        </div>
                      )
                  )}
              </div>
              <Button variant="default" className="mt-4" type="submit">
                Submit
              </Button>
            </form>
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
        <div className="flex flex-col items-center justify-center p-6 text-center space-y-4">
          <ArrowLeft className="w-12 h-12 text-gray-400" />
          <h2 className="text-2xl font-bold text-gray-800">Not Found</h2>
          <p className="text-gray-600 text-sm">
            The content you are looking for does not exist.
          </p>
          <Link
            asChild
            className="mt-4 inline-flex items-center px-4 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-900 transition"
            to="/admin/complaint"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Link>
        </div>
      )}
    </>
  );
};
