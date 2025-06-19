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

export default function ComplainCaegories() {
  const { user } = useAuth();
  const [search, setSearch] = useState("");
  const [complainCategories, setComplainCategories] = useState([]);
  const [editCatId, setEditCatId] = useState("");

  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const [formDetails, setFormDetails] = useState({
    complaint_cat_name: "",
  });

  useEffect(() => {
    const fetchComplaintCategories = async () => {
      try {
        const token = await auth?.currentUser?.getIdToken();
        const categories = await axios.get(`${backendURL}/complaint/category`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setComplainCategories(categories.data.categories);
      } catch (error) {
        console.log(error);

        toast.error("Something went wrong", {
          description: error?.response?.data?.message | "",
        });
      }
    };

    fetchComplaintCategories();
  }, []);

  const filteredComplaintCategories = complainCategories.filter((cat) =>
    cat.complaint_cat_name.toLowerCase().includes(search.toLowerCase())
  );

  const handleCreateComplaintCategory = async (e) => {
    e.preventDefault();
    try {
      const token = await auth?.currentUser?.getIdToken();
      const data = await axios.post(
        `${backendURL}/complaint/category`,
        { ...formDetails },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Complaint created.");
      const newData = await data.data.complaintCat;
      setComplainCategories([...complainCategories, newData]);
      setFormDetails({
        complaint_cat_name: "",
        complaint_cat_id: "",
      });
    } catch (error) {
      console.log(error);
      toast.error("Failed to create a Complaint");
    }
  };

  const handleEditComplaint = async (e) => {
    e.preventDefault();
    if (formDetails.complaint_cat_name.trim() == "") {
      toast.error("All field are required.");
      return;
    }
    const token = await auth?.currentUser?.getIdToken();

    try {
      await axios.put(
        `${backendURL}/complaint/category/${editCatId}`,
        {
          ...formDetails,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setComplainCategories(
        complainCategories.map((cat) =>
          cat.complaint_cat_id === editCatId ? formDetails : cat
        )
      );
      setFormDetails({
        complaint_cat_name: "",
      });
      toast.success("Complaint Categories edited successfully.");
      setEditCatId("");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const handleEditBtn = (edited_cat_id) => {
    setEditCatId(edited_cat_id);
    setFormDetails(
      ...complainCategories.filter((f) => f.complaint_cat_id === edited_cat_id)
    );
  };

  const handleDelete = async (cat_id) => {
    try {
      const token = await auth?.currentUser?.getIdToken();

      await axios.delete(`${backendURL}/complaint/category/${cat_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setComplainCategories(
        complainCategories.filter((f) => f.complaint_cat_id != cat_id)
      );
      toast.success("Complaint category deleted successfully.");
    } catch (error) {
      toast.error("Something went wrong while Complaint category.");
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
              <DialogTitle>Add Complaint Category</DialogTitle>
              <DialogDescription>
                Provide the category name. Click create when you're done.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleCreateComplaintCategory}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="cat-name" className="text-right">
                    Category Name
                  </Label>
                  <Input
                    id="cat-name"
                    placeholder="e.g., Electrical"
                    className="col-span-3"
                    value={formDetails.complaint_cat_name}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        complaint_cat_name: e.target.value,
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
            {filteredComplaintCategories
              .filter((cat) =>
                cat.complaint_cat_name
                  .toLowerCase()
                  .includes(search.toLowerCase())
              )
              .map((cat) => (
                <TableRow key={cat.complaint_cat_id}>
                  <TableCell className="text-gray-800 font-medium">
                    {cat.complaint_cat_id}
                  </TableCell>
                  <TableCell className="text-gray-700">
                    {editCatId === cat.complaint_cat_id ? (
                      <Input
                        value={formDetails.complaint_cat_name}
                        onChange={(e) =>
                          setFormDetails({
                            ...formDetails,
                            complaint_cat_name: e.target.value,
                          })
                        }
                      />
                    ) : (
                      cat.complaint_cat_name
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    {editCatId !== cat.complaint_cat_id ? (
                      <Dialog>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <button className="p-1 rounded-md hover:bg-gray-100">
                              <MoreHorizontal className="w-5 h-5 text-gray-600" />
                            </button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-32">
                            <DropdownMenuItem
                              onClick={() =>
                                handleEditBtn(cat.complaint_cat_id)
                              }
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
                                <strong>{cat.complaint_cat_name}</strong>?
                              </span>
                              <DialogClose asChild>
                                <Button
                                  className="mr-2"
                                  onClick={() =>
                                    handleDelete(cat.complaint_cat_id)
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
                          onClick={handleEditComplaint}
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
