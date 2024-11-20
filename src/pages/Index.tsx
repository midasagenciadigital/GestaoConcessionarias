import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ArrowUpRight, Users, Bike, FileText, DollarSign } from "lucide-react";

const data = [
  { name: "Jan", value: 1200000 },
  { name: "Fev", value: 1960560 },
  { name: "Mar", value: 1500000 },
  { name: "Abr", value: 1750000 },
  { name: "Mai", value: 2000000 },
  { name: "Jun", value: 1850000 },
];

const stats = [
  {
    title: "Total de Vendas",
    value: "R$ 1.960.560,20",
    change: "+6.6%",
    icon: DollarSign,
  },
  {
    title: "Clientes Novos",
    value: "47",
    change: "+12.5%",
    icon: Users,
  },
  {
    title: "Motos Vendidas",
    value: "85",
    change: "+18.2%",
    icon: Bike,
  },
  {
    title: "Propostas Ativas",
    value: "31",
    change: "+4.3%",
    icon: FileText,
  },
];

const Index = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Bem-vindo ao seu painel de controle
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="p-6">
              <div className="flex items-center justify-between">
                <Icon className="h-5 w-5 text-gray-600" />
                <span className="text-green-600 bg-green-50 px-2 py-1 rounded-full text-xs font-medium flex items-center">
                  {stat.change}
                  <ArrowUpRight className="h-3 w-3 ml-1" />
                </span>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.title}</p>
              </div>
            </Card>
          );
        })}
      </div>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-medium">Vendas nos últimos meses</h2>
            <p className="text-sm text-gray-600">
              Acompanhamento mensal de vendas
            </p>
          </div>
        </div>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#cc0000"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};

export default Index;