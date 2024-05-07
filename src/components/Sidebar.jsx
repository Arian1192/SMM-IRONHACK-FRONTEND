import React from 'react'
import Link from 'next/link'
import { Package2, Home, Users2, CalendarRange } from 'lucide-react'
import { TooltipMenuIcon } from '@/components/TooltipMenuIcon'
import { MenuSettingsDropDown } from '@/components/MenuSettingsDropDown'
const Sidebar = () => {
  return (
		<aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
			<nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
				<Link
					href="#"
					className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
				>
					<Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
					<span className="sr-only">Acme Inc</span>
				</Link>
				<TooltipMenuIcon path={'/dashboard'} name="dashboard">
					<Home className="h-5 w-5" />
				</TooltipMenuIcon>
				<TooltipMenuIcon path={'/appointments'} name="appointments">
					<CalendarRange className="h-5 w-5" />
				</TooltipMenuIcon>
				<TooltipMenuIcon path={'/users'} name="users">
					<Users2 className="h-5 w-5" />
				</TooltipMenuIcon>
			</nav>
			<nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
				<MenuSettingsDropDown />
			</nav>
		</aside>
	);
}

export default Sidebar