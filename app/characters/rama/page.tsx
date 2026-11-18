import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lord Rama | RamayanaVerse",
  description:
    "Learn about Lord Rama, the hero of the Ramayana, his life, family, virtues, and teachings.",
};

export default function RamaPage() {
  return (
    <main className="min-h-screen bg-orange-50 p-10">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-10">

        <h1 className="text-5xl font-bold text-orange-600 mb-6">
          Lord Rama
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          Lord Rama is the central hero of the Ramayana and the seventh avatar
          of Lord Vishnu. He is regarded as the embodiment of Dharma
          (righteousness), truth, courage, compassion, and ideal leadership.
          His life serves as a timeless example of how to live with honor and
          integrity.
        </p>

        <h2 className="text-3xl font-bold mb-4">
          Overview
        </h2>

        <p className="text-lg text-gray-700 mb-8">
          Born to King Dasharatha and Queen Kausalya in Ayodhya, Rama was the
          eldest among four brothers. From an early age, he displayed wisdom,
          humility, and extraordinary strength. Throughout his life, Rama
          fulfilled every duty with devotion, whether as a son, husband,
          brother, warrior, or king. His journey through exile, the rescue of
          Sita, and the defeat of Ravana forms the foundation of the Ramayana.
        </p>

        <h2 className="text-3xl font-bold mb-4">
          Major Events
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Born in Ayodhya to King Dasharatha and Queen Kausalya.</li>
          <li><span className="text-orange-500">➤</span> Receives education under Sage Vashistha.</li>
          <li><span className="text-orange-500">➤</span> Defeats Tataka and protects Sage Vishwamitra's yajna.</li>
          <li><span className="text-orange-500">➤</span> Breaks Lord Shiva's bow at Sita's Swayamvara.</li>
          <li><span className="text-orange-500">➤</span> Marries Princess Sita of Mithila.</li>
          <li><span className="text-orange-500">➤</span> Accepts fourteen years of exile.</li>
          <li><span className="text-orange-500">➤</span> Forms an alliance with Sugriva and Hanuman.</li>
          <li><span className="text-orange-500">➤</span> Leads the Vanara army to Lanka.</li>
          <li><span className="text-orange-500">➤</span> Defeats Ravana and rescues Sita.</li>
          <li><span className="text-orange-500">➤</span> Returns to Ayodhya and becomes king.</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Family
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Father: King Dasharatha</li>
          <li><span className="text-orange-500">➤</span> Mother: Queen Kausalya</li>
          <li><span className="text-orange-500">➤</span> Wife: Sita</li>
          <li><span className="text-orange-500">➤</span> Brothers: Bharata, Lakshmana, Shatrughna</li>
          <li><span className="text-orange-500">➤</span> Sons: Lava and Kusha</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Key Qualities
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Righteousness and integrity</li>
          <li><span className="text-orange-500">➤</span> Courage and determination</li>
          <li><span className="text-orange-500">➤</span> Compassion and kindness</li>
          <li><span className="text-orange-500">➤</span> Leadership and responsibility</li>
          <li><span className="text-orange-500">➤</span> Loyalty to family and duty</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Interesting Facts
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Lord Rama is worshipped as the seventh avatar of Lord Vishnu.</li>
          <li><span className="text-orange-500">➤</span> His reign, known as Rama Rajya, is considered the ideal kingdom.</li>
          <li><span className="text-orange-500">➤</span> Rama's life is regarded as the perfect example of Dharma.</li>
          <li><span className="text-orange-500">➤</span> The festival of Diwali celebrates Rama's return to Ayodhya.</li>
        </ul>

        <div className="flex justify-between mt-12">
          <a
            href="/characters"
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg"
          >
            ← All Characters
          </a>

          <a
            href="/characters/sita"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg"
          >
            View Sita →
          </a>
        </div>

      </div>
    </main>
  );
}