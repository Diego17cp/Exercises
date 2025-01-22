import type { AppDispatch, RootState } from "../store";

// hooks to access the store selector and dispatch
import { useDispatch, useSelector } from "react-redux";

// Allows type the useSelector hook 
import type { TypedUseSelectorHook } from "react-redux";

// Create typed hook to access the store selector and dispatch
// Reasign the useSelector and useDispatch hooks to use the new hooks with types
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


export const useAppDispatch: () => AppDispatch = useDispatch