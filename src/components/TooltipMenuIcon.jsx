'use client';
import React from 'react';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';

import Link from 'next/link';
export const TooltipMenuIcon = (props) => {
	const { path, children, name } = props;
    return (
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild>
						<Link
							href={path}
							className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
						>
							{children}
							<span className="sr-only">{name}</span>
						</Link>
					</TooltipTrigger>
					<TooltipContent side="right">{name.charAt(0).toUpperCase()+name.slice(1)}</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		);
};
