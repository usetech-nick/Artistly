import React from "react";
import {
  Users,
  CheckCircle,
  IndianRupee,
  MapPin,
  MoreVertical,
} from "lucide-react";
import artists from "@/lib/data/artists.json";
import ArtistTable from "@/components/ArtistTable";

const submissions = artists;

const DashboardPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Manager Dashboard</h1>
      <ArtistTable data={submissions} />
    </div>
  );
};

export default DashboardPage;
