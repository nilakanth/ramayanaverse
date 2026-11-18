export default function YuddhaKandaPage() {
  return (
    <main className="min-h-screen bg-orange-50 p-10">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-10">

        <h1 className="text-5xl font-bold text-orange-600 mb-6">
          Yuddha Kanda
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          Yuddha Kanda is the sixth book of the Ramayana and narrates the
          great war between Lord Rama and Ravana. It is one of the most
          dramatic and action-filled sections of the epic, showcasing courage,
          sacrifice, strategy, and the triumph of Dharma over Adharma.
        </p>

        <h2 className="text-3xl font-bold mb-4">
          Overview
        </h2>

        <p className="text-lg text-gray-700 mb-8">
          After Hanuman returns from Lanka with information about Sita, Rama
          gathers the Vanara army and marches toward the ocean. With the help
          of Nala and the Vanaras, the magnificent Ram Setu is constructed,
          allowing the army to reach Lanka. A great battle follows, involving
          mighty warriors such as Indrajit, Kumbhakarna, Hanuman, Lakshmana,
          and Rama. The war ends with Rama defeating Ravana and rescuing Sita.
        </p>

        <h2 className="text-3xl font-bold mb-4">
          Major Events
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Rama organizes the Vanara army.</li>
          <li><span className="text-orange-500">➤</span> Vibhishana leaves Lanka and joins Rama.</li>
          <li><span className="text-orange-500">➤</span> Ram Setu is constructed across the ocean.</li>
          <li><span className="text-orange-500">➤</span> Rama's army reaches Lanka.</li>
          <li><span className="text-orange-500">➤</span> Fierce battles take place between Vanaras and Rakshasas.</li>
          <li><span className="text-orange-500">➤</span> Indrajit uses powerful celestial weapons.</li>
          <li><span className="text-orange-500">➤</span> Hanuman brings the Sanjeevani-bearing mountain.</li>
          <li><span className="text-orange-500">➤</span> Lakshmana defeats Indrajit.</li>
          <li><span className="text-orange-500">➤</span> Rama defeats Kumbhakarna.</li>
          <li><span className="text-orange-500">➤</span> Rama and Ravana engage in a final battle.</li>
          <li><span className="text-orange-500">➤</span> Ravana is defeated by Rama.</li>
          <li><span className="text-orange-500">➤</span> Sita is reunited with Rama.</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Important Characters
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Lord Rama</li>
          <li><span className="text-orange-500">➤</span> Sita</li>
          <li><span className="text-orange-500">➤</span> Lakshmana</li>
          <li><span className="text-orange-500">➤</span> Hanuman</li>
          <li><span className="text-orange-500">➤</span> Ravana</li>
          <li><span className="text-orange-500">➤</span> Vibhishana</li>
          <li><span className="text-orange-500">➤</span> Indrajit</li>
          <li><span className="text-orange-500">➤</span> Kumbhakarna</li>
          <li><span className="text-orange-500">➤</span> Sugriva</li>
          <li><span className="text-orange-500">➤</span> Angada</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Key Teachings
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Truth and righteousness ultimately prevail.</li>
          <li><span className="text-orange-500">➤</span> Leadership requires courage and responsibility.</li>
          <li><span className="text-orange-500">➤</span> Teamwork can overcome even the greatest challenges.</li>
          <li><span className="text-orange-500">➤</span> Pride and arrogance lead to destruction.</li>
          <li><span className="text-orange-500">➤</span> Devotion and faith provide strength in difficult times.</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Interesting Facts
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Ram Setu is one of the most famous structures mentioned in ancient Indian literature.</li>
          <li><span className="text-orange-500">➤</span> Hanuman's journey for the Sanjeevani herb is among the most beloved episodes in the Ramayana.</li>
          <li><span className="text-orange-500">➤</span> Ravana was a powerful scholar and devotee despite his flaws.</li>
          <li><span className="text-orange-500">➤</span> Yuddha Kanda symbolizes the victory of good over evil.</li>
        </ul>

        <div className="flex justify-between mt-12">
          <a
            href="/kandas/sundara-kanda"
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg"
          >
            ← Previous Kanda
          </a>

          <a
            href="/kandas/uttara-kanda"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg"
          >
            Next Kanda →
          </a>
        </div>

      </div>
    </main>
  );
}