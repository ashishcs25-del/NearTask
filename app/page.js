
"use client";

import { useState } from "react";
import Link from "next/link";

import { useServices } from "@/context/ServiceContext";
import ServiceCard from "@/components/customer/ServiceCard";
import SearchBar from "@/components/customer/SearchBar";
import CategoryFilter from "@/components/customer/CategoryFilter";

export default function Home() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("All");

  const { services, isLoaded } = useServices();

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.name.toLowerCase().includes(search.toLowerCase()) ||
      (service.provider || "").toLowerCase().includes(search.toLowerCase()) ||
      service.category.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selected === "All" || service.category === selected;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-[#F6F2E9] text-[#252820]">

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-[#E5DED2] bg-[#F6F2E9]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">

          <Link
            href="/"
            className="font-serif text-3xl font-semibold tracking-tight text-[#252820]"
          >
            NearTask<span className="text-[#285B3F]">.</span>
          </Link>

          <div className="flex flex-wrap items-center gap-4 text-sm font-medium sm:gap-7">
            <Link href="/" className="text-[#285B3F]">
              Explore
            </Link>

            <Link
              href="/bookings"
              className="text-[#77736B] transition hover:text-[#252820]"
            >
              My Bookings
            </Link>

            <Link
              href="/provider"
              className="rounded-full bg-[#285B3F] px-5 py-3 text-white transition hover:bg-[#204A32]"
            >
              Switch to Provider →
            </Link>
          </div>

        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <span className="inline-flex rounded-full border border-[#DED3C1] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#285B3F]">
              Your neighbourhood, connected
            </span>

            <h1 className="mt-7 font-serif text-5xl font-medium leading-[1.08] tracking-tight text-[#252820] sm:text-6xl lg:text-7xl">
              Good people.
              <br />
              Great skills.
              <br />
              <span className="italic text-[#285B3F]">
                Right around the corner.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#625F57] sm:text-lg">
              Discover talented students offering helpful services
              in your neighbourhood. Find the right person for the
              things you need, all in one place.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#services"
                className="rounded-full bg-[#285B3F] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#204A32]"
              >
                Explore Services →
              </a>

              <Link
                href="/provider"
                className="rounded-full border border-[#285B3F] px-7 py-3.5 text-sm font-semibold text-[#285B3F] transition hover:bg-[#E7EDDF]"
              >
                Offer a Service
              </Link>
            </div>

          </div>

          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#DED3C1] pt-6 text-sm text-[#625F57]">
            <span>✳ Student-powered talent</span>
            <span>✳ Local services</span>
            <span>✳ Everyday convenience</span>
          </div>

        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="border-t border-[#E5DED2] bg-[#F0EBE1] px-6 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-9 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#285B3F]">
                Explore NearTask
              </p>

              <h2 className="mt-3 font-serif text-4xl font-medium text-[#252820] sm:text-5xl">
                Find your kind of help.
              </h2>

              <p className="mt-3 text-[#625F57]">
                Discover skilled people ready to help you.
              </p>
            </div>

            <p className="text-sm text-[#625F57]">
              {isLoaded ? `${filteredServices.length} services available` : "Loading services..."}
            </p>
          </div>

          {/* Search */}
          <div className="mb-6 rounded-2xl border border-[#E5DED2] bg-white p-3 shadow-sm">
            <SearchBar
              search={search}
              setSearch={setSearch}
            />
          </div>

          {/* Categories */}
          <div className="mb-9">
            <CategoryFilter
              selected={selected}
              setSelected={setSelected}
            />
          </div>

          {/* Results heading */}
          <div className="mb-6 flex items-center justify-between">
            <h3 className="font-serif text-2xl font-semibold text-[#252820]">
              Available Services
            </h3>

            <span className="text-sm text-[#625F57]">
              {isLoaded ? `${filteredServices.length} results` : "Loading..."}
            </span>
          </div>

          {/* Service Cards */}
          {!isLoaded ? (
            <div className="rounded-2xl border border-[#E5DED2] bg-white px-6 py-16 text-center">
              <p className="text-sm text-[#625F57]">
                Loading available services...
              </p>
            </div>
          ) : filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-[#E5DED2] bg-white px-6 py-16 text-center">
              <h3 className="font-serif text-2xl font-semibold text-[#252820]">
                No services found
              </h3>

              <p className="mt-2 text-[#625F57]">
                Try another search term or category.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setSelected("All");
                }}
                className="mt-5 rounded-full bg-[#285B3F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#204A32]"
              >
                Clear Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#252820] px-6 py-10 text-[#F6F2E9]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="font-serif text-2xl font-semibold">
              NearTask<span className="text-[#75A783]">.</span>
            </p>
            <p className="mt-1 text-sm text-[#D4D0C6]">
              Connecting local talent with local needs.
            </p>
          </div>

          <p className="text-xs text-[#D4D0C6]">
            © 2026 NearTask. All rights reserved.
          </p>

        </div>
      </footer>

    </main>
  );
}
