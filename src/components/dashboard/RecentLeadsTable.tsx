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
    <div className="overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[120px] md:w-auto">Nome</TableHead>
            <TableHead className="min-w-[120px]">Interesse</TableHead>
            <TableHead className="hidden md:table-cell">Contato</TableHead>
            <TableHead className="hidden md:table-cell">Origem</TableHead>
            <TableHead className="w-[100px]">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leads.map((lead) => (
            <TableRow key={lead.id}>
              <TableCell className="font-medium">{lead.name}</TableCell>
              <TableCell>{lead.interest}</TableCell>
              <TableCell className="hidden md:table-cell">{lead.contact}</TableCell>
              <TableCell className="hidden md:table-cell">{lead.source}</TableCell>
              <TableCell>
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => navigate(`/leads/${lead.id}`)}
                  className="whitespace-nowrap"
                >
                  <Eye className="h-4 w-4 mr-1" />
                  <span className="hidden sm:inline">Visualizar</span>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RecentLeadsTable;