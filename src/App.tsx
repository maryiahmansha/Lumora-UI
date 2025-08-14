import { Button } from './components/Interactive/Button/Button';
import './styles/globals.css';

function App() {
    return (
        <div className="p-8 space-y-4">
            <h1 className="text-2xl font-bold">Lumora UI Development</h1>

            <div className="space-y-4">
                <div className="flex gap-4">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                </div>

                <div className="flex gap-4 items-center">
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                </div>

                <Button loading>Loading Button</Button>
            </div>
        </div>
    );
}

export default App;