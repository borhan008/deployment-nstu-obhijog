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

export const Users = () => {
  const [professions, setProfessions] = useState([]);
  const [users, setUsers] = useState([]);
  const [departments, setDepattments] = useState([]);

  const [search, setSearch] = useState("");
  const [searchProfessionId, setSearchProfessionId] = useState(0);
  const [searchDeptId, setSearchDeptId] = useState(null);

  const [take, setTake] = useState(20);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const [searchBtn, setSearchBtn] = useState(0);

  const backendURL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchFirst = async () => {
      try {
        const token = await auth?.currentUser?.getIdToken();

        const profs = await axios.get(`${backendURL}/profession`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const depts = await axios.get(`${backendURL}/departments`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const users = await axios.get(
          `${backendURL}/admin/users?take=${take}&skip=${skip}&search=${search}&searchProfessionId=${searchProfessionId}&searchDeptId=${searchDeptId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProfessions(profs.data.professions);
        setUsers(users.data.users);
        setDepattments(depts.data.departments);

        console.log(users.data.users);
      } catch (error) {
        console.log(error);
        toast.error("Failed to reloading professions.");
      }
    };

    fetchFirst();
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [take, skip]);
  useEffect(() => {
    console.log(search);

    setSkip(0);
    fetchUsers();
  }, [searchDeptId, searchProfessionId, searchBtn]);

  const fetchUsers = async () => {
    try {
      const token = await auth?.currentUser?.getIdToken();
      const users = await axios.get(
        `${backendURL}/admin/users?take=${take}&skip=${skip}&search=${search}&searchProfessionId=${searchProfessionId}&searchDeptId=${searchDeptId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(users.data);
      setUsers(users.data.users);
      setTotal(users.data.count);
    } catch (error) {
      console.log(error);
      toast.error("Failed to reloading users.");
    }
  };

  const handleBlockUnblock = async (uid) => {
    try {
      const token = await auth?.currentUser?.getIdToken();
      await axios.put(
        `${backendURL}/admin/user/block/${uid}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("User blocked/unblocked successfully.");

      setUsers(
        users.map((u) => (u.uid === uid ? { ...u, block: !u.block } : u))
      );
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while blocking the user.");
    }
  };
  const handleUserRole = async (uid) => {
    try {
      const token = await auth?.currentUser?.getIdToken();
      await axios.put(
        `${backendURL}/admin/user/role/${uid}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("User role changed successfully.");

      setUsers(
        users.map((u) =>
          u.uid === uid
            ? { ...u, role: u.role === "ADMIN" ? "USER" : "ADMIN" }
            : u
        )
      );
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while blocking the user.");
    }
  };

  return (
    <div className=" mx-auto">
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between mb-4">
        <form
          className="w-full flex relative"
          onSubmit={(e) => {
            e.preventDefault();
            setSearchBtn(!searchBtn);
          }}
        >
          <Input
            placeholder="Search..."
            className="w-full "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            variant="secondary"
            className="gap-1  border-0 absolute right-[0]"
            type="submit"
          >
            <Search className="h-2 w-2" />
          </Button>
        </form>

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
            value={searchDeptId}
            onValueChange={(val) => setSearchDeptId(val)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a Department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem key={0} value={null}>
                All Departments
              </SelectItem>
              {departments.map((dept) => (
                <SelectItem
                  key={dept.department_id}
                  value={String(dept.department_id)}
                >
                  {dept.dept_full_name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="text-gray-600 font-semibold">
                Details
              </TableHead>
              <TableHead className="text-gray-600 font-semibold">
                Contact
              </TableHead>

              <TableHead className="text-gray-600 font-semibold">
                Role
              </TableHead>
              <TableHead className="text-gray-600 font-semibold">
                Created
              </TableHead>
              <TableHead className="text-gray-600 font-semibold text-right">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users?.map((user) => (
              <TableRow key={user.uid}>
                <TableCell className="text-gray-800">
                  <p className="font-medium">
                    {user.name}{" "}
                    {user.block && (
                      <Badge
                        variant="outline"
                        className="bg-red-900 text-white mb-1"
                      >
                        Blocked
                      </Badge>
                    )}
                  </p>
                  <p className="capitalize text-light">
                    {user.Profession.profession_name}{" "}
                    {user.roll && <>, {user.roll}</>}
                    {user.session && <>, {user.session}</>}
                  </p>
                  <p>{user.Department.dept_full_name}</p>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="text-gray-700 block mb-1">
                    {user.email}
                  </Badge>
                  <Badge variant="outline" className="text-gray-700">
                    {user.mobile}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={`${
                      user.role != "ADMIN"
                        ? "bg-gray-50 text-gray-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {user.role}
                  </Badge>
                </TableCell>

                <TableCell className="text-gray-700">
                  {new Date(user.createdAt).toLocaleString()}
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="p-1 rounded-md hover:bg-gray-100">
                        <MoreHorizontal className="w-5 h-5 text-gray-600" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-32">
                      <DropdownMenuItem
                        onClick={() => handleBlockUnblock(user.uid)}
                      >
                        {!user.block ? "Block" : "Unblock"}
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleUserRole(user.uid)}
                      >
                        {user.role === "ADMIN" ? "Make User" : "Make Admin"}
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
