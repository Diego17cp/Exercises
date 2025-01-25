// Type for the user id
export type UserId = string;

// Type for the user
export interface User {
	name: string;
	email: string;
	github: string;
}

// Type for the user with id
export interface UsersWithId extends User {
	id: UserId;
}