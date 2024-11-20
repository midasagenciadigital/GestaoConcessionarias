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
    <div className="overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[120px] md:w-auto">Cliente</TableHead>
            <TableHead className="min-w-[120px]">Modelo</TableHead>
            <TableHead className="hidden md:table-cell">Valor</TableHead>
            <TableHead className="hidden md:table-cell">Status</TableHead>
            <TableHead className="w-[100px]">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {proposals.map((proposal) => (
            <TableRow key={proposal.id}>
              <TableCell className="font-medium">{proposal.client}</TableCell>
              <TableCell>{proposal.model}</TableCell>
              <TableCell className="hidden md:table-cell">{proposal.value}</TableCell>
              <TableCell className="hidden md:table-cell">{proposal.status}</TableCell>
              <TableCell>
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => navigate(`/propostas/${proposal.id}`)}
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

export default RecentProposalsTable;