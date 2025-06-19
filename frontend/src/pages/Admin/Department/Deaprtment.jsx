import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, MoreHorizontal } from "lucide-react";
import { useAuth } from "../../User/Context/AuthProvider";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { auth } from "../../../../firebase";
import axios from "axios";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { data } from "react-router-dom";
import { DialogClose } from "@radix-ui/react-dialog";

export default function Department() {
  const { user } = useAuth();
  const [search, setSearch] = useState("");
  const [departments, setDepartments] = useState([]);
  const [editDeptId, setEditDeptId] = useState("");

  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const [formDetails, setFormDetails] = useState({
    dept_full_name: "",
    dept_shortform: "",
    department_id: "",
  });

  useEffect(() => {
    const fetchDept = async () => {
      try {
        const token = await auth?.currentUser?.getIdToken();
        const depts = await axios.get(`${backendURL}/departments`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(depts);
        setDepartments(depts.data.departments);
      } catch (error) {
        console.log(error);

        toast.error("Something went wrong", {
          description: error?.response?.data?.message | "",
        });
      }
    };

    fetchDept();
  }, []);

  const filteredDepartments = departments.filter(
    (dept) =>
      dept.dept_full_name.toLowerCase().includes(search.toLowerCase()) ||
      dept.dept_shortform.toLowerCase().includes(search.toLowerCase())
  );

  const handleCreateDept = async (e) => {
    e.preventDefault();
    try {
      const token = await auth?.currentUser?.getIdToken();
      await axios.post(
        `${backendURL}/department`,
        { ...formDetails },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Deaprtment created.");
      setDepartments([...departments, formDetails]);
      setFormDetails({
        department_id: "",
        dept_full_name: "",
        dept_shortform: "",
      });
    } catch (error) {
      console.log(error);
      toast.error("Failed to create a department", {
        description:
          "The department id might be already exists. Check and try again later.",
      });
    }
  };

  const handleEditDept = async (e) => {
    e.preventDefault();
    if (
      formDetails.department_id.trim() == "" ||
      formDetails.dept_full_name.trim() == "" ||
      formDetails.dept_shortform.trim() == ""
    ) {
      toast.error("All field are required.");
      return;
    }
    const token = await auth?.currentUser?.getIdToken();

    try {
      await axios.put(
        `${backendURL}/department/${editDeptId}`,
        {
          ...formDetails,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setDepartments(
        departments.map((dept) =>
          dept.department_id === editDeptId ? formDetails : dept
        )
      );
      setFormDetails({
        department_id: "",
        dept_full_name: "",
        dept_shortform: "",
      });
      toast.success("Departmente edited successfully.");
      setEditDeptId("");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const handleEditBtn = (edited_department_id) => {
    setEditDeptId(edited_department_id);
    setFormDetails(
      ...departments.filter((f) => f.department_id === edited_department_id)
    );
  };

  const handleDelete = async (department_id) => {
    try {
      const token = await auth?.currentUser?.getIdToken();

      await axios.delete(`${backendURL}/department/${department_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDepartments(
        departments.filter((f) => f.department_id != department_id)
      );
      toast.success("Department deleted successfully.");
    } catch (error) {
      toast.error("Something went wrong while deleting the error.");
    }
  };

  return (
    <div className="mx-auto">
      <div className="flex items-center justify-between mb-4">
        <Input
          placeholder="Search departments..."
          className="w-full max-w-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Add Department</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Department</DialogTitle>
              <DialogDescription>
                Make changes to the department details here. Click create when
                you're done.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleCreateDept}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="dept-id" className="text-right">
                    Dept. ID
                  </Label>
                  <Input
                    id="dept-id"
                    placeholder="e.g., 101"
                    className="col-span-3"
                    value={formDetails.department_id}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        department_id: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="dept-full" className="text-right">
                    Full Form
                  </Label>
                  <Input
                    id="dept-full"
                    placeholder="e.g., Computer Science & Telecommunication Engineering"
                    className="col-span-3"
                    value={formDetails.dept_full_name}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        dept_full_name: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="dept-short" className="text-right">
                    Short Form
                  </Label>
                  <Input
                    id="dept-short"
                    placeholder="e.g., CSTE"
                    className="col-span-3"
                    value={formDetails.dept_shortform}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        dept_shortform: e.target.value,
                      })
                    }
                    required
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Create</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="text-gray-600 font-semibold">ID</TableHead>
              <TableHead className="text-gray-600 font-semibold">
                Name
              </TableHead>
              <TableHead className="text-gray-600 font-semibold">
                Shortform
              </TableHead>
              <TableHead className="text-gray-600 font-semibold text-right">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDepartments.map((dept) => (
              <TableRow key={dept.department_id}>
                <TableCell className="text-gray-800 font-medium">
                  {editDeptId === dept.department_id ? (
                    <Input
                      value={formDetails.department_id}
                      onChange={(e) =>
                        setFormDetails({
                          ...formDetails,
                          department_id: e.target.value,
                        })
                      }
                    />
                  ) : (
                    dept.department_id
                  )}
                </TableCell>
                <TableCell className="text-gray-700">
                  {editDeptId === dept.department_id ? (
                    <Input
                      value={formDetails.dept_full_name}
                      onChange={(e) =>
                        setFormDetails({
                          ...formDetails,
                          dept_full_name: e.target.value,
                        })
                      }
                    />
                  ) : (
                    dept.dept_full_name
                  )}
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="text-gray-700">
                    {editDeptId === dept.department_id ? (
                      <Input
                        value={formDetails.dept_shortform}
                        onChange={(e) =>
                          setFormDetails({
                            ...formDetails,
                            dept_shortform: e.target.value,
                          })
                        }
                      />
                    ) : (
                      dept.dept_shortform
                    )}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  {editDeptId != dept.department_id ? (
                    <Dialog>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button className="p-1 rounded-md hover:bg-gray-100">
                            <MoreHorizontal className="w-5 h-5 text-gray-600" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-32">
                          <DropdownMenuItem
                            onClick={() => handleEditBtn(dept.department_id)}
                          >
                            Edit
                          </DropdownMenuItem>

                          <DropdownMenuItem asChild>
                            <DialogTrigger className="w-full">
                              Delete
                            </DialogTrigger>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>

                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Confirm</DialogTitle>
                          <DialogDescription>
                            <span className="text-body my-3 text-gray-700 block">
                              Are you confirm to delete{" "}
                              <strong>{dept.dept_full_name}</strong> ?
                            </span>
                            <DialogClose asChild>
                              <Button
                                className="mr-2"
                                onClick={(e) =>
                                  handleDelete(dept.department_id)
                                }
                              >
                                Yes
                              </Button>
                            </DialogClose>
                            <DialogClose asChild>
                              <Button type="button" variant="outline">
                                Close
                              </Button>
                            </DialogClose>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <>
                      <Button
                        type="submit"
                        onClick={handleEditDept}
                        className="mr-1"
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setEditDeptId("")}
                      >
                        Cancel
                      </Button>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
