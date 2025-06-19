"use client";
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, MoreHorizontal } from "lucide-react";
import { DialogClose } from "@radix-ui/react-dialog";
import { useAuth } from "../../User/Context/AuthProvider";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { auth } from "../../../../firebase";
import axios from "axios";

export default function Buildings() {
  const { user } = useAuth();
  const [search, setSearch] = useState("");
  const [buildings, setBuildings] = useState([]);
  const [editId, setEditId] = useState("");

  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const [formDetails, setFormDetails] = useState({
    building_name: "",
  });

  useEffect(() => {
    const fetchBuildings = async () => {
      try {
        const token = await auth?.currentUser?.getIdToken();
        const res = await axios.get(`${backendURL}/building`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBuildings(res.data.buildings);
      } catch (error) {
        toast.error("Error fetching buildings");
      }
    };

    fetchBuildings();
  }, []);

  const filteredBuildings = buildings.filter((b) =>
    b.building_name.toLowerCase().includes(search.toLowerCase())
  );

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const token = await auth?.currentUser?.getIdToken();
      const res = await axios.post(
        `${backendURL}/building`,
        { ...formDetails },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const newBuilding = res.data.building;
      setBuildings([...buildings, newBuilding]);
      toast.success("Building created.");
      setFormDetails({ building_name: "" });
    } catch (error) {
      toast.error("Failed to create building.");
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const token = await auth?.currentUser?.getIdToken();
      await axios.put(
        `${backendURL}/building/${editId}`,
        { ...formDetails },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBuildings(
        buildings.map((b) =>
          b.building_id === editId ? { ...b, ...formDetails } : b
        )
      );
      toast.success("Building updated.");
      setEditId("");
      setFormDetails({ building_name: "" });
    } catch (error) {
      toast.error("Update failed.");
    }
  };

  const handleEditBtn = (id) => {
    setEditId(id);
    const selected = buildings.find((b) => b.building_id === id);
    setFormDetails({ building_name: selected.building_name });
  };

  const handleDelete = async (id) => {
    try {
      const token = await auth?.currentUser?.getIdToken();
      await axios.delete(`${backendURL}/building/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBuildings(buildings.filter((b) => b.building_id !== id));
      toast.success("Building deleted.");
    } catch (error) {
      toast.error("Deletion failed.");
    }
  };

  return (
    <div className="mx-auto">
      <div className="flex items-center justify-between mb-4">
        <Input
          placeholder="Search buildings..."
          className="w-full max-w-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Add Building</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Building</DialogTitle>
              <DialogDescription>
                Provide the building name. Click create when you're done.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleCreate}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="building_name" className="text-right">
                    Building Name
                  </Label>
                  <Input
                    id="building_name"
                    value={formDetails.building_name}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        building_name: e.target.value,
                      })
                    }
                    required
                    className="col-span-3"
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
              <TableHead className="text-right text-gray-600 font-semibold">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredBuildings.map((b) => (
              <TableRow key={b.building_id}>
                <TableCell>{b.building_id}</TableCell>
                <TableCell>
                  {editId === b.building_id ? (
                    <Input
                      value={formDetails.building_name}
                      onChange={(e) =>
                        setFormDetails({
                          ...formDetails,
                          building_name: e.target.value,
                        })
                      }
                    />
                  ) : (
                    b.building_name
                  )}
                </TableCell>
                <TableCell className="text-right">
                  {editId !== b.building_id ? (
                    <Dialog>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button className="p-1 rounded-md hover:bg-gray-100">
                            <MoreHorizontal className="w-5 h-5 text-gray-600" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-32">
                          <DropdownMenuItem
                            onClick={() => handleEditBtn(b.building_id)}
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
                            Are you sure you want to delete{" "}
                            <strong>{b.building_name}</strong>?
                            <div className="mt-4">
                              <DialogClose asChild>
                                <Button
                                  onClick={() => handleDelete(b.building_id)}
                                  className="mr-2"
                                >
                                  Yes
                                </Button>
                              </DialogClose>
                              <DialogClose asChild>
                                <Button type="button" variant="outline">
                                  Cancel
                                </Button>
                              </DialogClose>
                            </div>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <>
                      <Button onClick={handleEdit} className="mr-2">
                        Save
                      </Button>
                      <Button variant="outline" onClick={() => setEditId("")}>
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
