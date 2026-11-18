export default function SundaraKandaPage() {
  return (
    <main className="min-h-screen bg-orange-50 p-10">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-10">

        <h1 className="text-5xl font-bold text-orange-600 mb-6">
          Sundara Kanda
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          Sundara Kanda is the fifth book of the Ramayana and is considered one
          of the most inspiring chapters of the epic. It primarily focuses on
          Hanuman's heroic journey to Lanka in search of Sita and showcases his
          devotion, intelligence, courage, and unwavering faith in Lord Rama.
        </p>

        <h2 className="text-3xl font-bold mb-4">
          Overview
        </h2>

        <p className="text-lg text-gray-700 mb-8">
          After receiving Rama's ring, Hanuman leaps across the vast ocean to
          Lanka. He overcomes many obstacles, searches the city, and finally
          finds Sita in the Ashoka Vatika. Hanuman delivers Rama's message,
          reassures Sita, and demonstrates his immense strength by defeating
          many Rakshasas. Before returning, he sets parts of Lanka ablaze and
          brings back vital information for Rama's mission.
        </p>

        <h2 className="text-3xl font-bold mb-4">
          Major Events
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Hanuman leaps across the ocean toward Lanka.</li>
          <li><span className="text-orange-500">➤</span> Hanuman overcomes Surasa and other obstacles.</li>
          <li><span className="text-orange-500">➤</span> Hanuman enters Lanka in a miniature form.</li>
          <li><span className="text-orange-500">➤</span> Hanuman searches throughout Lanka for Sita.</li>
          <li><span className="text-orange-500">➤</span> Hanuman finds Sita in Ashoka Vatika.</li>
          <li><span className="text-orange-500">➤</span> Hanuman gives Rama's ring to Sita.</li>
          <li><span className="text-orange-500">➤</span> Sita gives Hanuman her Chudamani as proof.</li>
          <li><span className="text-orange-500">➤</span> Hanuman destroys parts of Ashoka Vatika.</li>
          <li><span className="text-orange-500">➤</span> Hanuman defeats many warriors of Lanka.</li>
          <li><span className="text-orange-500">➤</span> Ravana orders Hanuman's tail to be set on fire.</li>
          <li><span className="text-orange-500">➤</span> Hanuman burns large portions of Lanka.</li>
          <li><span className="text-orange-500">➤</span> Hanuman returns and reports everything to Rama.</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Important Characters
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Hanuman</li>
          <li><span className="text-orange-500">➤</span> Sita</li>
          <li><span className="text-orange-500">➤</span> Lord Rama</li>
          <li><span className="text-orange-500">➤</span> Ravana</li>
          <li><span className="text-orange-500">➤</span> Vibhishana</li>
          <li><span className="text-orange-500">➤</span> Surasa</li>
          <li><span className="text-orange-500">➤</span> Trijata</li>
          <li><span className="text-orange-500">➤</span> Indrajit</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Key Teachings
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Faith and devotion make the impossible possible.</li>
          <li><span className="text-orange-500">➤</span> Courage grows when actions are driven by selfless purpose.</li>
          <li><span className="text-orange-500">➤</span> Intelligence is as important as physical strength.</li>
          <li><span className="text-orange-500">➤</span> Perseverance helps overcome even the greatest obstacles.</li>
          <li><span className="text-orange-500">➤</span> True devotion inspires extraordinary achievements.</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Interesting Facts
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Sundara Kanda is often recited for strength, courage, and positivity.</li>
          <li><span className="text-orange-500">➤</span> Hanuman's leap across the ocean is one of the most famous episodes in the Ramayana.</li>
          <li><span className="text-orange-500">➤</span> The name "Sundara" means beautiful and is associated with Hanuman's noble character.</li>
          <li><span className="text-orange-500">➤</span> This Kanda highlights both Hanuman's wisdom and his unmatched devotion to Rama.</li>
        </ul>

        <div className="flex justify-between mt-12">
          <a
            href="/kandas/kishkindha-kanda"
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg"
          >
            ← Previous Kanda
          </a>

          <a
            href="/kandas/yuddha-kanda"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg"
          >
            Next Kanda →
          </a>
        </div>

      </div>
    </main>
  );
}
