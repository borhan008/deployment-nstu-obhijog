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

export default function EmployeeCategories() {
  const { user } = useAuth();
  const [search, setSearch] = useState("");
  const [employeeCategories, setEmployeeCategories] = useState([]);
  const [editCatId, setEditCatId] = useState("");

  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const [formDetails, setFormDetails] = useState({
    category_name: "",
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const token = await auth?.currentUser?.getIdToken();
        const categories = await axios.get(`${backendURL}/employees/category`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setEmployeeCategories(categories.data.empCategories);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong", {
          description: error?.response?.data?.message || "",
        });
      }
    };

    fetchCategories();
  }, []);

  const filteredEmployeeCategories = employeeCategories.filter((cat) =>
    cat.category_name.toLowerCase().includes(search.toLowerCase())
  );

  const handleCreateCategory = async (e) => {
    e.preventDefault();
    try {
      const token = await auth?.currentUser?.getIdToken();
      const response = await axios.post(
        `${backendURL}/employees/category`,
        { ...formDetails },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Employee Category created.");
      const newCategory = response.data.employeeCategory;
      setEmployeeCategories([...employeeCategories, newCategory]);
      setFormDetails({ category_name: "" });
    } catch (error) {
      console.log(error);
      toast.error("Failed to create employee category.");
    }
  };

  const handleEditCategory = async (e) => {
    e.preventDefault();
    if (formDetails.category_name.trim() === "") {
      toast.error("All fields are required.");
      return;
    }

    const token = await auth?.currentUser?.getIdToken();

    try {
      await axios.put(
        `${backendURL}/employees/category/${editCatId}`,
        { ...formDetails },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setEmployeeCategories(
        employeeCategories.map((cat) =>
          cat.emp_category_id === editCatId ? { ...cat, ...formDetails } : cat
        )
      );
      toast.success("Employee Category updated successfully.");
      setFormDetails({ category_name: "" });
      setEditCatId("");
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

  const handleEditBtn = (catId) => {
    setEditCatId(catId);
    const selected = employeeCategories.find(
      (cat) => cat.emp_category_id === catId
    );
    setFormDetails({ category_name: selected.category_name });
  };

  const handleDelete = async (catId) => {
    try {
      const token = await auth?.currentUser?.getIdToken();
      await axios.delete(`${backendURL}/employees/category/${catId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setEmployeeCategories(
        employeeCategories.filter((cat) => cat.emp_category_id !== catId)
      );
      toast.success("Employee category deleted successfully.");
    } catch (error) {
      toast.error("Something went wrong while deleting the employee category.");
    }
  };

  return (
    <div className="mx-auto">
      <div className="flex items-center justify-between mb-4">
        <Input
          placeholder="Search categories..."
          className="w-full max-w-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Add Category</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Employee Category</DialogTitle>
              <DialogDescription>
                Provide the category name. Click create when you're done.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleCreateCategory}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="cat-name" className="text-right">
                    Category Name
                  </Label>
                  <Input
                    id="cat-name"
                    placeholder="e.g., IT Support"
                    className="col-span-3"
                    value={formDetails.category_name}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        category_name: e.target.value,
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
                Category Name
              </TableHead>
              <TableHead className="text-gray-600 font-semibold text-right">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredEmployeeCategories.map((cat) => (
              <TableRow key={cat.emp_category_id}>
                <TableCell className="text-gray-800 font-medium">
                  {cat.emp_category_id}
                </TableCell>
                <TableCell className="text-gray-700">
                  {editCatId === cat.emp_category_id ? (
                    <Input
                      value={formDetails.category_name}
                      onChange={(e) =>
                        setFormDetails({
                          ...formDetails,
                          category_name: e.target.value,
                        })
                      }
                    />
                  ) : (
                    cat.category_name
                  )}
                </TableCell>
                <TableCell className="text-right">
                  {editCatId !== cat.emp_category_id ? (
                    <Dialog>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button className="p-1 rounded-md hover:bg-gray-100">
                            <MoreHorizontal className="w-5 h-5 text-gray-600" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-32">
                          <DropdownMenuItem
                            onClick={() => handleEditBtn(cat.emp_category_id)}
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
                              Are you sure you want to delete{" "}
                              <strong>{cat.category_name}</strong>?
                            </span>
                            <DialogClose asChild>
                              <Button
                                className="mr-2"
                                onClick={() =>
                                  handleDelete(cat.emp_category_id)
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
                        onClick={handleEditCategory}
                        className="mr-1"
                      >
                        Save
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setEditCatId("")}
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
