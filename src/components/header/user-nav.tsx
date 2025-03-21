import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, Settings, LogOut } from "lucide-react";

export function UserNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="relative flex items-center gap-3 cursor-pointer px-4 rounded-full border-2 border-solid border-gradient-to-b from-cyan-500/50 to-teal-900/50">
          <div className="text-center hidden sm:block ">
            <h3 className="text-center font-bold">Admin Name</h3>
            <p className="text-sm text-muted-foreground">@adminname</p>
          </div>
          <div className="w-14 h-14 hidden md:block"></div> 
          <Avatar className="absolute right-[-30] md:right-[-20] h-24 w-24">
            <AvatarImage
              src="/icons/user-avatar.png"
              alt="Admin User"
            />
            <AvatarFallback className="bg-[#4c2a85] text-white">
              AU
            </AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Admin Name</p>
            <p className="text-xs leading-none text-muted-foreground">
              @adminname
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
