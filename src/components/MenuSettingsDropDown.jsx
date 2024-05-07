"use client";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { TooltipMenuIcon } from './TooltipMenuIcon';
import { Settings } from 'lucide-react';
import { useRouter } from 'next/navigation';

export const MenuSettingsDropDown = () => {

    const router = useRouter();
    const handleLogout = () => {    
        localStorage.removeItem('token');
        router.push('/login');
    };

	return (
		<DropdownMenu >
			<DropdownMenuTrigger>
				<TooltipMenuIcon path={'/settings'} name="settings">
					<Settings className="h-5 w-5" />
				</TooltipMenuIcon>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>Settings</DropdownMenuLabel>
				<DropdownMenuItem>Profile</DropdownMenuItem>
				<DropdownMenuItem>Account</DropdownMenuItem>
				<DropdownMenuSeparator />
                <DropdownMenuItem>
                    <button onClick={handleLogout}>Logout</button>
                </DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
