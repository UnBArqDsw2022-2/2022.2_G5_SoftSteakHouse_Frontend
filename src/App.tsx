import './App.css';
import { AppRoutes } from "./Routes";
import AuthProvider from './provider/authProvider';

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App
