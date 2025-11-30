import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { getTables, lockTable } from "@/api/tableApi";
//import { io } from "socket.io-client";

export default function WaiterTables() {
 
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Tables</h1>

    </DashboardLayout>
  );
}
