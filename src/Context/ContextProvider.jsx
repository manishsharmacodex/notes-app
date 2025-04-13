import { createContext } from "react";


export const ContextProvider = createContext();

const ContextDataProvider = (props) => {

    const title = "Alpha School";

    const value = {
        title
    }
    return (
        <ContextProvider.Provider value={value}>
            {props.children}
        </ContextProvider.Provider>
    )

}

export default ContextDataProvider;