import { createContext, useState } from "react";


// Create a context
export const FiltersContext = createContext();

// Create a provider
export const FiltersProvider = ({ children }) => {
    
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    });
    
    return (
        <FiltersContext.Provider value={{
            filters, 
            setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}