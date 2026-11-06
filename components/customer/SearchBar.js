
export default function SearchBar({ search, setSearch }) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for services, e.g. laptop repair..."
        className="w-full px-5 py-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
