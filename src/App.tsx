import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import Index from "@/pages/Index";
import Prayers from "@/pages/Prayers";
import Prayer from "@/pages/Prayer";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/oracoes" element={<Prayers />} />
            <Route path="/prayer/:id" element={<Prayer />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;