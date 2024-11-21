import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts";

const data = [
  { month: "Jan", leadsRecebidos: 0, propostasEnviadas: 0, propostasEfetivadas: 0 },
  { month: "Fev", leadsRecebidos: 0, propostasEnviadas: 0, propostasEfetivadas: 0 },
  { month: "Mar", leadsRecebidos: 0, propostasEnviadas: 0, propostasEfetivadas: 0 },
  { month: "Abr", leadsRecebidos: 0, propostasEnviadas: 0, propostasEfetivadas: 0 },
  { month: "Mai", leadsRecebidos: 0, propostasEnviadas: 0, propostasEfetivadas: 0 },
  { month: "Jun", leadsRecebidos: 0, propostasEnviadas: 0, propostasEfetivadas: 0 },
];

export function ProposalsChart() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Acompanhamento de Propostas</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>
            <XAxis
              dataKey="month"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="leadsRecebidos"
              name="Leads Recebidos"
              stroke="#cc0000"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="propostasEnviadas"
              name="Propostas Enviadas"
              stroke="#0ea5e9"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="propostasEfetivadas"
              name="Propostas Efetivadas"
              stroke="#22c55e"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}