// Obtain the actions from the users slice and assign them to the useUsersActions hook
import { store } from "../store";
import { addNewUser, deleteUserById, editUser, User, UserId, UsersWithId } from "../store/users/slice";
// Import the useDispatch hook from react-redux for dispatching actions
import { useAppDispatch } from "./store";

export const useUsersActions = () => {
	const dispatch = useAppDispatch();

	// The addUser function receives a User object and dispatches the addNewUser action with the User object as a payload
	const addUser = ({ name, email, github }: User) => {
		dispatch(addNewUser({ name, email, github }));
	};

	// The removeUser function receives a UserId and dispatches the deleteUserById action with the UserId as a payload
	const removeUser = (id: UserId) => {
		dispatch(deleteUserById(id));
	};

	// The editUsers function receives a UsersWithId object and dispatches the editUser action with the UsersWithId object as a payload
	const editUsers = ({id, name, email, github }: UsersWithId) => {
		dispatch(editUser({ id, name, email, github }));
	}

	// The readUserInfo function receives a UserId and returns the user with the same id
	// The function uses the getState method from the store to get the current state
	// The function then returns the user with the same id as the one passed as a parameter
	const readUserInfo = (id: UserId) => {
		const state = store.getState();
		const user = state.users.find((user: UsersWithId) => user.id === id);
		return {
			id: user?.id,
			name: user?.name,
			email: user?.email,
			github: user?.github,
		}
	}

	return { removeUser, addUser, editUsers, readUserInfo };
};
