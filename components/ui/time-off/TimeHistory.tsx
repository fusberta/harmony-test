import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { FolderClock } from "lucide-react";
import TimeTable from "./TimeTable";

const TimeOffHistory: React.FC = () => {
    return (
        <div>
            <div className="mb-4">
                <div className="flex items-center space-x-3">
                    <FolderClock className="w-5 h-5" />
                    <h3 className="text-md font-medium text-sky-900">History</h3>
                </div>
                <div className="flex items-center justify-between mt-4 max-[500px]:flex-col max-[500px]:items-start max-[500px]:space-y-2">
                    <div className="flex space-x-4">
                        <Select>
                            <SelectTrigger className="w-44">
                                <SelectValue placeholder="Sick" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="sick">Sick</SelectItem>
                                <SelectItem value="annual-leave">Annual Leave</SelectItem>
                                <SelectItem value="comp-lieu">Comp/in Lieu</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger className="w-24">
                                <SelectValue placeholder="All" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All</SelectItem>
                                <SelectItem value="used">Used</SelectItem>
                                <SelectItem value="earned">Earned</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Select>
                        <SelectTrigger className="w-36">
                            <SelectValue placeholder="Balance History" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All</SelectItem>
                            <SelectItem value="used">Used</SelectItem>
                            <SelectItem value="earned">Earned</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <TimeTable />
        </div>
    );
};

export default TimeOffHistory;
