import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
import { DialogClose } from "@radix-ui/react-dialog";
import { MoreHorizontal } from "lucide-react";
import { useAuth } from "../../User/Context/AuthProvider";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { auth } from "../../../../firebase";
import axios from "axios";

export default function Profession() {
  const { user } = useAuth();
  const [search, setSearch] = useState("");
  const [professions, setProfessions] = useState([]);
  const [editProfessionId, setEditProfessionId] = useState("");

  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const [formDetails, setFormDetails] = useState({
    profession_name: "",
  });

  useEffect(() => {
    const fetchProfessions = async () => {
      try {
        const token = await auth?.currentUser?.getIdToken();
        const response = await axios.get(`${backendURL}/profession`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfessions(response.data.professions);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong", {
          description: error?.response?.data?.message || "",
        });
      }
    };

    fetchProfessions();
  }, []);

  const filteredProfessions = professions?.filter((prof) =>
    prof.profession_name.toLowerCase().includes(search.toLowerCase())
  );

  const handleCreateProfession = async (e) => {
    e.preventDefault();
    try {
      const token = await auth?.currentUser?.getIdToken();
      const response = await axios.post(
        `${backendURL}/admin/profession`,
        { ...formDetails },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Profession created.");
      const newProfession = response.data.profession;
      setProfessions([...professions, newProfession]);
      setFormDetails({
        profession_name: "",
      });
    } catch (error) {
      console.log(error);
      toast.error("Failed to create profession");
    }
  };

  const handleEditProfession = async (e) => {
    e.preventDefault();
    if (formDetails.profession_name.trim() === "") {
      toast.error("All fields are required.");
      return;
    }

    try {
      const token = await auth?.currentUser?.getIdToken();
      await axios.put(
        `${backendURL}/admin/profession/${editProfessionId}`,
        { ...formDetails },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProfessions(
        professions.map((prof) =>
          prof.profession_id === editProfessionId ? formDetails : prof
        )
      );
      setFormDetails({ profession_name: "" });
      setEditProfessionId("");
      toast.success("Profession edited successfully.");
    } catch (error) {
      toast.error("Something went wrong while editing profession");
    }
  };

  const handleEditBtn = (id) => {
    setEditProfessionId(id);
    setFormDetails(...professions.filter((p) => p.profession_id === id));
  };

  const handleDeleteProfession = async (id) => {
    try {
      const token = await auth?.currentUser?.getIdToken();
      await axios.delete(`${backendURL}/admin/profession/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProfessions(professions.filter((p) => p.profession_id !== id));
      toast.success("Profession deleted successfully.");
    } catch (error) {
      toast.error("Something went wrong while deleting profession");
    }
  };

  return (
    <div className="mx-auto">
      <div className="flex items-center justify-between mb-4">
        <Input
          placeholder="Search professions..."
          className="w-full max-w-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Add Profession</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Profession</DialogTitle>
              <DialogDescription>
                Provide the profession name. Click create when you're done.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleCreateProfession}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="profession-name" className="text-right">
                    Profession Name
                  </Label>
                  <Input
                    id="profession-name"
                    placeholder="e.g., Electrician"
                    className="col-span-3"
                    value={formDetails.profession_name}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        profession_name: e.target.value,
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
                Profession Name
              </TableHead>
              <TableHead className="text-gray-600 font-semibold text-right">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProfessions.map((prof) => (
              <TableRow key={prof.profession_id}>
                <TableCell className="text-gray-800 font-medium">
                  {prof.profession_id}
                </TableCell>
                <TableCell className="text-gray-700">
                  {editProfessionId === prof.profession_id ? (
                    <Input
                      value={formDetails.profession_name}
                      onChange={(e) =>
                        setFormDetails({
                          ...formDetails,
                          profession_name: e.target.value,
                        })
                      }
                    />
                  ) : (
                    prof.profession_name
                  )}
                </TableCell>
                <TableCell className="text-right">
                  {editProfessionId !== prof.profession_id ? (
                    <Dialog>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button className="p-1 rounded-md hover:bg-gray-100">
                            <MoreHorizontal className="w-5 h-5 text-gray-600" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-32">
                          <DropdownMenuItem
                            onClick={() => handleEditBtn(prof.profession_id)}
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
                              <strong>{prof.profession_name}</strong>?
                            </span>
                            <DialogClose asChild>
                              <Button
                                className="mr-2"
                                onClick={() =>
                                  handleDeleteProfession(prof.profession_id)
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
                        onClick={handleEditProfession}
                        className="mr-1"
                      >
                        Save
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setEditProfessionId("")}
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
