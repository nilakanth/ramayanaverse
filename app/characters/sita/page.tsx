export default function SitaPage() {
  return (
    <main className="min-h-screen bg-orange-50 p-10">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-10">

        <h1 className="text-5xl font-bold text-orange-600 mb-6">
          Sita
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          Sita is the central female character of the Ramayana and is revered
          as an ideal of virtue, devotion, patience, and inner strength. She
          is the wife of Lord Rama and is considered an incarnation of Goddess
          Lakshmi.
        </p>

        <h2 className="text-3xl font-bold mb-4">
          Overview
        </h2>

        <p className="text-lg text-gray-700 mb-8">
          Sita was discovered by King Janaka while ploughing a field and was
          lovingly raised as the princess of Mithila. She married Lord Rama
          after he successfully lifted and broke Lord Shiva's mighty bow.
          Throughout the Ramayana, Sita demonstrates remarkable courage,
          devotion, and dignity while facing exile, captivity in Lanka, and
          numerous challenges.
        </p>

        <h2 className="text-3xl font-bold mb-4">
          Major Events
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Found by King Janaka in a sacred field.</li>
          <li><span className="text-orange-500">➤</span> Raised as the Princess of Mithila.</li>
          <li><span className="text-orange-500">➤</span> Marries Lord Rama during the Swayamvara.</li>
          <li><span className="text-orange-500">➤</span> Accompanies Rama during the fourteen-year exile.</li>
          <li><span className="text-orange-500">➤</span> Is abducted by Ravana and taken to Lanka.</li>
          <li><span className="text-orange-500">➤</span> Remains steadfast in Ashoka Vatika.</li>
          <li><span className="text-orange-500">➤</span> Meets Hanuman and receives Rama's message.</li>
          <li><span className="text-orange-500">➤</span> Is reunited with Rama after Ravana's defeat.</li>
          <li><span className="text-orange-500">➤</span> Becomes the mother of Lava and Kusha.</li>
          <li><span className="text-orange-500">➤</span> Returns to Mother Earth in Uttara Kanda.</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Family
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Father: King Janaka</li>
          <li><span className="text-orange-500">➤</span> Mother: Queen Sunayana</li>
          <li><span className="text-orange-500">➤</span> Husband: Lord Rama</li>
          <li><span className="text-orange-500">➤</span> Sons: Lava and Kusha</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Key Qualities
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Devotion and loyalty</li>
          <li><span className="text-orange-500">➤</span> Courage during adversity</li>
          <li><span className="text-orange-500">➤</span> Compassion and kindness</li>
          <li><span className="text-orange-500">➤</span> Patience and self-respect</li>
          <li><span className="text-orange-500">➤</span> Commitment to Dharma</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Interesting Facts
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Sita is regarded as an incarnation of Goddess Lakshmi.</li>
          <li><span className="text-orange-500">➤</span> She was found in a furrow while King Janaka was ploughing the land.</li>
          <li><span className="text-orange-500">➤</span> Ashoka Vatika in Lanka became a symbol of her faith and resilience.</li>
          <li><span className="text-orange-500">➤</span> Her life is considered an example of strength combined with dignity.</li>
        </ul>

        <div className="flex justify-between mt-12">
          <a
            href="/characters"
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg"
          >
            ← All Characters
          </a>

          <a
            href="/characters/rama"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg"
          >
            View Rama →
          </a>
        </div>

      </div>
    </main>
  );
}