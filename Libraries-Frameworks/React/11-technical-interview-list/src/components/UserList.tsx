import { User } from "../types";

interface Props {
	users: User[];
}

export const UserList = ({ users }: Props) => {
	return (
		<table>
			<thead>
				<tr>
					<th>Pic</th>
					<th>Name</th>
					<th>Last Name</th>
					<th>Country</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{users.map((user) => {
					return (
						<tr key={user.login.uuid}>
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
								<button>Delete</button>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};
