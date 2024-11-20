import { Card } from "@/components/ui/card";
import { Users, Bike, FileText, DollarSign } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import StatsCards from "@/components/dashboard/StatsCards";
import RecentProposalsTable from "@/components/dashboard/RecentProposalsTable";
import RecentLeadsTable from "@/components/dashboard/RecentLeadsTable";

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

const recentProposals = [
  {
    id: "1",
    client: "João Silva",
    model: "Honda CB 500X",
    value: "R$ 42.990,00",
    status: "Enviada",
    date: "2024-02-20",
  },
  {
    id: "2",
    client: "Maria Santos",
    model: "Yamaha MT-07",
    value: "R$ 39.990,00",
    status: "Em análise",
    date: "2024-02-19",
  },
  {
    id: "3",
    client: "Pedro Costa",
    model: "BMW G 310 GS",
    value: "R$ 37.500,00",
    status: "Aceita",
    date: "2024-02-18",
  },
];

const recentLeads = [
  {
    id: "1",
    name: "Ana Oliveira",
    interest: "Honda CB 650R",
    contact: "(11) 98765-4321",
    source: "Website",
    date: "2024-02-20",
  },
  {
    id: "2",
    name: "Carlos Mendes",
    interest: "Kawasaki Z900",
    contact: "(11) 91234-5678",
    source: "Instagram",
    date: "2024-02-19",
  },
  {
    id: "3",
    name: "Lucia Ferreira",
    interest: "Triumph Street Triple",
    contact: "(11) 94567-8901",
    source: "Facebook",
    date: "2024-02-18",
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

      <StatsCards stats={stats} />

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-lg font-medium mb-4">Últimas Propostas</h2>
          <RecentProposalsTable proposals={recentProposals} />
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-medium mb-4">Últimos Leads</h2>
          <RecentLeadsTable leads={recentLeads} />
        </Card>
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