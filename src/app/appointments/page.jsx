'use client';
import { getAllAppointments, deleteAppointment } from '@/api/api';
import Sidebar from '@/components/Sidebar';
import { useQuery } from '@tanstack/react-query';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';

import { Button } from '@/components/ui/button';
import { useMutation } from '@tanstack/react-query';
import { Heading1 } from 'lucide-react';

export default function Page() {
	const { data, isLoading, error } = useQuery({
		queryKey: ['appointments'],
		queryFn: getAllAppointments,
	});

	const deleteAppointmentMutation = useMutation({
		mutationKey: ['appointments'],
		mutationFn: deleteAppointment,
		onSuccess: () => {
			queryClient.invalidateQueries('appointments');
		},
	});

	const handleDeleteAppointment = async (id) => {
		deleteAppointmentMutation.mutate(id);
	};

	return (
		<div>
			<Sidebar />
			<div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
				<main className="w-100% p-5 m-5 border rounded-md">
					<Table>
						<TableCaption>A list of all meets have been created.</TableCaption>
						<TableHeader>
							<TableRow>
								<TableHead className="w-[50px]">Id</TableHead>
								<TableHead>Title</TableHead>
								<TableHead className="w-16">Description</TableHead>
								<TableHead className="text-left max-w-8">Date</TableHead>
								<TableHead className="text-left max-w-8">Time</TableHead>
								<TableHead className="text-left ">Duration</TableHead>
								<TableHead className="text-center max-w-8">Host</TableHead>
								<TableHead className="text-center max-w-8">Attendees</TableHead>
								<TableHead className="text-center">Online</TableHead>
								<TableHead className="text-center">On Site</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{data ? (
								data?.map((appointment) => {
									return (
										<TableRow key={appointment.id}>
											<TableCell>{appointment.id}</TableCell>
											<TableCell>{appointment.title}</TableCell>
											<TableCell>{appointment.description}</TableCell>
											<TableCell className="text-left xs:text-xs md:text-md">
												{appointment.localDate}
											</TableCell>
											<TableCell className="text-left">
												{appointment.localTime}
											</TableCell>
											<TableCell className="text-center max-w-8">
												{appointment.duration}
											</TableCell>
											<TableCell className="text-center">
												{appointment.host?.name} - {appointment.host?.email}
											</TableCell>
											<TableCell className="text-center">
												{appointment.attendees.map((attendee) => {
													return (
														<>
															{attendee.name} - {attendee.email}
														</>
													);
												})}
											</TableCell>
											<TableCell className="text-center">
												{appointment.online ? '🟢' : '🔴'}
											</TableCell>
											<TableCell className="text-center">
												{appointment.onsite ? '🟢' : '🔴'}
											</TableCell>
											<TableCell className="text-center">
												<Button
													onClick={() =>
														handleDeleteAppointment(appointment.id)
													}
													asChild
												>
													Delete
												</Button>
											</TableCell>
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
