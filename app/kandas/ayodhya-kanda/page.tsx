export default function AyodhyaKandaPage() {
  return (
    <main className="min-h-screen bg-orange-50 p-10">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-10">

        <h1 className="text-5xl font-bold text-orange-600 mb-6">
          Ayodhya Kanda
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          Ayodhya Kanda is the second book of the Ramayana and marks a major
          turning point in the epic. It tells the story of Lord Rama's exile
          from Ayodhya, demonstrating the ideals of duty, obedience,
          sacrifice, and devotion.
        </p>

        <h2 className="text-3xl font-bold mb-4">
          Overview
        </h2>

        <p className="text-lg text-gray-700 mb-8">
          As preparations begin for Rama's coronation, Queen Kaikeyi invokes
          two boons previously promised by King Dasharatha. She demands that
          Bharata be crowned king and that Rama be exiled for fourteen years.
          To uphold his father's honor and keep the royal promise, Rama
          willingly accepts exile. Sita and Lakshmana accompany him, while
          Ayodhya is left in sorrow.
        </p>

        <h2 className="text-3xl font-bold mb-4">
          Major Events
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> King Dasharatha announces Rama's coronation.</li>
          <li><span className="text-orange-500">➤</span> Manthara influences Queen Kaikeyi.</li>
          <li><span className="text-orange-500">➤</span> Kaikeyi demands her two promised boons.</li>
          <li><span className="text-orange-500">➤</span> Bharata is chosen to become king.</li>
          <li><span className="text-orange-500">➤</span> Rama is ordered to spend fourteen years in exile.</li>
          <li><span className="text-orange-500">➤</span> Rama accepts exile without hesitation.</li>
          <li><span className="text-orange-500">➤</span> Sita decides to accompany Rama.</li>
          <li><span className="text-orange-500">➤</span> Lakshmana joins them in the forest.</li>
          <li><span className="text-orange-500">➤</span> The citizens of Ayodhya mourn Rama's departure.</li>
          <li><span className="text-orange-500">➤</span> King Dasharatha dies of grief.</li>
          <li><span className="text-orange-500">➤</span> Bharata refuses to take the throne.</li>
          <li><span className="text-orange-500">➤</span> Bharata places Rama's sandals on the throne and rules as regent.</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Important Characters
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Lord Rama</li>
          <li><span className="text-orange-500">➤</span> Sita</li>
          <li><span className="text-orange-500">➤</span> Lakshmana</li>
          <li><span className="text-orange-500">➤</span> Bharata</li>
          <li><span className="text-orange-500">➤</span> King Dasharatha</li>
          <li><span className="text-orange-500">➤</span> Queen Kaikeyi</li>
          <li><span className="text-orange-500">➤</span> Queen Kausalya</li>
          <li><span className="text-orange-500">➤</span> Sumitra</li>
          <li><span className="text-orange-500">➤</span> Manthara</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Key Teachings
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Duty should be followed even when it requires sacrifice.</li>
          <li><span className="text-orange-500">➤</span> Promises and commitments must be honored.</li>
          <li><span className="text-orange-500">➤</span> True leadership is based on righteousness, not power.</li>
          <li><span className="text-orange-500">➤</span> Family loyalty strengthens relationships.</li>
          <li><span className="text-orange-500">➤</span> Humility and obedience are signs of greatness.</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Interesting Facts
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Bharata is considered one of the greatest examples of brotherly devotion.</li>
          <li><span className="text-orange-500">➤</span> Rama never questioned his father's decision.</li>
          <li><span className="text-orange-500">➤</span> Rama's sandals symbolically governed Ayodhya during the exile.</li>
          <li><span className="text-orange-500">➤</span> Ayodhya Kanda contains some of the most emotional moments in the Ramayana.</li>
        </ul>

        <div className="flex justify-between mt-12">
          <a
            href="/kandas/bala-kanda"
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg"
          >
            ← Previous Kanda
          </a>

          <a
            href="/kandas/aranya-kanda"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg"
          >
            Next Kanda →
          </a>
        </div>

      </div>
    </main>
  );
}