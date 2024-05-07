'use client';
import Sidebar from '@/components/Sidebar';
import { useQuery } from '@tanstack/react-query';
import { getAllUsers } from '../../api/api.js';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';

export function Page() {
	const {
		data: users,
		isLoading,
	} = useQuery({
		queryKey: ['appointments'],
		queryFn: getAllUsers,
	});

	return (
		<div>
			<Sidebar />
			<div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
				<main className="w-100% p-5 m-5 border rounded-md">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="w-[50px]">Id</TableHead>
								<TableHead>Name</TableHead>
								<TableHead className="w-16">Surname</TableHead>
								<TableHead className="text-left">Email</TableHead>
								<TableHead className="text-left">Roles</TableHead>
								<TableHead className="text-center ">Permisions</TableHead>
								<TableHead className="text-left">accountNoLocked</TableHead>
								<TableHead className="text-left">Enabled</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{users ? (
								users?.map((user) => {
									return (
										<TableRow key={user.id}>
											<TableCell>{user.id}</TableCell>
											<TableCell>{user.name}</TableCell>
											<TableCell>{user.surname}</TableCell>
											<TableCell className="text-left xs:text-xs md:text-md">
												{user.email}
											</TableCell>
											<TableCell className="text-left xs:text-xs md:text-md">
												{user.roles.map((role) => {
													return <>{role.name}</>;
												})}
											</TableCell>
											<TableCell className="text-center max-w-8">
												{user.roles[0].permissionEntityDto.map((permission) => {
													return <>{permission.name[0]}</>;
												})}
											</TableCell>
											<TableCell>
												{user.accountNoLocked ? 'TRUE' : 'FALSE'}
											</TableCell>
											<TableCell>{user.enabled ? 'TRUE' : 'FALSE'}</TableCell>
										</TableRow>
									);
								})
							) : (
								<>Loading...</>
							)}
						</TableBody>
					</Table>
				</main>
			</div>
		</div>
	);
}

export default Page;
