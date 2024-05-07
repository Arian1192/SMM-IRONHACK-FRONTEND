'use client';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AuroraBackgroundImplementation } from '@/components/AuroraBackgroundImplemtation';
import { useMutation } from '@tanstack/react-query';
import { loginUser } from '../../api/api.js';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

export function Page() {
  const { register, handleSubmit, reset } = useForm();
  const router = useRouter();

	const mutation = useMutation({
		mutationKey: ['token'],
		mutationFn: loginUser,
		onSuccess: (data) => {
			localStorage.setItem('token', data.token);
			reset();
			router.push('/dashboard');
		},
	});

	const handleLoginSubmit = (formData) => {
		mutation.mutate(formData);
	};

	return (
		<div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
			<div className="flex items-center justify-center py-12">
				<div className="mx-auto grid w-[350px] gap-6">
					<div className="grid gap-2 text-center">
						<h1 className="text-3xl font-bold">Login</h1>
						<p className="text-balance text-muted-foreground">
							Enter your email below to login to your account
						</p>
					</div>
					<form
						onSubmit={handleSubmit(handleLoginSubmit)}
						className="grid gap-4"
					>
						<div className="grid gap-2">
							<Label htmlFor="email">Email</Label>
							<Input
								{...register('email')}
								id="email"
								type="email"
								placeholder="m@example.com"
								required
							/>
						</div>
						<div className="grid gap-2">
							<div className="flex items-center">
								<Label htmlFor="password">Password</Label>
								<Link
									href="/forgot-password"
									className="ml-auto inline-block text-sm underline"
								>
									Forgot your password?
								</Link>
							</div>
							<Input
								{...register('password')}
								id="password"
								type="password"
								required
							/>
						</div>
						<Button type="submit" className="w-full">
							Login
						</Button>
						<Button variant="outline" className="w-full">
							Login with Google
						</Button>
					</form>
					<div className="mt-4 text-center text-sm">
						Don&apos;t have an account?{' '}
						<Link href="#" className="underline">
							Sign up
						</Link>
					</div>
				</div>
			</div>
			<div className="hidden bg-muted lg:block">
				<AuroraBackgroundImplementation />
			</div>
		</div>
	);
}

export default Page;
