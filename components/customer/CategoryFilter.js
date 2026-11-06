
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
    <div className="my-6 flex flex-wrap justify-center gap-3">
      {categories.map((category) => {
        const isSelected = selected === category;

        return (
          <button
            key={category}
            onClick={() => setSelected(category)}
            aria-pressed={isSelected}
            className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
              isSelected
                ? "border-[#285B3F] bg-[#285B3F] text-white shadow-md"
                : "border-[#D5DFC9] bg-[#FFFEFA] text-[#285B3F] hover:border-[#285B3F] hover:bg-[#E7EDDF]"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
