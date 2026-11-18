import Image from "next/image";
import Link from "next/link";

const featuredCharacters = [
  {
    name: "Lord Rama",
    image: "/rama.png",
    link: "/characters/rama",
  },
  {
    name: "Sita",
    image: "/sita.png",
    link: "/characters/sita",
  },
  {
    name: "Hanuman",
    image: "/hanuman.png",
    link: "/characters/hanuman",
  },
  {
    name: "Lakshmana",
    image: "/lakshmana.png",
    link: "/characters/lakshmana",
  },
];

const kandas = [
  { name: "Bala Kanda", link: "/kandas/bala-kanda" },
  { name: "Ayodhya Kanda", link: "/kandas/ayodhya-kanda" },
  { name: "Aranya Kanda", link: "/kandas/aranya-kanda" },
  { name: "Kishkindha Kanda", link: "/kandas/kishkindha-kanda" },
  { name: "Sundara Kanda", link: "/kandas/sundara-kanda" },
  { name: "Yuddha Kanda", link: "/kandas/yuddha-kanda" },
  { name: "Uttara Kanda", link: "/kandas/uttara-kanda" },
];

export default function Home() {
  return (
    <main className="bg-orange-50">

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-10 py-20">

        <div className="max-w-xl">
          <h1 className="text-6xl md:text-7xl font-bold text-orange-600 mb-6">
            रामायणVerse
          </h1>

          <p className="text-xl text-gray-700 mb-8">
            Discover the timeless journey of Lord Rama through beautiful
            stories, legendary characters, profound teachings, and the
            seven sacred Kandas of the Ramayana.
          </p>

          <div className="flex gap-4">
            <Link
              href="/kandas"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold"
            >
              Explore Kandas
            </Link>

            <Link
              href="/characters"
              className="bg-white border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-lg font-bold"
            >
              View Characters
            </Link>
          </div>
        </div>

        <div>
          <Image
            src="/shreerama.png"
            alt="Lord Rama"
            width={500}
            height={700}
            className="rounded-2xl shadow-2xl"
          />
        </div>

      </section>

      {/* About Section */}
      <section className="py-24 px-10 bg-white">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-bold text-orange-600 mb-8">
            About the Ramayana
          </h2>

          <p className="text-xl text-gray-700 leading-relaxed">
            The Ramayana is one of the greatest epics of India, narrating
            the life of Prabhu Rama, his journey through exile, the rescue of
            Sita, and the triumph of Dharma over Adharma. It continues to
            inspire millions with its timeless lessons of righteousness,
            devotion, courage, and leadership.
          </p>

        </div>
      </section>

{/* Journey Timeline */}

<section className="py-24 px-10 bg-orange-100">

  <div className="max-w-7xl mx-auto">

    <h2 className="text-5xl font-bold text-center text-orange-600 mb-16">
      The Journey of Lord Rama
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      <Link href="/kandas/bala-kanda" className="block">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full">
          <div className="relative h-56">
            <Image
              src="/ayodhya.png"
              alt="Ayodhya"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-bold text-orange-600">
              Ayodhya
            </h3>

            <p className="text-gray-600 mt-2">
              Birth and royal upbringing of Rama.
            </p>
          </div>
        </div>
      </Link>

      <Link href="/kandas/ayodhya-kanda" className="block">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full">
          <div className="relative h-56">
            <Image
              src="/exile.png"
              alt="Forest Exile"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-bold text-orange-600">
              Forest Exile
            </h3>

            <p className="text-gray-600 mt-2">
              Rama leaves Ayodhya for fourteen years.
            </p>
          </div>
        </div>
      </Link>

      <Link href="/kandas/aranya-kanda" className="block">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full">
          <div className="relative h-56">
            <Image
              src="/panchavati.png"
              alt="Panchavati"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-bold text-orange-600">
              Panchavati
            </h3>

            <p className="text-gray-600 mt-2">
              Forest life with Sita and Lakshmana.
            </p>
          </div>
        </div>
      </Link>

      <Link href="/kandas/kishkindha-kanda" className="block">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full">
          <div className="relative h-56">
            <Image
              src="/kishkindha.png"
              alt="Kishkindha"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-bold text-orange-600">
              Kishkindha
            </h3>

            <p className="text-gray-600 mt-2">
              Alliance with Hanuman and Sugriva.
            </p>
          </div>
        </div>
      </Link>

      <Link href="/kandas/yuddha-kanda" className="block">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full">
          <div className="relative h-56">
            <Image
              src="/ram-setu.png"
              alt="Ram Setu"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-bold text-orange-600">
              Ram Setu
            </h3>

            <p className="text-gray-600 mt-2">
              The bridge to Lanka is built.
            </p>
          </div>
        </div>
      </Link>

      <Link href="/kandas/yuddha-kanda" className="block">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full">
          <div className="relative h-56">
            <Image
              src="/lanka.png"
              alt="Lanka"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-bold text-orange-600">
              Lanka
            </h3>

            <p className="text-gray-600 mt-2">
              The great war against Ravana.
            </p>
          </div>
        </div>
      </Link>

      <Link href="/kandas/uttara-kanda" className="block">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full">
          <div className="relative h-56">
            <Image
              src="/rama-rajya.png"
              alt="Rama Rajya"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-bold text-orange-600">
              Rama Rajya
            </h3>

            <p className="text-gray-600 mt-2">
              Return to Ayodhya and coronation.
            </p>
          </div>
        </div>
      </Link>

    </div>

  </div>

</section>

      {/* Featured Characters */}
      <section className="py-24 px-10">
        <h2 className="text-5xl font-bold text-center text-orange-600 mb-16">
          Featured Characters
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {featuredCharacters.map((character) => (
            <Link key={character.name} href={character.link}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

                <div className="relative h-96">
                  <Image
                    src={character.image}
                    alt={character.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                <div className="p-5 text-center">
                  <h3 className="text-2xl font-bold text-orange-600">
                    {character.name}
                  </h3>
                </div>

              </div>
            </Link>
          ))}

        </div>
      </section>

      {/* Seven Kandas */}
      <section className="py-24 px-10 bg-white">

        <h2 className="text-5xl font-bold text-center text-orange-600 mb-16">
          The Seven Kandas
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
  {kandas.map((kanda) => (
    <Link
      key={kanda.name}
      href={kanda.link}
      className="block"
    >
      <div className="bg-orange-50 p-8 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full cursor-pointer">

        <h3 className="text-2xl font-bold text-orange-600 mb-3">
          {kanda.name}
        </h3>

        <p className="text-gray-600">
          Click to explore this chapter
        </p>

      </div>
    </Link>
  ))}
</div>

      </section>

      {/* Quote Section */}
      <section className="py-24 px-10">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-orange-600 mb-8">
            Timeless Wisdom
          </h2>

          <blockquote className="text-2xl italic text-gray-700 leading-relaxed">
            "Dharma protects those who protect Dharma."
          </blockquote>

        </div>

      </section>

      {/* Call to Action */}
      <section className="bg-orange-600 text-white py-24 px-10 text-center">

        <h2 className="text-5xl font-bold mb-6">
          Begin the Journey
        </h2>

        <p className="text-xl mb-10">
          Explore the epic story, discover remarkable characters,
          and learn timeless lessons from the Ramayana.
        </p>

        <Link
          href="/kandas"
          className="bg-white text-orange-600 px-10 py-4 rounded-lg font-bold text-lg"
        >
          Start Exploring
        </Link>

      </section>

    </main>
  );
}