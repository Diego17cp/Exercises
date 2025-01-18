export const TODO_FILTERS = {
    ALL: "all",
    ACTIVE: "active",
    COMPLETED: "completed",
} as const 
export const FILTER_BUTTONS = {
    [TODO_FILTERS.ALL]: {
        label: "All",
        href: `/?filters=${TODO_FILTERS.ALL}`,
    },
    [TODO_FILTERS.ACTIVE]: {
        label: "Active",
        href: `/?filters=${TODO_FILTERS.ACTIVE}`,
    },
    [TODO_FILTERS.COMPLETED]: {
        label: "Completed",
        href: `/?filters=${TODO_FILTERS.COMPLETED}`,
    },
} as const
export type Filter = (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS]