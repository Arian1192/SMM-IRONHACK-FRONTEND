'use client';
import React from 'react';
import { PinContainer } from '../components/ui/3d-pin';

export const AnimatedCardUser = ({ name, email }) => {
	return (
		<div className="h-[20rem] w-full flex items-center justify-center ">
			<PinContainer name={name} email={email}>
				<div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[15rem] ">
					<h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100 truncate">
						{name}
					</h3>
					<div className="text-base !m-0 !p-0 font-normal">
						<span className="text-slate-500 ">{email}</span>
					</div>
					<div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-green-500 via-purple-500 to-blue-500" />
				</div>
			</PinContainer>
		</div>
	);
};
