import { BrowserRouter } from 'react-router-dom';
import RenderRouter from './routers';

export default function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <RenderRouter />
      </BrowserRouter>
    </div>
  );
}
