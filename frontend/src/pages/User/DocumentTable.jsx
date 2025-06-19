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
import { useAuth } from "./Context/AuthProvider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

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

export default function DocumentTable() {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className=" mx-auto">
      <div className="flex items-center justify-between mb-4">
        <Input
          placeholder="Search departments..."
          className="w-full max-w-sm"
        />
        <Button className="ml-4" onClick={() => alert("Add new department")}>
          <Plus className="w-4 h-4 mr-2" />
          Add New
        </Button>
      </div>

      <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="text-gray-600 font-semibold">
                Header
              </TableHead>
              <TableHead className="text-gray-600 font-semibold">
                Section Type
              </TableHead>
              <TableHead className="text-gray-600 font-semibold">
                Status
              </TableHead>
              <TableHead className="text-gray-600 font-semibold">
                Target
              </TableHead>
              <TableHead className="text-gray-600 font-semibold">
                Limit
              </TableHead>
              <TableHead className="text-gray-600 font-semibold">
                Reviewer
              </TableHead>
              <TableHead className="text-gray-600 font-semibold text-right">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell className="font-medium text-gray-800">
                  {row.header}
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="text-gray-700">
                    {row.type}
                  </Badge>
                </TableCell>
                <TableCell>
                  {row.status === "Done" ? (
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-700"
                    >
                      ✓ Done
                    </Badge>
                  ) : (
                    <Badge
                      variant="secondary"
                      className="bg-yellow-100 text-yellow-700"
                    >
                      ⏳ In Process
                    </Badge>
                  )}
                </TableCell>
                <TableCell className="text-gray-700">{row.target}</TableCell>
                <TableCell className="text-gray-700">{row.limit}</TableCell>
                <TableCell className="text-gray-700">{row.reviewer}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="p-1 rounded-md hover:bg-gray-100">
                        <MoreHorizontal className="w-5 h-5 text-gray-600" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-32">
                      <DropdownMenuItem
                        onClick={() => alert(`Edit ${row.header}`)}
                      >
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => alert(`Delete ${row.header}`)}
                      >
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Pagination className="mt-6">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <span className="text-sm text-gray-600">Page 1 of 3</span>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
