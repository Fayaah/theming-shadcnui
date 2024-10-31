import {ThemeProvider} from "@/components/theme-provider";
import TestTogglePage from "@/test-toggle-page";

function App() {
    return (
        <ThemeProvider defaultTheme={'system'} storageKey={'vite-ui-theme'}>
            <TestTogglePage />
        </ThemeProvider>
    )
}

export default App
