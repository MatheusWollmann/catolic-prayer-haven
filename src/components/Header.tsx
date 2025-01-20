import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-sacred-200/50 z-50">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="font-serif text-2xl font-semibold text-neutral-800">
            Orações
          </Link>
          <nav className="space-x-6">
            <Link to="/" className="text-neutral-600 hover:text-sacred-500 transition-colors">
              Início
            </Link>
            <Link to="/favorites" className="text-neutral-600 hover:text-sacred-500 transition-colors">
              Favoritos
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}