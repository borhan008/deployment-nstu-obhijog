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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, MoreHorizontal } from "lucide-react";
import { useEffect, useState } from "react";
import { useAuth } from "../../User/Context/AuthProvider";
import { toast } from "sonner";
import axios from "axios";
import { auth } from "../../../../firebase";
import { Label } from "@/components/ui/label";

export default function Employee() {
  const { user } = useAuth();
  const [search, setSearch] = useState("");
  const [employees, setEmployees] = useState([]);
  const [searchCategoryId, setSearchCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const [editEmpId, setEditEmpId] = useState(null);
  const [formDetails, setFormDetails] = useState({
    employee_name: "",
    employee_mobile: "",
    complaint_cat_id: "",
  });
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const [take, setTake] = useState(20);
  const [skip, setSkip] = useState(0);

  const phoneRegex = /^\+8801\d{9}$/;

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const token = await auth?.currentUser?.getIdToken();
        const employee = await axios.get(
          `${backendURL}/employee?take=${take}&skip=${skip}&search=${search}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(employee.data);
        setEmployees(employee.data.employees);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong while fetching the data.");
      }
    };

    fetchEmployees();
  }, [take, skip]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setSkip(0);
        const token = await auth?.currentUser?.getIdToken();
        const employee = await axios.get(
          `${backendURL}/employee?take=${take}&skip=${skip}&search=${search}&cat_id=${searchCategoryId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(employee.data);
        setEmployees(employee.data.employees);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong while fetching the data.");
      }
    };

    fetchEmployees();
  }, [search, searchCategoryId]);

  useEffect(() => {
    try {
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

      fetchCategories();
    } catch (error) {}
  }, []);

  const handleEmployeeCreation = async (e) => {
    e.preventDefault();
    if (
      formDetails.complaint_cat_id.trim() === "" ||
      formDetails.employee_name.trim() === "" ||
      formDetails.complaint_cat_id.trim() === ""
    ) {
      toast.error("All fields are required.");
      return;
    }
    try {
      const token = await auth?.currentUser?.getIdToken();
      const response = await axios.post(
        `${backendURL}/employee/`,
        formDetails,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      setEmployees([...employees, response.data.employee]);
      toast.success("Employee Created");
      setFormDetails({
        employee_name: "",
        employee_mobile: "",
        complaint_cat_id: "",
      });
    } catch (error) {
      console.log(error);
      toast.error("Failed to creating employee.");
    }
  };

  const handleEditBtn = (employee_id) => {
    setEditEmpId(employee_id);
    setFormDetails(...employees.filter((f) => f.employee_id === employee_id));
  };

  const handleEditemp = async (e) => {
    e.preventDefault();
    if (
      formDetails.employee_name.trim() === "" ||
      formDetails.employee_mobile.trim() === ""
    ) {
      toast.error("All fields are required.");
      return;
    }
    try {
      const token = await auth?.currentUser?.getIdToken();
      const response = await axios.put(
        `${backendURL}/employee/${editEmpId}`,
        formDetails,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data.employee);
      toast.success("Employee Updated");
      setFormDetails({
        employee_name: "",
        employee_mobile: "",
        complaint_cat_id: "",
      });
      setEmployees(
        employees.map((emp) =>
          emp.employee_id === response.data.employee.employee_id
            ? response.data.employee
            : emp
        )
      );
      setEditEmpId(null);
    } catch (error) {
      toast.error("Something went wrong while editing the employee.");
    }
  };

  const handleDelete = async (employee_id) => {
    try {
      const token = await auth?.currentUser?.getIdToken();
      const response = await axios.delete(
        `${backendURL}/employee/${employee_id}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Employee Deleted");

      setEmployees(employees.filter((emp) => emp.employee_id != employee_id));
      setEditEmpId(null);
    } catch (error) {
      toast.error("Something went wrong while deleting the employee.");
    }
  };
  return (
    <div className="mx-auto">
      <div className="flex items-center justify-between mb-4">
        <Input
          placeholder="Search employees..."
          className="w-full max-w-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="">
          <Select
            id="category"
            value={searchCategoryId}
            onValueChange={(val) => setSearchCategoryId(val)}
            className="col-span-3 w-full"
            required
          >
            <SelectTrigger className="w-full col-span-3 " required>
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem key={0} value={0}>
                All
              </SelectItem>
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
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Add</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Employee</DialogTitle>
              <DialogDescription>
                Make changes to the Employee details here. Click create when
                you're done.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleEmployeeCreation}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="employee_name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="employee_name"
                    placeholder="e.g., Borhan"
                    className="col-span-3"
                    value={formDetails.employee_name}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        employee_name: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="employee_mobile" className="text-right">
                    Mobile
                  </Label>
                  <Input
                    id="employee_mobile"
                    placeholder="e.g., +88018..."
                    className="col-span-3"
                    value={formDetails.employee_mobile}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        employee_mobile: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="category" className="text-right">
                    Category
                  </Label>
                  <Select
                    id="category"
                    value={formDetails.complaint_cat_id}
                    onValueChange={(val) =>
                      setFormDetails({ ...formDetails, complaint_cat_id: val })
                    }
                    className="col-span-3 w-full"
                    required
                  >
                    <SelectTrigger className="w-full col-span-3 " required>
                      <SelectValue placeholder="Select a Category" />
                    </SelectTrigger>
                    <SelectContent>
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
                Mobile
              </TableHead>
              <TableHead className="text-gray-600 font-semibold">
                Category
              </TableHead>
              <TableHead className="text-gray-600 font-semibold text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees &&
              employees?.map((emp) => (
                <TableRow key={emp.employee_id}>
                  <TableCell className="text-gray-800 font-medium">
                    {emp.employee_id}
                  </TableCell>
                  <TableCell className="text-gray-700">
                    {editEmpId === emp.employee_id ? (
                      <Input
                        value={formDetails.employee_name}
                        onChange={(e) =>
                          setFormDetails({
                            ...formDetails,
                            employee_name: e.target.value,
                          })
                        }
                      />
                    ) : (
                      emp.employee_name
                    )}
                  </TableCell>

                  <TableCell>
                    {editEmpId === emp.employee_id ? (
                      <Input
                        value={formDetails.employee_mobile}
                        onChange={(e) =>
                          setFormDetails({
                            ...formDetails,
                            employee_mobile: e.target.value,
                          })
                        }
                      />
                    ) : (
                      emp.employee_mobile
                    )}
                  </TableCell>

                  <TableCell>
                    {editEmpId === emp.employee_id ? (
                      <Select
                        id="category"
                        value={formDetails.complaint_cat_id.toString()}
                        onValueChange={(val) =>
                          setFormDetails({
                            ...formDetails,
                            complaint_cat_id: val,
                          })
                        }
                        className="col-span-3 w-full"
                        required
                      >
                        <SelectTrigger className="w-full col-span-3 " required>
                          <SelectValue placeholder="Select a Category" />
                        </SelectTrigger>
                        <SelectContent>
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
                    ) : (
                      <Badge variant="outline" className="text-gray-700">
                        {emp.ComplaintCataegory.complaint_cat_name}
                      </Badge>
                    )}
                  </TableCell>

                  <TableCell className="text-right">
                    {editEmpId != emp.employee_id ? (
                      <Dialog>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <button className="p-1 rounded-md hover:bg-gray-100">
                              <MoreHorizontal className="w-5 h-5 text-gray-600" />
                            </button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-32">
                            <DropdownMenuItem
                              onClick={() => handleEditBtn(emp.employee_id)}
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
                                <strong>{emp.employee_name}</strong> ?
                              </span>
                              <DialogClose asChild>
                                <Button
                                  className="mr-2"
                                  onClick={(e) => handleDelete(emp.employee_id)}
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
                          onClick={handleEditemp}
                          className="mr-1"
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => setEditEmpId("")}
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
