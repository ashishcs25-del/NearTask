
"use client";

import { useState } from "react";
import Link from "next/link";

import services from "@/data/services";
import ServiceCard from "@/components/customer/ServiceCard";
import SearchBar from "@/components/customer/SearchBar";
import CategoryFilter from "@/components/customer/CategoryFilter";

export default function Home() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("All");

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.name.toLowerCase().includes(search.toLowerCase()) ||
      service.provider.toLowerCase().includes(search.toLowerCase()) ||
      service.category.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selected === "All" || service.category === selected;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">

          <Link href="/" className="text-2xl font-bold text-blue-600">
            NearTask
          </Link>

          <div className="flex gap-6 items-center text-sm font-medium">
            <Link href="/" className="text-blue-600">
              Explore
            </Link>

            <Link href="/bookings" className="text-gray-600 hover:text-blue-600">
              My Bookings
            </Link>

            <Link href="/provider" className="text-gray-600 hover:text-blue-600">
              Provider Dashboard
            </Link>
          </div>

        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white px-6 py-16 text-center">

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Find the Right Help, Near You.
        </h1>

        <p className="text-blue-100 text-lg max-w-2xl mx-auto">
          Discover trusted local professionals for your everyday needs.
          From tutoring to repairs, find the right service with NearTask.
        </p>

      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Explore Local Services
          </h2>

          <p className="text-gray-500 mt-2">
            Find skilled people ready to help you.
          </p>
        </div>

        {/* Search */}
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        {/* Category Filters */}
        <CategoryFilter
          selected={selected}
          setSelected={setSelected}
        />

        {/* Results */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-gray-900">
            Available Services
          </h3>

          <span className="text-sm text-gray-500">
            {filteredServices.length} results
          </span>
        </div>

        {/* Service Cards */}
        {filteredServices.length > 0 ? (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
              />
            ))}

          </div>

        ) : (

          <div className="text-center py-16 bg-white rounded-xl border border-gray-200">

            <p className="text-xl font-semibold text-gray-800">
              No services found
            </p>

            <p className="text-gray-500 mt-2">
              Try another search term or category.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setSelected("All");
              }}
              className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
            >
              Clear Filters
            </button>

          </div>

        )}

      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-12">
        <p>© 2026 NearTask. Connecting local talent with local needs.</p>
      </footer>

    </main>
  );
}
