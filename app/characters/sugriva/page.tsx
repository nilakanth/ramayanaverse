export default function SugrivaPage() {
  return (
    <main className="min-h-screen bg-orange-50 p-10">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-10">

        <h1 className="text-5xl font-bold text-orange-600 mb-6">
          Sugriva
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          Sugriva was the king of the Vanaras and one of Lord Rama's most
          important allies in the Ramayana. His friendship with Rama led to
          the formation of a powerful alliance that ultimately helped rescue
          Sita and defeat Ravana.
        </p>

        <h2 className="text-3xl font-bold mb-4">
          Overview
        </h2>

        <p className="text-lg text-gray-700 mb-8">
          Sugriva was forced into exile after a conflict with his elder
          brother, Vali, who seized the throne of Kishkindha. Living in fear
          and hiding from Vali, Sugriva met Rama and Lakshmana through
          Hanuman. Rama promised to help Sugriva reclaim his kingdom, and in
          return Sugriva pledged his support in the search for Sita. This
          alliance became one of the turning points of the Ramayana.
        </p>

        <h2 className="text-3xl font-bold mb-4">
          Major Events
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Born into the Vanara kingdom of Kishkindha.</li>
          <li><span className="text-orange-500">➤</span> Loses his kingdom after a dispute with Vali.</li>
          <li><span className="text-orange-500">➤</span> Takes refuge on Mount Rishyamuka.</li>
          <li><span className="text-orange-500">➤</span> Meets Rama and Lakshmana through Hanuman.</li>
          <li><span className="text-orange-500">➤</span> Forms a friendship and alliance with Rama.</li>
          <li><span className="text-orange-500">➤</span> Regains the throne after Rama defeats Vali.</li>
          <li><span className="text-orange-500">➤</span> Organizes Vanara armies to search for Sita.</li>
          <li><span className="text-orange-500">➤</span> Sends Hanuman on the mission to Lanka.</li>
          <li><span className="text-orange-500">➤</span> Leads Vanara forces during the war in Lanka.</li>
          <li><span className="text-orange-500">➤</span> Helps achieve victory over Ravana.</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Family
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Brother: Vali</li>
          <li><span className="text-orange-500">➤</span> Wife: Ruma</li>
          <li><span className="text-orange-500">➤</span> Nephew: Angada</li>
          <li><span className="text-orange-500">➤</span> Closest Ally: Hanuman</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Key Qualities
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Friendship and loyalty</li>
          <li><span className="text-orange-500">➤</span> Leadership and teamwork</li>
          <li><span className="text-orange-500">➤</span> Gratitude and trust</li>
          <li><span className="text-orange-500">➤</span> Determination</li>
          <li><span className="text-orange-500">➤</span> Commitment to promises</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Important Lessons
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> True friendships are built on trust and mutual support.</li>
          <li><span className="text-orange-500">➤</span> Good leaders unite people toward a common goal.</li>
          <li><span className="text-orange-500">➤</span> Gratitude should be shown to those who help us.</li>
          <li><span className="text-orange-500">➤</span> Cooperation is essential for overcoming challenges.</li>
          <li><span className="text-orange-500">➤</span> Keeping promises builds lasting relationships.</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Interesting Facts
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Sugriva's alliance with Rama changed the course of the Ramayana.</li>
          <li><span className="text-orange-500">➤</span> Hanuman served as Sugriva's most trusted minister.</li>
          <li><span className="text-orange-500">➤</span> The search for Sita began under Sugriva's command.</li>
          <li><span className="text-orange-500">➤</span> Kishkindha Kanda focuses heavily on Sugriva's story.</li>
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