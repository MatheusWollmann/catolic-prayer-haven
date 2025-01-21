import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "@/firebaseConfig";

export function Header() {
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Redirecionar ou mostrar mensagem de sucesso
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  return (
    <header className="bg-white border-b border-sacred-200/50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="w-6 h-6 text-sacred-500" />
            <span className="font-serif text-xl font-semibold text-sacred-500">
              Orações Católicas
            </span>
          </Link>

          <div className="flex items-center space-x-6">
            <Link
              to="/oracoes"
              className="text-neutral-600 hover:text-sacred-500 transition-colors"
            >
              Orações
            </Link>
            {user ? (
              <button
                onClick={handleLogout}
                className="text-neutral-600 hover:text-sacred-500 transition-colors"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="text-neutral-600 hover:text-sacred-500 transition-colors"
              >
                Login
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
