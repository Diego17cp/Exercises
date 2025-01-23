// Obtain the actions from the users slice and assign them to the useUsersActions hook
import { addNewUser, deleteUserById, User, UserId } from "../store/users/slice";
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

	return { removeUser, addUser };
};
