import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"
import { useState } from "react"


  export default function Forms() {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
      bio: "",
      role: "",
      agree: false,
      gender: "",
      isPublic: false,
    });
  
    return (
      <div className=" mx-auto p-6 md:p-8 bg-white/80 rounded-2xl shadow-lg backdrop-blur-xl border">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Form Elements</h2>
  
        {/* Name */}
        <div className="mb-4 space-y-1">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" />
        </div>
  
        {/* Email */}
        <div className="mb-4 space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Enter your email" />
        </div>
  
        {/* Password */}
        <div className="mb-4 space-y-1">
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" placeholder="Enter your password" />
        </div>
  
        {/* Bio */}
        <div className="mb-4 space-y-1">
          <Label htmlFor="bio">Bio</Label>
          <Textarea id="bio" placeholder="Tell us about yourself" />
        </div>
  
        {/* Role Dropdown */}
        <div className="mb-4 space-y-1">
          <Label>Role</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="editor">Editor</SelectItem>
              <SelectItem value="viewer">Viewer</SelectItem>
            </SelectContent>
          </Select>
        </div>
  
        {/* Radio Buttons */}
        <div className="mb-4 space-y-1">
          <Label>Gender</Label>
          <RadioGroup defaultValue="male" className="flex gap-6 mt-1">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="male" id="r1" />
              <Label htmlFor="r1">Male</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="female" id="r2" />
              <Label htmlFor="r2">Female</Label>
            </div>
          </RadioGroup>
        </div>
  
        {/* Checkbox */}
        <div className="mb-4 flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree" className="text-sm">I agree to terms & conditions</Label>
        </div>
  
        {/* Switch */}
        <div className="mb-4 flex items-center justify-between">
          <Label htmlFor="public-profile">Public Profile</Label>
          <Switch id="public-profile" />
        </div>
  
        {/* File Upload */}
        <div className="mb-4 space-y-1">
          <Label htmlFor="file">Upload File</Label>
          <Input type="file" id="file" />
        </div>
  
        {/* Submit Button */}
        <div className="pt-4">
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </div>
      </div>
    );
  }
  