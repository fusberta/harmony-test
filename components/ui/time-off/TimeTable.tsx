import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { ChevronDown } from "lucide-react";

const TimeTable: React.FC = () => {
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  const toggleSort = () => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  const rows = [
    { date: "23/05/2024", description: "Accrual for 23/05/2024 to 20/11/2024", used: -6, earned: 3.0, balance: 3.0 },
    { date: "23/05/2024", description: "Accrual for 23/05/2024 to 20/11/2024", used: null, earned: 3.0, balance: 3.0 },
    { date: "23/05/2024", description: "Accrual for 23/05/2024 to 20/11/2024", used: -6, earned: 3.0, balance: 3.0 },
    { date: "23/05/2024", description: "Accrual for 23/05/2024 to 20/11/2024", used: null, earned: 3.0, balance: 3.0 },
    { date: "23/05/2024", description: "Accrual for 23/05/2024 to 20/11/2024", used: null, earned: 3.0, balance: 3.0 },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse text-left">
        <thead>
          <tr className="bg-blue-100 text-sm">
            <th
              className="p-3 cursor-pointer"
              onClick={toggleSort}
            >
              Date{" "}
              <ChevronDown className={`inline-block ml-1 transform ${sortDirection === "asc" ? "rotate-180" : ""}`} />
            </th>
            <th className="p-3">Description</th>
            <th className="p-3">Used Days (-)</th>
            <th className="p-3">Earned Days (+)</th>
            <th className="p-3">Balance</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className={`hover:bg-blue-50 ${index % 2 === 0 ? "bg-gray-50" : ""}`}>
              <td className="p-3">{row.date}</td>
              <td className="p-3">{row.description}</td>
              <td className="p-3">{row.used !== null ? row.used : "-"}</td>
              <td className="p-3">{row.earned}</td>
              <td className="p-3">{row.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Separator className="my-4" />
    </div>
  );
};

export default TimeTable;
