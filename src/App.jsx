import RenderRouter from './routers';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <RenderRouter />
      </BrowserRouter>
    </div>
  );
}
