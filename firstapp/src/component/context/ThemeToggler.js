import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const ThemeToggler = () => {
    const {theme, toggleTheme} = useContext(AppContext)

    return(
        <div>
            <p>Current Theme:{theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}

export default ThemeToggler