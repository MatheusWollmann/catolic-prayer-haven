// src/pages/Index.tsx
// Remova a importação do Header
// import { Header } from "@/components/Header";
import { PrayerCard } from "@/components/PrayerCard";

const prayers = [
  {
    id: "pai-nosso",
    title: "Pai Nosso",
    excerpt:
      "A oração que Jesus nos ensinou, um modelo perfeito de comunicação com Deus.",
    category: "Orações Básicas",
  },
  {
    id: "ave-maria",
    title: "Ave Maria",
    excerpt:
      "Uma bela oração dedicada à Nossa Senhora, mãe de Jesus e nossa mãe.",
    category: "Orações Marianas",
  },
  {
    id: "gloria",
    title: "Glória ao Pai",
    excerpt: "Uma oração de louvor à Santíssima Trindade.",
    category: "Orações Básicas",
  },
  {
    id: "santo-anjo",
    title: "Santo Anjo",
    excerpt: "Oração ao anjo da guarda, nosso protetor celestial.",
    category: "Orações de Proteção",
  },
  {
    id: "salve-rainha",
    title: "Salve Rainha",
    excerpt: "Uma antiga e bela oração à Nossa Senhora, Rainha do Céu.",
    category: "Orações Marianas",
  },
  {
    id: "credo",
    title: "Creio (Credo)",
    excerpt:
      "Profissão de fé que resume as principais verdades da nossa crença.",
    category: "Orações Básicas",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-sacred-50">
      {/* Remova o Header daqui */}
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="section-title text-center mb-8">Orações Católicas</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prayers.map((prayer) => (
              <PrayerCard
                key={prayer.id}
                id={prayer.id}
                title={prayer.title}
                excerpt={prayer.excerpt}
                category={prayer.category}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
