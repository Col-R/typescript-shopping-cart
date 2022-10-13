import { createContext, useContext, ReactNode } from "react";

// ShoppingCartProvider wraps all of App.tsx
// gives the entire app access to the things in the shopping cart provider value.

type ShoppingCartProviderProps = {
    children: ReactNode
}
const ShoppingCartContext = createContext({})

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}


export function ShoppingCartProvider( {children}:ShoppingCartProviderProps ){
    return(
        <ShoppingCartContext.Provider value = {{}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
