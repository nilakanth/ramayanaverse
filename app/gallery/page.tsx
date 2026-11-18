import Image from "next/image";

const galleryItems = [
  {
    title: "Lord Rama",
    image: "/rama.jpg",
    category: "Characters",
  },
  {
    title: "Sita",
    image: "/sita.jpg",
    category: "Characters",
  },
  {
    title: "Hanuman",
    image: "/hanuman.jpg",
    category: "Characters",
  },
  {
    title: "Lakshmana",
    image: "/lakshmana.jpg",
    category: "Characters",
  },
  {
    title: "Ayodhya",
    image: "/ayodhya.jpg",
    category: "Places",
  },
  {
    title: "Panchavati",
    image: "/panchavati.jpg",
    category: "Places",
  },
  {
    title: "Kishkindha",
    image: "/kishkindha.jpg",
    category: "Places",
  },
  {
    title: "Ram Setu",
    image: "/ram-setu.jpg",
    category: "Places",
  },
  {
    title: "Lanka",
    image: "/lanka.jpg",
    category: "Places",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-orange-50 p-10">

      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-orange-600 mb-4">
          Ramayana Gallery
        </h1>

        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Explore beautiful visuals from the world of Ramayana,
          including characters, kingdoms, sacred places, and epic moments.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {galleryItems.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="relative h-80">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <span className="text-sm bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
                {item.category}
              </span>

              <h2 className="text-2xl font-bold text-orange-600 mt-4">
                {item.title}
              </h2>
            </div>
          </div>
        ))}

      </div>

    </main>
  );
}