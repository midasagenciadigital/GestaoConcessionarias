import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Lead {
  id: string;
  name: string;
  interest: string;
  contact: string;
  source: string;
  date: string;
}

interface RecentLeadsTableProps {
  leads: Lead[];
}

const RecentLeadsTable = ({ leads }: RecentLeadsTableProps) => {
  const navigate = useNavigate();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Interesse</TableHead>
          <TableHead>Contato</TableHead>
          <TableHead>Origem</TableHead>
          <TableHead>Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {leads.map((lead) => (
          <TableRow key={lead.id}>
            <TableCell>{lead.name}</TableCell>
            <TableCell>{lead.interest}</TableCell>
            <TableCell>{lead.contact}</TableCell>
            <TableCell>{lead.source}</TableCell>
            <TableCell>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate(`/leads/${lead.id}`)}
              >
                <Eye className="h-4 w-4 mr-1" />
                Visualizar
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RecentLeadsTable;