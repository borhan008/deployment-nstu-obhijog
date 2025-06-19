import React from "react";

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
import { useAuth } from "../Context/AuthProvider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { auth } from "../../../../firebase";
import { Link } from "react-router-dom";

const data = [
  {
    header: "Cover page",
    type: "Cover page",
    status: "In Process",
    target: 18,
    limit: 5,
    reviewer: "Eddie Lake",
  },
  {
    header: "Table of contents",
    type: "Table of contents",
    status: "Done",
    target: 29,
    limit: 24,
    reviewer: "Eddie Lake",
  },
  {
    header: "Executive summary",
    type: "Narrative",
    status: "Done",
    target: 10,
    limit: 13,
    reviewer: "Eddie Lake",
  },
  {
    header: "Technical approach",
    type: "Narrative",
    status: "Done",
    target: 27,
    limit: 23,
    reviewer: "Jamik Tashpulatov",
  },
  {
    header: "Design",
    type: "Narrative",
    status: "In Process",
    target: 2,
    limit: 16,
    reviewer: "Jamik Tashpulatov",
  },
  {
    header: "Capabilities",
    type: "Narrative",
    status: "In Process",
    target: 20,
    limit: 8,
    reviewer: "Jamik Tashpulatov",
  },
  {
    header: "Integration with existing systems",
    type: "Narrative",
    status: "In Process",
    target: 19,
    limit: 21,
    reviewer: "Jamik Tashpulatov",
  },
];

export default function ViewComplaints() {
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const { user } = useAuth();
  const [complaints, setComplaints] = useState([]);
  const [take, setTake] = useState(20);
  const [skip, setSkip] = useState(0);
  const [search, setSearch] = useState("");
  const [total, setTotal] = useState(0);
  const [expandedRow, setExpandedRow] = useState(-1);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        setTotal(0);
        setSkip(0);
        const token = await auth?.currentUser?.getIdToken();
        const response = await axios.get(`${backendURL}/complaint`, {
          params: { take, skip: skip * take, search },
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        setTotal(response.data.count);
        setComplaints(response.data.complaints);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong while fetching the complaints data.");
      }
    };
    fetchComplaints();
  }, [search]);
  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const token = await auth?.currentUser?.getIdToken();
        const response = await axios.get(`${backendURL}/complaint`, {
          params: { take, skip: skip * take, search },
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        setTotal(response.data.count);
        setComplaints(response.data.complaints);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong while fetching the complaints data.");
      }
    };
    fetchComplaints();
  }, [take, skip]);

  const handleMarkAsDone = async (complaint_id) => {
    try {
      const token = await auth?.currentUser?.getIdToken();
      await axios.put(
        `${backendURL}/complaint/done/${complaint_id}`,
        {},
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      setComplaints(
        complaints.map((f) =>
          f.complaint_id === complaint_id ? { ...f, status: "COMPLETED" } : f
        )
      );
    } catch (error) {}
  };

  return (
    <div className=" mx-auto">
      <div className="flex items-center justify-between mb-4">
        <Input
          placeholder="Search ..."
          className="w-full max-w-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button className="ml-4" asChild>
          <Link to="/complaint/new">
            <Plus className="w-4 h-4 mr-2" />
            অভিযোগ করুন
          </Link>
        </Button>
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
              <TableHead className="text-gray-600 font-semibold">
                Last Updated
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
                  <TableCell className="font-medium text-gray-800 whitespace-normal break-words">
                    {row.complaint_title}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className="text-gray-700 whitespace-normal break-words"
                    >
                      {row.ComplaintCataegory.complaint_cat_name}
                    </Badge>
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
                  <TableCell className="text-gray-700 whitespace-normal break-words">
                    {new Date(row.updatedAt).toLocaleString()}
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
                          <Link to={`/resolve/${row.complaint_id}`}>
                            View Resolve
                          </Link>
                        </DropdownMenuItem>
                        {row.status === "DUE" && (
                          <DropdownMenuItem asChild>
                            <Link to={`/complaint/edit/${row.complaint_id}`}>
                              Edit
                            </Link>
                          </DropdownMenuItem>
                        )}

                        {row.status !== "COMPLETED" && (
                          <DropdownMenuItem
                            onClick={() => handleMarkAsDone(row.complaint_id)}
                          >
                            Mark As Done
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>

                {expandedRow == row.complaint_id && (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="bg-gray-50 p-4 whitespace-normal break-words"
                    >
                      <div className="text-sm text-gray-700">
                        <p>
                          {" "}
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
}
