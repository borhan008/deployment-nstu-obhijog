import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";
import {
  Users,
  Briefcase,
  Folder,
  Building2,
  BadgeCheck,
  BellRing,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { auth } from "../../../../firebase";

export default function AdminHome() {
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const [stats, setStats] = useState([]);
  // const categoryData = [
  //   { name: "Electrical", count: 30 },
  //   { name: "Cleaning", count: 20 },
  //   { name: "AC", count: 10 },
  //   { name: "Computer", count: 15 },
  //   { name: "Furniture", count: 5 },
  // ];

  const [statusData, setStatusData] = useState([]);
  const [categoryData, setCategoryData] = useState([
    {
      name: "DUE",
      value: "0",
    },
    {
      name: "PROCESSING",
      value: "0",
    },
    {
      name: "COMPLETED",
      value: "0",
    },
  ]);
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = await auth?.currentUser?.getIdToken();
        const statDetails = await axios.get(`${backendURL}/admin/stats`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setStats(statDetails.data);
        setCategoryData(
          statDetails.data.countByCateagories.map((cat) => ({
            name: cat.complaint_cat_name,
            count: cat?._count?.complaints || 0,
          }))
        );
        setStatusData(
          statDetails.data.complaintsCount.map((cat) => ({
            name: cat.status,
            value: cat?._count?._all || 0,
          })),
          statusData
        );
        console.log(statDetails.data);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong while fetching the data.");
      }
    };

    fetchStats();
  }, []);

  const COLORS = ["#FF6B6B", "#FFD93D", "#6BCB77"]; // Red, Yellow, Green
  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-5 w-5 text-gray-500" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats.userCount}</p>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Employees
            </CardTitle>
            <Briefcase className="h-5 w-5 text-gray-500" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats?.employeeCount}</p>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Complaints
            </CardTitle>
            <Folder className="h-5 w-5 text-gray-500" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">
              {" "}
              {stats?.complaintsCount?.reduce(
                (acc, c) => acc + c._count._all,
                0
              )}
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Departments
            </CardTitle>
            <Building2 className="h-5 w-5 text-gray-500" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">5</p>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Professions
            </CardTitle>
            <BadgeCheck className="h-5 w-5 text-gray-500" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats?.professionCount}</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-6 md:grid-cols-2 mt-4">
        {/* Bar Chart for Category-wise Complaints */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Complaints by Category</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryData}>
                <XAxis dataKey="name" stroke="#888888" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#4F46E5" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Pie Chart for Complaint Status */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Complaint Status Overview</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {statusData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        entry.name === "COMPLETED"
                          ? "#16a34a"
                          : entry.name === "DUE"
                          ? "#f59e0b"
                          : "#3b82f6"
                      }
                    />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
