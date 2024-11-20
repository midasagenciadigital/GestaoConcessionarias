import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Bike,
  Users,
  UserCircle,
  FileText,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: Bike, label: "Motos", path: "/motos" },
  { icon: Users, label: "Vendedores", path: "/vendedores" },
  { icon: UserCircle, label: "Clientes", path: "/clientes" },
  { icon: FileText, label: "Propostas", path: "/propostas" },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      <div className="p-6">
        <h1 className="text-xl font-bold text-primary">GESTÃO DE CONCESSIONÁRIAS</h1>
      </div>
      
      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                isActive
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              <Icon className="w-5 h-5 mr-3" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <Link
          to="/settings"
          className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100"
        >
          <Settings className="w-5 h-5 mr-3" />
          Configurações
        </Link>
        <button className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 w-full">
          <LogOut className="w-5 h-5 mr-3" />
          Sair
        </button>
      </div>
    </div>
  );
};

export default Sidebar;