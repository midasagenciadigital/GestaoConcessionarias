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

interface Proposal {
  id: string;
  client: string;
  model: string;
  value: string;
  status: string;
  date: string;
}

interface RecentProposalsTableProps {
  proposals: Proposal[];
}

const RecentProposalsTable = ({ proposals }: RecentProposalsTableProps) => {
  const navigate = useNavigate();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Cliente</TableHead>
          <TableHead>Modelo</TableHead>
          <TableHead>Valor</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {proposals.map((proposal) => (
          <TableRow key={proposal.id}>
            <TableCell>{proposal.client}</TableCell>
            <TableCell>{proposal.model}</TableCell>
            <TableCell>{proposal.value}</TableCell>
            <TableCell>{proposal.status}</TableCell>
            <TableCell>
              <Button
                variant="default"
                size="sm"
                onClick={() => navigate(`/propostas/${proposal.id}`)}
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

export default RecentProposalsTable;