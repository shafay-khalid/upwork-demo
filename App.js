import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import "bootstrap/dist/js/bootstrap.bundle"
import HomePage from './components/HomePage';
import ServiceProviderPage from './components/ServiceProviderPage';
import PaymentPage from './components/PaymentPage';
import ChatPage from './components/ChatPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/provider/:id" element={<ServiceProviderPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/chat" element={<ChatPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
