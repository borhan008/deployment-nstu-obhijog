import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { auth } from "../../../../firebase";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
export default function Notification() {
  const [take, setTake] = useState(10);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications();
  }, [take, skip]);

  const fetchNotifications = async () => {
    try {
      const token = await auth?.currentUser?.getIdToken();
      const ntfc = await axios.get(
        `${backendURL}/notifications?take=${take}&skip=${skip}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setNotifications(ntfc.data.notifications);
      setTotal(ntfc.data.count);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen  py-8 px-4">
      <div className="max-w-2xl mx-auto space-y-4 flex flex-col gap-1">
        {notifications.map((notification) => (
          <Link to={`/resolve/${notification.complaint_id}`}>
            <Card
              key={notification.id}
              className={`rounded-2xl shadow-sm hover:shadow-md transition-shadow bg-background  p-4 ${
                !notification.seen && "bg-gray-200"
              }`}
            >
              <CardContent className="flex items-center justify-between p-0">
                <p className="text-sm text-gray-700">
                  Got new update on complaint#{notification.complaint_id}
                </p>
                <Badge
                  variant="secondary"
                  className="text-xs whitespace-nowrap"
                >
                  {new Date(notification.updatedAt).toLocaleDateString() +
                    " " +
                    new Date(notification.updatedAt).toLocaleTimeString()}
                </Badge>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      <div>
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
    </div>
  );
}
