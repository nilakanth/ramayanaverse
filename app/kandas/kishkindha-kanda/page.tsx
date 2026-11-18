export default function KishkindhaKandaPage() {
  return (
    <main className="min-h-screen bg-orange-50 p-10">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-10">

        <h1 className="text-5xl font-bold text-orange-600 mb-6">
          Kishkindha Kanda
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          Kishkindha Kanda is the fourth book of the Ramayana. This chapter
          marks the beginning of Lord Rama's alliance with the Vanara kingdom.
          It introduces Hanuman, one of the most beloved characters in the
          Ramayana, and sets the stage for the search for Mother Sita.
        </p>

        <h2 className="text-3xl font-bold mb-4">
          Overview
        </h2>

        <p className="text-lg text-gray-700 mb-8">
          After losing Sita, Rama and Lakshmana continue their search through
          forests and mountains. They arrive in Kishkindha, where they meet
          Hanuman and Sugriva. This meeting leads to one of the greatest
          friendships in the epic and ultimately helps Rama find Sita.
        </p>

        <h2 className="text-3xl font-bold mb-4">
          Major Events
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Rama and Lakshmana reach Kishkindha.</li>
          <li><span className="text-orange-500">➤</span> Hanuman meets Rama for the first time.</li>
          <li><span className="text-orange-500">➤</span> Sugriva shares his story and seeks Rama's help.</li>
          <li><span className="text-orange-500">➤</span> Rama promises to help Sugriva regain his kingdom.</li>
          <li><span className="text-orange-500">➤</span> Rama defeats Vali in battle.</li>
          <li><span className="text-orange-500">➤</span> Sugriva becomes king of Kishkindha.</li>
          <li><span className="text-orange-500">➤</span> Vanara armies are organized to search for Sita.</li>
          <li><span className="text-orange-500">➤</span> Hanuman receives Rama's ring as a token of trust.</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Important Characters
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Lord Rama</li>
          <li><span className="text-orange-500">➤</span> Lakshmana</li>
          <li><span className="text-orange-500">➤</span> Hanuman</li>
          <li><span className="text-orange-500">➤</span> Sugriva</li>
          <li><span className="text-orange-500">➤</span> Vali</li>
          <li><span className="text-orange-500">➤</span> Tara</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Key Teachings
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> True friendship is built on trust and commitment.</li>
          <li><span className="text-orange-500">➤</span> Loyalty can change the course of history.</li>
          <li><span className="text-orange-500">➤</span> Good leadership requires responsibility and fairness.</li>
          <li><span className="text-orange-500">➤</span> United efforts can overcome difficult challenges.</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Interesting Facts
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Hanuman's first meeting with Rama happens in this Kanda.</li>
          <li><span className="text-orange-500">➤</span> This chapter begins the famous Rama-Hanuman relationship.</li>
          <li><span className="text-orange-500">➤</span> The search for Sita officially starts from Kishkindha.</li>
          <li><span className="text-orange-500">➤</span> Hanuman receives Rama's ring before beginning his mission.</li>
        </ul>

        <div className="flex justify-between mt-12">
          <a
            href="/kandas/aranya-kanda"
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg"
          >
            ← Previous Kanda
          </a>

          <a
            href="/kandas/sundara-kanda"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg"
          >
            Next Kanda →
          </a>
        </div>

      </div>
    </main>
  );
}