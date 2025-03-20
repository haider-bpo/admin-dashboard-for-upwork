import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function SearchInput() {
  return (
    <div className="md:flex items-center hidden gap-2 border rounded-md p-1">
      <Search className="h-4 w-4 text-muted-foreground ml-2" />
      <Input
        placeholder="Search"
        className="h-8 focus-visible:ring-0 focus-visible:ring-offset-0 border-0"
      />
    </div>
  );
}
