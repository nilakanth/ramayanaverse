export default function BharataPage() {
  return (
    <main className="min-h-screen bg-orange-50 p-10">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-10">

        <h1 className="text-5xl font-bold text-orange-600 mb-6">
          Bharata
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          Bharata is the younger brother of Lord Rama and is regarded as one
          of the noblest characters in the Ramayana. He is remembered for his
          unwavering devotion to Rama, his humility, and his refusal to take
          the throne that rightfully belonged to his elder brother.
        </p>

        <h2 className="text-3xl font-bold mb-4">
          Overview
        </h2>

        <p className="text-lg text-gray-700 mb-8">
          Born to King Dasharatha and Queen Kaikeyi, Bharata was deeply devoted
          to Rama from childhood. When he learned that Rama had been exiled due
          to Kaikeyi's demands, Bharata was heartbroken. Refusing to benefit
          from the injustice, he traveled to the forest to persuade Rama to
          return. When Rama declined, Bharata ruled Ayodhya only as Rama's
          representative, placing Rama's sandals on the throne.
        </p>

        <h2 className="text-3xl font-bold mb-4">
          Major Events
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Born to King Dasharatha and Queen Kaikeyi.</li>
          <li><span className="text-orange-500">➤</span> Raised alongside Rama, Lakshmana, and Shatrughna.</li>
          <li><span className="text-orange-500">➤</span> Learns about Rama's exile and Dasharatha's death.</li>
          <li><span className="text-orange-500">➤</span> Condemns Kaikeyi's actions.</li>
          <li><span className="text-orange-500">➤</span> Refuses to accept the throne of Ayodhya.</li>
          <li><span className="text-orange-500">➤</span> Travels to Chitrakoot to meet Rama.</li>
          <li><span className="text-orange-500">➤</span> Requests Rama to return and rule Ayodhya.</li>
          <li><span className="text-orange-500">➤</span> Accepts Rama's sandals as a symbol of his authority.</li>
          <li><span className="text-orange-500">➤</span> Governs Ayodhya as Rama's regent during the exile.</li>
          <li><span className="text-orange-500">➤</span> Welcomes Rama back after fourteen years.</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Family
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Father: King Dasharatha</li>
          <li><span className="text-orange-500">➤</span> Mother: Queen Kaikeyi</li>
          <li><span className="text-orange-500">➤</span> Brothers: Rama, Lakshmana, and Shatrughna</li>
          <li><span className="text-orange-500">➤</span> Wife: Mandavi</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Key Qualities
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Loyalty and devotion</li>
          <li><span className="text-orange-500">➤</span> Humility and selflessness</li>
          <li><span className="text-orange-500">➤</span> Respect for Dharma</li>
          <li><span className="text-orange-500">➤</span> Integrity and honesty</li>
          <li><span className="text-orange-500">➤</span> Brotherly love</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Interesting Facts
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Bharata never considered himself the rightful king of Ayodhya.</li>
          <li><span className="text-orange-500">➤</span> Rama's sandals ruled Ayodhya symbolically during the exile.</li>
          <li><span className="text-orange-500">➤</span> Bharata lived a simple life while waiting for Rama's return.</li>
          <li><span className="text-orange-500">➤</span> He is considered one of the greatest examples of brotherly devotion in world literature.</li>
        </ul>

        <div className="flex justify-between mt-12">
          <a
            href="/characters"
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg"
          >
            ← All Characters
          </a>

          <a
            href="/characters/ravana"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg"
          >
            View Ravana →
          </a>
        </div>

      </div>
    </main>
  );
}