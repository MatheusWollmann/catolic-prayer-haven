import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const prayers = {
  "pai-nosso": {
    title: "Pai Nosso",
    category: "Orações Básicas",
    content: `Pai Nosso que estais nos Céus,
    santificado seja o vosso nome,
    venha a nós o vosso Reino,
    seja feita a vossa vontade,
    assim na Terra como no Céu.
    O pão nosso de cada dia nos dai hoje,
    perdoai as nossas ofensas,
    assim como nós perdoamos a quem nos tem ofendido,
    e não nos deixeis cair em tentação,
    mas livrai-nos do mal.
    Amém.`
  },
  "ave-maria": {
    title: "Ave Maria",
    category: "Orações Marianas",
    content: `Ave Maria, cheia de graça,
    o Senhor é convosco,
    bendita sois vós entre as mulheres,
    e bendito é o fruto do vosso ventre, Jesus.
    Santa Maria, Mãe de Deus,
    rogai por nós, pecadores,
    agora e na hora da nossa morte.
    Amém.`
  },
  "salve-rainha": {
    title: "Salve Rainha",
    category: "Orações Marianas",
    content: `Salve Rainha, Mãe de misericórdia,
    vida, doçura e esperança nossa, salve!
    A vós bradamos, os degredados filhos de Eva.
    A vós suspiramos, gemendo e chorando neste vale de lágrimas.
    Eia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei,
    e depois deste desterro mostrai-nos Jesus, bendito fruto do vosso ventre,
    ó clemente, ó piedosa, ó doce sempre Virgem Maria.
    Rogai por nós, Santa Mãe de Deus,
    para que sejamos dignos das promessas de Cristo.
    Amém.`
  }
};

export default function Prayer() {
  const { id } = useParams();
  const prayer = id ? prayers[id as keyof typeof prayers] : null;

  if (!prayer) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="p-6">
            <p className="text-center text-neutral-600">Oração não encontrada</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="space-y-2">
          <span className="text-sm font-medium text-sacred-500">{prayer.category}</span>
          <h1 className="font-serif text-3xl font-semibold text-neutral-800">{prayer.title}</h1>
        </CardHeader>
        <CardContent>
          <div className="prose prose-neutral max-w-none">
            <p className="whitespace-pre-line">{prayer.content}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}