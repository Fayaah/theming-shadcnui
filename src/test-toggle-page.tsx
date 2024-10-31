import {Button} from "@/components/ui/button";
import {ThemeToggleButton} from "@/components/theme-toggle-button";

function TestTogglePage() {
    return (
        <div className={'flex flex-col justify-center items-center space-y-5'}>
            <p>This is text</p>
            <div className={'flex flex-row space-x-3'}>
                <Button>Button</Button>
                <Button variant={'destructive'}>Button</Button>
                <Button variant={'secondary'}>Button</Button>
                <Button variant={'outline'}>Button</Button>
            </div>
            <ThemeToggleButton />
        </div>
    )
}

export default TestTogglePage;