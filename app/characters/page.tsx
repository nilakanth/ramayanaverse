"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const characters = [
  {
    name: "Lord Rama",
    role: "Hero of Ramayana",
    image: "/rama.png",
    link: "/characters/rama",
  },
  {
    name: "Sita",
    role: "Queen of Ayodhya",
    image: "/sita.png",
    link: "/characters/sita",
  },
  {
    name: "Hanuman",
    role: "Greatest Devotee of Rama",
    image: "/hanuman.png",
    link: "/characters/hanuman",
  },
  {
    name: "Lakshmana",
    role: "Brother of Rama",
    image: "/lakshmana.png",
    link: "/characters/lakshmana",
  },
  {
    name: "Bharata",
    role: "Ideal Brother",
    image: "/bharata.jpg",
    link: "/characters/bharata",
  },
  {
    name: "Ravana",
    role: "King of Lanka",
    image: "/ravana.jpg",
    link: "/characters/ravana",
  },
  {
    name: "Vibhishana",
    role: "Follower of Dharma",
    image: "/vibhishana.jpg",
    link: "/characters/vibhishana",
  },
  {
    name: "Dasharatha",
    role: "King of Ayodhya",
    image: "/dasharatha.jpg",
    link: "/characters/dasharatha",
  },
  {
    name: "Sugriva",
    role: "King of Kishkindha",
    image: "/sugriva.jpg",
    link: "/characters/sugriva",
  },
];

export default function CharactersPage() {
  const [search, setSearch] = useState("");

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-orange-50 p-10">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-orange-600 mb-4">
          Ramayana Characters
        </h1>

        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Explore the heroes, kings, warriors, devotees, and rulers who
          shaped the epic story of the Ramayana.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-12">
        <input
          type="text"
          placeholder="🔍 Search a character..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-5 py-4 rounded-xl border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg bg-white"
        />
      </div>

      {/* Results Count */}
      <div className="text-center mb-8">
        <p className="text-gray-600">
          {filteredCharacters.length} Character
          {filteredCharacters.length !== 1 ? "s" : ""} Found
        </p>
      </div>

      {/* Character Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCharacters.map((character) => (
          <Link
            key={character.name}
            href={character.link}
            className="group"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

              <div className="relative h-80">
                <Image
                  src={character.image}
                  alt={character.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div className="p-6 text-center">
                <h2 className="text-2xl font-bold text-orange-600 mb-2 group-hover:text-orange-700">
                  {character.name}
                </h2>

                <p className="text-gray-600">
                  {character.role}
                </p>
              </div>

            </div>
          </Link>
        ))}
      </div>

      {/* No Results */}
      {filteredCharacters.length === 0 && (
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-orange-600">
            No Character Found
          </h3>

          <p className="text-gray-600 mt-2">
            Try searching for Rama, Sita, Hanuman, Ravana, or Bharata.
          </p>
        </div>
      )}
    </main>
  );
}