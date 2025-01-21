import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import Index from "@/pages/Index";
import Prayers from "@/pages/Prayers";
import Prayer from "@/pages/Prayer";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { AuthProvider } from "@/context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/oracoes" element={<Prayers />} />
              <Route path="/prayer/:id" element={<Prayer />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
