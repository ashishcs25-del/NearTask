
const categories = [
  "All",
  "Technology",
  "Education",
  "Design",
  "Home Services",
  "Creative",
];

export default function CategoryFilter({ selected, setSelected }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 my-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelected(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            selected === category
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-blue-100"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
