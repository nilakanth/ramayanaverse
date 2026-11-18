export default function KandasPage() {
  const kandas = [
    {
      name: "Bala Kanda",
      slug: "bala-kanda",
      description: "Birth and childhood of Lord Rama",
    },
    {
      name: "Ayodhya Kanda",
      slug: "ayodhya-kanda",
      description: "The exile of Rama begins",
    },
    {
      name: "Aranya Kanda",
      slug: "aranya-kanda",
      description: "Life in the forest",
    },
    {
      name: "Kishkindha Kanda",
      slug: "kishkindha-kanda",
      description: "Alliance with Hanuman and Sugriva",
    },
    {
      name: "Sundara Kanda",
      slug: "sundara-kanda",
      description: "Hanuman's journey to Lanka",
    },
    {
      name: "Yuddha Kanda",
      slug: "yuddha-kanda",
      description: "Battle between Rama and Ravana",
    },
    {
      name: "Uttara Kanda",
      slug: "uttara-kanda",
      description: "Return to Ayodhya and later events",
    },
  ];

  return (
    <main className="min-h-screen bg-orange-50 p-10">
      <h1 className="text-5xl font-bold text-center text-orange-600 mb-12">
        The Seven Kandas
      </h1>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {kandas.map((kanda, index) => (
          <a
            key={index}
            href={`/kandas/${kanda.slug}`}
          >
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition cursor-pointer">
              <h2 className="text-2xl font-bold text-orange-600 mb-3">
                {kanda.name}
              </h2>

              <p className="text-gray-700">
                {kanda.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
