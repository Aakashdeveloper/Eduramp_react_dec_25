import React,{createContext, useState} from 'react';

export const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [theme, setTheme] = useState('light');
    const [user,setUser] = useState({name:'John', age:30});

    const toggleTheme = () => {
        setTheme((prevTheme) =>  (prevTheme === 'light' ? 'dark':'light'))
    }

    return(
        <AppContext.Provider value={{theme, toggleTheme, user, setUser}}>
            {children}
        </AppContext.Provider>
    )
}