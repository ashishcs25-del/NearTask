
export default function SearchBar({ search, setSearch }) {
  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="flex items-center gap-3 rounded-2xl border border-[#DED8CA] bg-[#FFFEFA] px-5 py-1 shadow-sm transition-all duration-200 focus-within:border-[#285B3F] focus-within:ring-2 focus-within:ring-[#285B3F]/20">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="21"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#285B3F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="What service are you looking for?"
          aria-label="Search services"
          className="w-full bg-transparent py-4 text-sm text-[#252820] placeholder:text-[#888579] focus:outline-none"
        />

        {search && (
          <button
            type="button"
            onClick={() => setSearch("")}
            aria-label="Clear search"
            className="shrink-0 rounded-full px-2 py-1 text-sm font-semibold text-[#285B3F] transition hover:bg-[#E7EDDF]"
          >
            ✕
          </button>
        )}

      </div>
    </div>
  );
}
