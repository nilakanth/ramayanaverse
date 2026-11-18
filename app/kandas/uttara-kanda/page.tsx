export default function UttaraKandaPage() {
  return (
    <main className="min-h-screen bg-orange-50 p-10">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-10">

        <h1 className="text-5xl font-bold text-orange-600 mb-6">
          Uttara Kanda
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          Uttara Kanda is the seventh and final book of the Ramayana. It
          describes Lord Rama's return to Ayodhya, his ideal reign as king,
          the birth of Lava and Kusha, and the concluding events of the epic.
          This Kanda reflects the responsibilities of leadership, devotion to
          duty, and the completion of Rama's divine mission on Earth.
        </p>

        <h2 className="text-3xl font-bold mb-4">
          Overview
        </h2>

        <p className="text-lg text-gray-700 mb-8">
          After defeating Ravana and rescuing Sita, Lord Rama returns to
          Ayodhya and is crowned king. His reign becomes known as Rama Rajya,
          an ideal kingdom marked by justice, prosperity, and peace. Later,
          Sita lives in Sage Valmiki's hermitage, where her sons Lava and
          Kusha are born and raised. The brothers eventually recite the story
          of the Ramayana before Lord Rama himself. The Kanda concludes with
          Rama completing his earthly duties and returning to his divine abode.
        </p>

        <h2 className="text-3xl font-bold mb-4">
          Major Events
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Rama returns to Ayodhya after the victory in Lanka.</li>
          <li><span className="text-orange-500">➤</span> Rama is crowned king of Ayodhya.</li>
          <li><span className="text-orange-500">➤</span> The golden age of Rama Rajya begins.</li>
          <li><span className="text-orange-500">➤</span> Sita resides in Sage Valmiki's hermitage.</li>
          <li><span className="text-orange-500">➤</span> Lava and Kusha are born and educated by Valmiki.</li>
          <li><span className="text-orange-500">➤</span> Lava and Kusha learn and recite the Ramayana.</li>
          <li><span className="text-orange-500">➤</span> Rama hears the story of his own life.</li>
          <li><span className="text-orange-500">➤</span> Sita returns to Mother Earth.</li>
          <li><span className="text-orange-500">➤</span> Rama completes his earthly mission.</li>
          <li><span className="text-orange-500">➤</span> Rama returns to his divine form as Lord Vishnu.</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Important Characters
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Lord Rama</li>
          <li><span className="text-orange-500">➤</span> Sita</li>
          <li><span className="text-orange-500">➤</span> Lava</li>
          <li><span className="text-orange-500">➤</span> Kusha</li>
          <li><span className="text-orange-500">➤</span> Sage Valmiki</li>
          <li><span className="text-orange-500">➤</span> Bharata</li>
          <li><span className="text-orange-500">➤</span> Lakshmana</li>
          <li><span className="text-orange-500">➤</span> Shatrughna</li>
          <li><span className="text-orange-500">➤</span> Hanuman</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Key Teachings
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Leadership requires responsibility and selflessness.</li>
          <li><span className="text-orange-500">➤</span> Duty must be performed with integrity.</li>
          <li><span className="text-orange-500">➤</span> Truth and righteousness endure through generations.</li>
          <li><span className="text-orange-500">➤</span> The legacy of noble actions inspires future generations.</li>
          <li><span className="text-orange-500">➤</span> Every journey has a meaningful conclusion.</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Interesting Facts
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Rama Rajya is often regarded as the ideal model of governance.</li>
          <li><span className="text-orange-500">➤</span> Lava and Kusha are the first narrators of the Ramayana within the story itself.</li>
          <li><span className="text-orange-500">➤</span> Sage Valmiki plays a major role in preserving and teaching the Ramayana.</li>
          <li><span className="text-orange-500">➤</span> Uttara Kanda completes the life journey of Lord Rama.</li>
        </ul>

        <div className="flex justify-between mt-12">
          <a
            href="/kandas/yuddha-kanda"
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg"
          >
            ← Previous Kanda
          </a>

          <a
            href="/kandas"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg"
          >
            All Kandas →
          </a>
        </div>

      </div>
    </main>
  );
}