import { Heart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface PrayerCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
}

export function PrayerCard({ id, title, excerpt, category }: PrayerCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="prayer-card animate-fade-up">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <span className="category-chip">{category}</span>
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="text-sacred-400 hover:text-sacred-500 transition-colors"
          >
            <Heart
              className={`w-5 h-5 ${isFavorite ? "fill-sacred-400" : ""}`}
            />
          </button>
        </div>
        <Link to={`/prayer/${id}`}>
          <h3 className="font-serif text-xl font-semibold mb-2 hover:text-sacred-500 transition-colors">
            {title}
          </h3>
          <p className="text-neutral-600 line-clamp-3">{excerpt}</p>
        </Link>
      </div>
    </div>
  );
}