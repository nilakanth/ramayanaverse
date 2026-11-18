export default function HanumanPage() {
  return (
    <main className="min-h-screen bg-orange-50 p-10">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-10">

        <h1 className="text-5xl font-bold text-orange-600 mb-6">
          Hanuman
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          Hanuman is one of the most beloved characters in the Ramayana and is
          revered as the embodiment of devotion, strength, wisdom, and
          selfless service. As Lord Rama's greatest devotee, Hanuman played a
          crucial role in the search for Sita and the victory over Ravana.
        </p>

        <h2 className="text-3xl font-bold mb-4">
          Overview
        </h2>

        <p className="text-lg text-gray-700 mb-8">
          Hanuman was born to Anjana and is considered the son of Vayu, the
          Wind God. Blessed with extraordinary powers, intelligence, and
          courage, Hanuman used his abilities solely for the service of Dharma.
          His devotion to Lord Rama became legendary and remains an inspiration
          to millions of people around the world.
        </p>

        <h2 className="text-3xl font-bold mb-4">
          Major Events
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Born to Anjana and blessed by the Wind God.</li>
          <li><span className="text-orange-500">➤</span> Possessed extraordinary powers from childhood.</li>
          <li><span className="text-orange-500">➤</span> Meets Lord Rama in Kishkindha.</li>
          <li><span className="text-orange-500">➤</span> Becomes Rama's most trusted devotee and servant.</li>
          <li><span className="text-orange-500">➤</span> Leaps across the ocean in search of Sita.</li>
          <li><span className="text-orange-500">➤</span> Finds Sita in Ashoka Vatika.</li>
          <li><span className="text-orange-500">➤</span> Delivers Rama's ring to Sita.</li>
          <li><span className="text-orange-500">➤</span> Burns parts of Lanka after his tail is set on fire.</li>
          <li><span className="text-orange-500">➤</span> Brings the Sanjeevani-bearing mountain to save Lakshmana.</li>
          <li><span className="text-orange-500">➤</span> Helps Rama achieve victory over Ravana.</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Family
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Mother: Anjana</li>
          <li><span className="text-orange-500">➤</span> Father: Kesari</li>
          <li><span className="text-orange-500">➤</span> Divine Father: Vayu (Wind God)</li>
          <li><span className="text-orange-500">➤</span> Eternal Devotion: Lord Rama</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Key Qualities
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Unwavering devotion</li>
          <li><span className="text-orange-500">➤</span> Extraordinary strength</li>
          <li><span className="text-orange-500">➤</span> Intelligence and wisdom</li>
          <li><span className="text-orange-500">➤</span> Courage and fearlessness</li>
          <li><span className="text-orange-500">➤</span> Humility and selfless service</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Interesting Facts
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Hanuman is one of the Chiranjivis, believed to live through the ages.</li>
          <li><span className="text-orange-500">➤</span> Sundara Kanda is largely dedicated to Hanuman's heroic journey.</li>
          <li><span className="text-orange-500">➤</span> Hanuman Chalisa is one of the most widely recited devotional hymns.</li>
          <li><span className="text-orange-500">➤</span> Hanuman symbolizes the perfect combination of power and humility.</li>
        </ul>

        <div className="flex justify-between mt-12">
          <a
            href="/characters"
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg"
          >
            ← All Characters
          </a>

          <a
            href="/characters/lakshmana"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg"
          >
            View Lakshmana →
          </a>
        </div>

      </div>
    </main>
  );
}