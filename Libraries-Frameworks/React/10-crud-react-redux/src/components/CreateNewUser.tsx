import { Button, Card, TextInput, Title } from "@tremor/react";
import { useUsersActions } from "../hooks/useUsersActions";

export const CreateNewUser = () => {
	const { addUser } = useUsersActions();
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const formData = new FormData(form);

		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const github = formData.get("github") as string;
		addUser({ name, email, github });
		form.reset();
	};
	return (
		<Card className="w-6/12 h-4/6 absolute top-50 z-10 flex flex-col p-5 backdrop-blur-md bg-transparent rounded-lg text-white border-2 border-slate-700 justify-around">
			<section className="">
				<Title className="text-3xl text-center">Create New User</Title>
				<button
					className="absolute right-1 top-2"
					onClick={() => console.log("close")}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
						/>
					</svg>
				</button>
			</section>
			<form
				className="h-5/6 w-full pt-3 px-2 flex flex-col gap-10 justify-center items-center"
				onSubmit={handleSubmit}
			>
				<TextInput
					className="rounded-lg"
					placeholder="Diego Castro"
					name="name"
				></TextInput>
				<TextInput
					placeholder="example@gmail.com"
					name="email"
					className="rounded-lg"
				></TextInput>
				<TextInput
					className="rounded-lg"
					placeholder="diego17cp"
					name="github"
				></TextInput>
				<Button
					type="submit"
					className="w-5/6 bg-slate-300 text-black outline-none border-0 rounded-md hover:bg-slate-500 hover:text-white transition-all duration-300"
				>
					Create
				</Button>
			</form>
		</Card>
	);
};
