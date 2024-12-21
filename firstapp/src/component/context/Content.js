import { AppProvider } from "./AppContext";
import ThemeToggler from "./ThemeToggler";

function App(){
    return(
        <AppProvider>
            <ThemeToggler/>
        </AppProvider>
    )
}

export default App