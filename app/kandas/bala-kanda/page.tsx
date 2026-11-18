export default function BalaKandaPage() {
  return (
    <main className="min-h-screen bg-orange-50 p-10">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-10">

        <h1 className="text-5xl font-bold text-orange-600 mb-6">
          Bala Kanda
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          Bala Kanda is the first book of the Ramayana and serves as the
          foundation of the entire epic. It narrates the birth, childhood,
          education, and early achievements of Lord Rama, preparing him for
          his future role as the protector of Dharma.
        </p>

        <h2 className="text-3xl font-bold mb-4">
          Overview
        </h2>

        <p className="text-lg text-gray-700 mb-8">
          King Dasharatha of Ayodhya longed for heirs to continue his royal
          lineage. Through a sacred sacrifice, four sons were born: Rama,
          Bharata, Lakshmana, and Shatrughna. As Rama grew, he displayed
          extraordinary wisdom, courage, and virtue. Guided by Sage
          Vishwamitra, he undertook his first missions, defeated powerful
          demons, and eventually won the hand of Princess Sita by breaking
          Lord Shiva's mighty bow.
        </p>

        <h2 className="text-3xl font-bold mb-4">
          Major Events
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> King Dasharatha performs the Putrakameshti Yajna.</li>
          <li><span className="text-orange-500">➤</span> Birth of Rama, Bharata, Lakshmana, and Shatrughna.</li>
          <li><span className="text-orange-500">➤</span> The princes receive education under Sage Vashistha.</li>
          <li><span className="text-orange-500">➤</span> Sage Vishwamitra takes Rama and Lakshmana to protect his sacred rituals.</li>
          <li><span className="text-orange-500">➤</span> Rama defeats the demoness Tataka.</li>
          <li><span className="text-orange-500">➤</span> Rama destroys Subahu and drives away Maricha.</li>
          <li><span className="text-orange-500">➤</span> Rama liberates Ahalya from her curse.</li>
          <li><span className="text-orange-500">➤</span> Rama attends Sita's Swayamvara in Mithila.</li>
          <li><span className="text-orange-500">➤</span> Rama breaks Lord Shiva's celestial bow.</li>
          <li><span className="text-orange-500">➤</span> Marriage of Rama and Sita.</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Important Characters
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Lord Rama</li>
          <li><span className="text-orange-500">➤</span> Sita</li>
          <li><span className="text-orange-500">➤</span> King Dasharatha</li>
          <li><span className="text-orange-500">➤</span> Sage Vishwamitra</li>
          <li><span className="text-orange-500">➤</span> Sage Vashistha</li>
          <li><span className="text-orange-500">➤</span> King Janaka</li>
          <li><span className="text-orange-500">➤</span> Lakshmana</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Key Teachings
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Education and discipline create a strong character.</li>
          <li><span className="text-orange-500">➤</span> Good always triumphs over evil.</li>
          <li><span className="text-orange-500">➤</span> Respect for teachers and elders is essential.</li>
          <li><span className="text-orange-500">➤</span> Courage and humility can coexist.</li>
          <li><span className="text-orange-500">➤</span> Divine blessings reward sincerity and devotion.</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Interesting Facts
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Bala Kanda introduces most of the key characters in the Ramayana.</li>
          <li><span className="text-orange-500">➤</span> Rama's first major victory is against Tataka.</li>
          <li><span className="text-orange-500">➤</span> The famous Sita Swayamvara takes place in this Kanda.</li>
          <li><span className="text-orange-500">➤</span> The marriage of Rama and Sita marks one of the most celebrated events in Hindu tradition.</li>
        </ul>

        <div className="flex justify-between mt-12">
          <a
            href="/kandas"
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg"
          >
            ← All Kandas
          </a>

          <a
            href="/kandas/ayodhya-kanda"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg"
          >
            Next Kanda →
          </a>
        </div>

      </div>
    </main>
  );
}