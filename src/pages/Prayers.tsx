import { PrayerCard } from "@/components/PrayerCard";

const prayers = [
  {
    id: "1",
    title: "Pai Nosso",
    excerpt: "Pai Nosso que estais nos céus, santificado seja o vosso nome...",
    category: "Orações Básicas"
  },
  {
    id: "2",
    title: "Ave Maria",
    excerpt: "Ave Maria, cheia de graça, o Senhor é convosco...",
    category: "Orações Básicas"
  },
  {
    id: "3",
    title: "Salve Rainha",
    excerpt: "Salve Rainha, Mãe de misericórdia, vida, doçura e esperança nossa...",
    category: "Orações Marianas"
  },
  {
    id: "4",
    title: "Santo Anjo",
    excerpt: "Santo Anjo do Senhor, meu zeloso guardador...",
    category: "Orações de Proteção"
  },
  {
    id: "5",
    title: "Credo",
    excerpt: "Creio em Deus Pai todo-poderoso, criador do céu e da terra...",
    category: "Orações Básicas"
  },
  {
    id: "6",
    title: "Oração a São Miguel Arcanjo",
    excerpt: "São Miguel Arcanjo, defendei-nos no combate...",
    category: "Orações de Proteção"
  }
];

export default function Prayers() {
  return (
    <div className="container py-8 px-4 mx-auto">
      <h1 className="section-title text-center mb-8">Orações Católicas</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
  );
}