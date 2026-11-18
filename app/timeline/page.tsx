export default function TimelinePage() {
  const events = [
    "Birth of Lord Rama",
    "Sita Swayamvara",
    "Exile to Forest",
    "Golden Deer Incident",
    "Sita's Abduction",
    "Meeting Hanuman",
    "Building Ram Setu",
    "Battle of Lanka",
    "Return to Ayodhya",
  ];

  return (
    <main className="min-h-screen bg-orange-50 p-10">
      <h1 className="text-5xl font-bold text-center text-orange-600 mb-12">
        Ramayana Timeline
      </h1>

      <div className="max-w-3xl mx-auto space-y-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-6 rounded-lg border-l-4 border-orange-500"
          >
            <h2 className="text-2xl font-semibold">
              {index + 1}. {event}
            </h2>
          </div>
        ))}
      </div>
    </main>
  );
}