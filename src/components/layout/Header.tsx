import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="h-16 border-b border-gray-200 bg-white flex items-center justify-between px-6">
      <div className="flex items-center flex-1">
        <div className="w-96">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Buscar..."
              className="pl-8 bg-gray-50 border-0"
            />
          </div>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="icon"
          className="relative"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-primary rounded-full" />
        </Button>
        
        <div className="flex items-center space-x-4">
          <div className="text-sm text-right">
            <p className="font-medium">Anderson Silva</p>
            <p className="text-gray-500">Gerente de Vendas</p>
          </div>
          <img
            src="/placeholder.svg"
            alt="Avatar"
            className="h-8 w-8 rounded-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;