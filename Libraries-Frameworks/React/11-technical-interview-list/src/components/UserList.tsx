import { SortBy, type User } from "../types.d";

interface Props {
	users: User[];
	showColors: boolean;
	handleDelete: (uuid: string) => void;
	changeSort: (sort: SortBy) => void;
}

export const UserList = ({
	showColors,
	users,
	handleDelete,
	changeSort,
}: Props) => {
	return (
		<table>
			<thead>
				<tr>
					<th>Pic</th>
					<th
						className="pointer"
						onClick={() => changeSort(SortBy.NAME)}
					>
						Name
					</th>
					<th
						className="pointer"
						onClick={() => changeSort(SortBy.LAST)}
					>
						Last Name
					</th>
					<th
						className="pointer"
						onClick={() => changeSort(SortBy.COUNTRY)}
					>
						Country
					</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{users.map((user) => {
					const color = showColors ? 'colored' : '';
					return (
						<tr
							key={user.login.uuid}
							className={ color}
						>
							<td>
								<img
									src={user.picture.thumbnail}
									alt={`${user.name.first} ${user.name.last} pic`}
								/>
							</td>
							<td>{user.name.first}</td>
							<td>{user.name.last}</td>
							<td>{user.location.country}</td>
							<td>
								<button
									onClick={() =>
										handleDelete(user.login.uuid)
									}
								>
									Delete
								</button>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};
