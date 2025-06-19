import React, { useEffect, useState } from "react";

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
import { MoreHorizontal } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { auth } from "../../../../firebase";

export const AdminComplaints = () => {
  const [categories, setCategories] = useState([]);
  const [professions, setProfessions] = useState([]);
  const [complaints, setComplaints] = useState([]);

  const [search, setSearch] = useState("");
  const [searchCategoryId, setSearchCategoryId] = useState(0);
  const [searchProfessionId, setSearchProfessionId] = useState(0);
  const [searchStatus, setSearchStatus] = useState(" ");
  const [take, setTake] = useState(20);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const [expandedRow, setExpandedRow] = useState(-1);

  const backendURL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const token = await auth?.currentUser?.getIdToken();
        const response = await axios.get(`${backendURL}/complaint/category`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setCategories(response.data.categories);
        const profs = await axios.get(`${backendURL}/profession`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfessions(profs.data.professions);
        const complaints = await axios.get(
          `${backendURL}/admin/complaints?take=${take}&skip=${skip}&searchCategoryId=${searchCategoryId}&searchProfessionId=${searchProfessionId}&searchStatus=${searchStatus}&search=${search}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        setComplaints(complaints.data.complaints);
        setTotal(complaints.data.count);
      } catch (error) {
        console.log(error);
        toast.error("Failed to reloading categories.");
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    fetchComplaints();
  }, [take, skip]);
  useEffect(() => {
    setSkip(0);
    fetchComplaints();
  }, [searchCategoryId, searchProfessionId, searchStatus, search]);

  const fetchComplaints = async () => {
    try {
      const token = await auth?.currentUser?.getIdToken();
      const complaints = await axios.get(
        `${backendURL}/admin/complaints?take=${take}&skip=${skip}&searchCategoryId=${searchCategoryId}&searchProfessionId=${searchProfessionId}&searchStatus=${searchStatus}&search=${search}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setComplaints(complaints.data.complaints);
      setTotal(complaints.data.count);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while fetchig complaints");
    }
  };

  return (
    <div className=" mx-auto">
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between mb-4">
        <form className="w-full flex relative">
          <Input
            placeholder="Search..."
            className="w-full "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            variant="secondary"
            className="gap-1  border-0 absolute right-[0]"
          >
            <Search className="h-2 w-2" />
          </Button>
        </form>
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
                All Categories
              </SelectItem>
              {categories &&
                categories?.map((cat) => (
                  <SelectItem
                    key={cat.complaint_cat_id}
                    value={cat.complaint_cat_id.toString()}
                    className="capitalize"
                  >
                    {cat.complaint_cat_name}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>

        <div className="">
          <Select
            id="professions"
            value={searchProfessionId}
            onValueChange={(val) => setSearchProfessionId(val)}
            className="col-span-3 w-full"
            required
          >
            <SelectTrigger className="w-full col-span-3 " required>
              <SelectValue placeholder="All Professions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem key={0} value={0}>
                All Professions
              </SelectItem>
              {professions &&
                professions?.map((prof) => (
                  <SelectItem
                    key={prof.profession_id}
                    value={prof.profession_id.toString()}
                    className="capitalize"
                  >
                    {prof.profession_name.charAt(0).toUpperCase() +
                      prof.profession_name.slice(1)}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>

        <div className="">
          <Select
            id="searchstatus"
            value={searchStatus}
            onValueChange={(val) => setSearchStatus(val)}
            className="col-span-3 w-full"
            required
          >
            <SelectTrigger className="w-full col-span-3 ">
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value=" ">All Status</SelectItem>

              <SelectItem value="DUE">DUE</SelectItem>
              <SelectItem value="PROCESSING">PROCESSING</SelectItem>
              <SelectItem value="COMPLETED">DONE</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="text-gray-600 font-semibold">
                Title
              </TableHead>
              <TableHead className="text-gray-600 font-semibold">
                Category
              </TableHead>
              <TableHead className="text-gray-600 font-semibold">
                Status
              </TableHead>
              <TableHead className="text-gray-600 font-semibold">By</TableHead>
              <TableHead className="text-gray-600 font-semibold">
                Date
              </TableHead>
              <TableHead className="text-gray-600 font-semibold text-right">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {complaints.map((row, idx) => (
              <React.Fragment key={row.complaint_id}>
                <TableRow onClick={(e) => setExpandedRow(row.complaint_id)}>
                  <TableCell className="font-medium text-gray-800  whitespace-normal break-words">
                    {row.complaint_title}
                  </TableCell>
                  <TableCell className="whitespace-normal break-words">
                    <Badge variant="outline" className="text-gray-700">
                      {row.ComplaintCataegory.complaint_cat_name}
                    </Badge>
                    {row?.Buildings?.building_name && (
                      <Badge variant="outline" className="text-gray-700">
                        {row?.Buildings?.building_name}
                      </Badge>
                    )}{" "}
                    <br />
                    {row?.room_no && (
                      <Badge variant="outline" className="text-gray-700 mt-1">
                        Room : {row?.room_no}
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="whitespace-normal break-words">
                    {row.status === "COMPLETED" ? (
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-700"
                      >
                        ✓ Done
                      </Badge>
                    ) : row.status === "PROCESSING" ? (
                      <Badge
                        variant="secondary"
                        className="bg-yellow-100 text-yellow-700"
                      >
                        ⏳ In Process
                      </Badge>
                    ) : (
                      <Badge
                        variant="secondary"
                        className="bg-gray-100 text-gray-700"
                      >
                        ⏺ Due
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="whitespace-normal break-words">
                    {row.User.name} <br />
                    <span className="capitalize">
                      {row.User.Profession.profession_name},{" "}
                      {row.User.Department.dept_shortform},
                    </span>
                    <br />
                    <span>{row.User.email}</span> <br />
                  </TableCell>

                  <TableCell className="text-gray-700 whitespace-normal break-words">
                    {new Date(row.createdAt).toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right whitespace-normal break-words">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="p-1 rounded-md hover:bg-gray-100">
                          <MoreHorizontal className="w-5 h-5 text-gray-600" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-32">
                        <DropdownMenuItem asChild>
                          <Link to={`/admin/resolve/${row.complaint_id}`}>
                            View
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to={`/admin/complaint/${row.complaint_id}`}>
                            Resolve this
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>

                {expandedRow == row.complaint_id && (
                  <TableRow>
                    <TableCell
                      colSpan={6}
                      className="bg-gray-50 p-4  whitespace-normal break-words"
                    >
                      <div className="text-sm text-gray-700">
                        <p>
                          <strong>Your Complaint:</strong>{" "}
                          {row.complaint_description ||
                            "No description provided."}
                        </p>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </div>

      <Pagination className="mt-6">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className={skip == 0 && "pointer-events-none opacity-50"}
              href="#"
              onClick={(e) => setSkip(skip - 1)}
            />
          </PaginationItem>

          <PaginationItem>
            <span className="text-sm text-gray-600">
              Page {skip + 1} of {Math.ceil(total / take)}
            </span>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => setSkip(skip + 1)}
              className={
                skip + 1 > Math.ceil(total / take) - 1 &&
                "pointer-events-none opacity-50"
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
