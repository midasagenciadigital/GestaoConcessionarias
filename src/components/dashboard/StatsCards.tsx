import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Stat {
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
}

interface StatsCardsProps {
  stats: Stat[];
}

const StatsCards = ({ stats }: StatsCardsProps) => {
  return (
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
  );
};

export default StatsCards;