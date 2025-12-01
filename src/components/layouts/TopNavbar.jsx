import { useAuth } from "@/context/AuthContext";
import { Menu } from "lucide-react";

const TopNavbar = ({ onMenuToggle }) => {
  const { user, logout } = useAuth();

  return (
    <div className="w-full bg-gray-800 text-white h-14 px-4 flex items-center justify-between shadow fixed top-0 left-0 z-20">
      
      {/* Mobile Hamburger */}
      <button onClick={onMenuToggle} className="md:hidden">
        <Menu size={26} />
      </button>

      <h1 className="text-xl font-semibold">Splash Mount</h1>

      <div className="md:flex items-letf gap-4">
        <span className="text-gray-300">Role: {user?.role}</span>

        <button
          onClick={logout}
          className="bg-red-600 ml-1 px-4 py-1 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default TopNavbar;
