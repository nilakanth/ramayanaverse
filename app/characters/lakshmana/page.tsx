export default function LakshmanaPage() {
  return (
    <main className="min-h-screen bg-orange-50 p-10">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-10">

        <h1 className="text-5xl font-bold text-orange-600 mb-6">
          Lakshmana
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          Lakshmana is the younger brother of Lord Rama and one of the most
          devoted characters in the Ramayana. Known for his unwavering loyalty,
          courage, and dedication, Lakshmana accompanies Rama throughout his
          fourteen-year exile and plays a crucial role in many key events of
          the epic.
        </p>

        <h2 className="text-3xl font-bold mb-4">
          Overview
        </h2>

        <p className="text-lg text-gray-700 mb-8">
          Born to King Dasharatha and Queen Sumitra, Lakshmana shared a special
          bond with Lord Rama from childhood. He chose to accompany Rama and
          Sita into the forest and served them tirelessly throughout the exile.
          Lakshmana fought many powerful demons, protected Sita and Rama, and
          played a vital role in the war against Ravana.
        </p>

        <h2 className="text-3xl font-bold mb-4">
          Major Events
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Born as the son of King Dasharatha and Queen Sumitra.</li>
          <li><span className="text-orange-500">➤</span> Receives education alongside Rama and his brothers.</li>
          <li><span className="text-orange-500">➤</span> Accompanies Sage Vishwamitra with Rama.</li>
          <li><span className="text-orange-500">➤</span> Marries Urmila, the sister of Sita.</li>
          <li><span className="text-orange-500">➤</span> Chooses exile with Rama and Sita.</li>
          <li><span className="text-orange-500">➤</span> Builds forest shelters and protects the family.</li>
          <li><span className="text-orange-500">➤</span> Draws the famous Lakshmana Rekha.</li>
          <li><span className="text-orange-500">➤</span> Defeats several Rakshasas during exile.</li>
          <li><span className="text-orange-500">➤</span> Defeats Indrajit during the war in Lanka.</li>
          <li><span className="text-orange-500">➤</span> Returns to Ayodhya after Rama's victory.</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Family
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Father: King Dasharatha</li>
          <li><span className="text-orange-500">➤</span> Mother: Queen Sumitra</li>
          <li><span className="text-orange-500">➤</span> Brothers: Rama, Bharata, and Shatrughna</li>
          <li><span className="text-orange-500">➤</span> Wife: Urmila</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Key Qualities
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Loyalty and devotion</li>
          <li><span className="text-orange-500">➤</span> Courage and bravery</li>
          <li><span className="text-orange-500">➤</span> Discipline and self-control</li>
          <li><span className="text-orange-500">➤</span> Sense of duty</li>
          <li><span className="text-orange-500">➤</span> Selfless service</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">
          Interesting Facts
        </h2>

        <ul className="space-y-3 text-lg text-gray-700 mb-10">
          <li><span className="text-orange-500">➤</span> Lakshmana is regarded as the ideal younger brother.</li>
          <li><span className="text-orange-500">➤</span> He remained awake throughout much of the exile to protect Rama and Sita.</li>
          <li><span className="text-orange-500">➤</span> The Lakshmana Rekha remains a famous symbol of protection.</li>
          <li><span className="text-orange-500">➤</span> He was one of the greatest warriors in Rama's army.</li>
        </ul>

        <div className="flex justify-between mt-12">
          <a
            href="/characters"
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg"
          >
            ← All Characters
          </a>

          <a
            href="/characters/bharata"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg"
          >
            View Bharata →
          </a>
        </div>

      </div>
    </main>
  );
}