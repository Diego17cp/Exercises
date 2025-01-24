// 'use client';

import {
	Badge,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
	Title,
} from "@tremor/react";

import { useAppSelector } from "../hooks/store";
import { useUsersActions } from "../hooks/useUsersActions";

export function ListOfUsers() {
	// Access the users state from the store
	const users = useAppSelector((state) => state.users);
	const { removeUser } = useUsersActions();
	return (
		<section className="w-11/12 p-5 backdrop-blur-md bg-transparent rounded-lg text-white border-2 border-slate-700">
			<div className="flex justify-between mb-5 pb-4 border-b-2 border-slate-300">
				<Title>
					Users:
					<Badge className="border-2 bg-emerald-300 ml-3 rounded-md outline-none">
						{users.length}
					</Badge>
				</Title>
				<button>
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
							d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
						/>
					</svg>
				</button>
			</div>
			<Table>
				<TableHead className="bg-slate-600">
					<TableRow>
						<TableHeaderCell className="text-center">
							ID
						</TableHeaderCell>
						<TableHeaderCell className="text-center">
							Nombre
						</TableHeaderCell>
						<TableHeaderCell className="text-center">
							Email
						</TableHeaderCell>
						<TableHeaderCell className="text-center">
							Acciones
						</TableHeaderCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{users.map((item) => (
						<TableRow key={item.name}>
							<TableCell className="text-center">
								{item.id}
							</TableCell>
							<TableCell className="flex items-center gap-4 text-center justify-center">
								{item.name}
								<img
									src={`https://unavatar.io/github/${item.github}`}
									alt={item.name}
									className="w-8 h-8 rounded-3xl border-2 border-slate-300 border-solid"
								/>
							</TableCell>
							<TableCell className="text-center">{item.email}</TableCell>
							<TableCell className="flex justify-around">
								<button type="button">
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
											d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
										/>
									</svg>
								</button>
								<button onClick={() => removeUser(item.id)}>
									<svg
										aria-label="Remove element"
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
											d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
										/>
									</svg>
								</button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</section>
	);
}
