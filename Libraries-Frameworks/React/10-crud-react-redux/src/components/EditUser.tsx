import { Button, Card, TextInput, Title } from "@tremor/react";
import { useUsersActions } from "../hooks/useUsersActions";
import { UsersWithId } from "../types";
import { toast } from "sonner";

type Props = {
	opacity: number;
	setOpacity: React.Dispatch<React.SetStateAction<number>>;
    userInfo: {
        id: string | undefined;
        name: string | undefined;
        email: string | undefined;
        github: string | undefined;
    }
    setUserInfo: React.Dispatch<React.SetStateAction<{
        id: string | undefined;
        name: string | undefined;
        email: string | undefined;
        github: string | undefined;
    }>>;
}

export const EditUser = ({ opacity, setOpacity, userInfo, setUserInfo }: Props) => {
    const {  editUsers } = useUsersActions();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value
        });
    }

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if(userInfo.id) {
            toast.success("User updated successfully");
            editUsers(userInfo as UsersWithId);
            setOpacity(0);
        }
	};
	const handleClose = () => {
        toast.info("Operation canceled");
		setOpacity(0);
	};
	return (
		<Card
			className={`w-3/12 h-4/6 absolute top-1/4 ${opacity===0? "z-0":"z-50"} flex flex-col p-5 backdrop-blur-md left-50 rounded-lg text-white border-2 border-slate-700 justify-around opacity-${opacity} transition-all duration-500`}
		>
			<section className="mb-3">
				<Title className="text-3xl text-center">Edit User Info</Title>
				<button
					className="absolute right-1 top-2"
					onClick={handleClose}
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
				className="h-5/6 w-full pt-3 px-2 flex flex-col gap-9 justify-center items-center"
				onSubmit={handleSubmit}
			>
                <TextInput
                    className="rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="1"
                    name="id"
                    value={userInfo.id}
                    disabled
                ></TextInput>
				<TextInput
					className="rounded-lg"
					placeholder="Diego Castro"
                    value={userInfo.name}
					name="name"
                    onChange={handleChange}
				></TextInput>
				<TextInput
					placeholder="example@gmail.com"
					name="email"
                    value={userInfo.email}
					className="rounded-lg"
                    onChange={handleChange}
				></TextInput>
				<TextInput
					className="rounded-lg"
					placeholder="diego17cp"
                    value={userInfo.github}
					name="github"
                    onChange={handleChange}
				></TextInput>
				<Button
					type="submit"
					className="w-5/6 bg-slate-300 text-black outline-none border-0 rounded-md hover:bg-slate-700 hover:text-white transition-all duration-500"
				>
					Update
				</Button>
			</form>
		</Card>
	);
};