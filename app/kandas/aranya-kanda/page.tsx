export default function AranyaKandaPage() {
  return (
    <main className="min-h-screen bg-orange-50 p-10">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-10">

        <h1 className="text-5xl font-bold text-orange-600 mb-6">
          Aranya Kanda
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          Aranya Kanda is the third book of the Ramayana. It describes the
          forest life of Rama, Sita, and Lakshmana during their exile. This
          Kanda contains some of the most important events in the Ramayana,
          including the abduction of Sita by Ravana, which eventually leads
          to the great battle in Lanka.
        </p>

        <h2 className="text-3xl font-bold mb-4">
          Overview
        </h2>

        <p className="text-lg text-gray-700 mb-8">
          After leaving Ayodhya, Rama, Sita, and Lakshmana continue their
          journey through various forests and eventually settle in Panchavati.
          Their peaceful life is disturbed when Surpanakha becomes attracted
          to Rama and is rejected. This leads to a chain of events involving
          Ravana's plan to abduct Sita. The appearance of the golden deer,
          Jatayu's brave sacrifice, and Sita's kidnapping make this one of the
          most dramatic sections of the epic.
        </p>

        <h2 className="text-3xl font-bold mb-4">
          Major Events
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Rama, Sita, and Lakshmana settle in Panchavati.</li>
          <li><span className="text-orange-500">➤</span> Surpanakha approaches Rama and is rejected.</li>
          <li><span className="text-orange-500">➤</span> Lakshmana cuts off Surpanakha's nose and ears.</li>
          <li><span className="text-orange-500">➤</span> Khara and Dushana attack Rama and are defeated.</li>
          <li><span className="text-orange-500">➤</span> Ravana vows revenge after hearing Surpanakha's story.</li>
          <li><span className="text-orange-500">➤</span> Maricha disguises himself as the golden deer.</li>
          <li><span className="text-orange-500">➤</span> Rama follows the deer deep into the forest.</li>
          <li><span className="text-orange-500">➤</span> Ravana abducts Sita while Rama and Lakshmana are away.</li>
          <li><span className="text-orange-500">➤</span> Jatayu fights Ravana to protect Sita.</li>
          <li><span className="text-orange-500">➤</span> Rama begins the desperate search for Sita.</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Important Characters
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Lord Rama</li>
          <li><span className="text-orange-500">➤</span> Sita</li>
          <li><span className="text-orange-500">➤</span> Lakshmana</li>
          <li><span className="text-orange-500">➤</span> Ravana</li>
          <li><span className="text-orange-500">➤</span> Surpanakha</li>
          <li><span className="text-orange-500">➤</span> Maricha</li>
          <li><span className="text-orange-500">➤</span> Jatayu</li>
          <li><span className="text-orange-500">➤</span> Khara</li>
          <li><span className="text-orange-500">➤</span> Dushana</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Key Teachings
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Temptation and deception can lead to great difficulties.</li>
          <li><span className="text-orange-500">➤</span> Courage means standing for what is right, even against powerful enemies.</li>
          <li><span className="text-orange-500">➤</span> Loyalty and devotion shine in times of crisis.</li>
          <li><span className="text-orange-500">➤</span> Vigilance is important when facing hidden dangers.</li>
          <li><span className="text-orange-500">➤</span> Selfless sacrifice inspires future generations.</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Interesting Facts
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Panchavati is one of the most iconic locations in the Ramayana.</li>
          <li><span className="text-orange-500">➤</span> Jatayu is honored as a symbol of bravery and sacrifice.</li>
          <li><span className="text-orange-500">➤</span> The golden deer is one of the most famous episodes in the entire epic.</li>
          <li><span className="text-orange-500">➤</span> Sita's abduction becomes the turning point of the Ramayana.</li>
        </ul>

        <div className="flex justify-between mt-12">
          <a
            href="/kandas/ayodhya-kanda"
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg"
          >
            ← Previous Kanda
          </a>

          <a
            href="/kandas/kishkindha-kanda"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg"
          >
            Next Kanda →
          </a>
        </div>

      </div>
    </main>
  );
}