import Dashboard from "@/components/Dashboard/Dashboard"
import DoctorDashBoard from "@/components/Dashboard/DoctorDashBoard";
import PatientsDashBoard from "@/components/Dashboard/PatientsDashBoard";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function page() {
  const session = await getServerSession(authOptions);
  const user = session?.user
  const role = user?.role

  if (role === "USER") {
    return (
      <div key="user">
        <p>The User Role is {user?.role}</p>
        <PatientsDashBoard />
      </div>
    )
  }
  if (role === "DOCTOR") {
    return (
      <div key="doctor">
        <p>The User Role is {user?.role}</p>
        <DoctorDashBoard />
      </div>
    )
  }
  return (
    <div key="default">
      <p>The User Role is {user?.role}</p>
      <Dashboard />
    </div>
  )
}


