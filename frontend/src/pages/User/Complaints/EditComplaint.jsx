import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { auth } from "../../../../firebase";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom";

export default function EditComplaint() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState();
  const [categories, setCategories] = useState([]);
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const [disable, setDisable] = useState(false);
  const { complaint_id } = useParams();
  const navigate = useNavigate();
  const [buildingId, setBuildingId] = useState("");
  const [room, setRoom] = useState("");
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    const fetchComplaintData = async () => {
      try {
        const token = await auth?.currentUser?.getIdToken();
        const response = await axios.get(`${backendURL}/complaint/category`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setCategories(response.data.categories);

        const complaint = await axios.get(
          `${backendURL}/complaint/${complaint_id}`,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
        setTitle(complaint.data.complaint.complaint_title);
        setCategory(complaint.data.complaint.complaint_cat_id);
        setDescription(complaint.data.complaint.complaint_description);
        if (complaint.data.complaint?.Buildings?.building_name) {
          setBuildingId(
            String(complaint.data.complaint?.Buildings?.building_id)
          );
        }
        setRoom(complaint.data.complaint?.room_no);
      } catch (error) {
        console.log(error);
        toast.error("Failed to reloading categories or complaints.");
        navigate("/complaint/");
      }
    };
    fetchBuildings();

    fetchComplaintData();
  }, []);
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisable(true);
    try {
      const token = await auth?.currentUser?.getIdToken();

      const res = await axios.put(
        `${backendURL}/complaint/edit`,
        {
          complaint_cat_id: category,
          complaint_id: complaint_id,
          complaint_title: title,
          complaint_description: description,
          building_id: buildingId,
          room: room,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Edited Successfully.");
      setCategory("");
      setTitle("");
      setDescription("");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while editiing complaints.", {
        description:
          error?.response?.data?.message || "Server internal problem.",
        class: "bg-white text-black",
      });
    } finally {
      setDisable(false);
    }
  };

  return (
    <div className="mx-auto p-6 md:p-8 bg-white/80 rounded-2xl shadow-lg backdrop-blur-xl border">
      <h2 className="text-2xl font-bold text-gray-800">Edit a Complaint</h2>
      <p className="text-sm mb-6">Please provide clear details of the issue.</p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4 space-y-1">
          <Label htmlFor="title">Complaint Title</Label>
          <Input
            id="title"
            placeholder="Enter a short title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-4 space-y-1">
          <Label htmlFor="category">Category</Label>
          <Select
            value={category}
            onValueChange={(val) => setCategory(val)}
            required
          >
            <SelectTrigger className="w-full">
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
        <div className="flex justify-between">
          <div className="mb-4 space-y-1 w-full mr-2">
            <Label htmlFor="category">Building</Label>
            <Select
              value={buildingId}
              onValueChange={(val) => setBuildingId(val)}
              required
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a Building" />
              </SelectTrigger>
              <SelectContent>
                {buildings &&
                  buildings?.map((cat) => (
                    <SelectItem
                      key={cat.building_id}
                      value={cat.building_id.toString()}
                    >
                      {cat.building_name}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>
          <div className="mb-4 space-y-1">
            <Label htmlFor="title">Room No.</Label>
            <Input
              id="title"
              placeholder="Enter a short title"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-4 space-y-1">
          <Label htmlFor="description">Details</Label>
          <Textarea
            id="description"
            placeholder="Describe the issue in detail"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
            required
          />
        </div>

        <div className="d-block overflow-hidden">
          <Button type="submit" className="float-right" disabled={disable}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
