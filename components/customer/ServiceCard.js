
import Link from "next/link";

export default function ServiceCard({ service }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-[#DED8CA] bg-[#FFFEFA] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#285B3F] hover:shadow-lg">

      {/* Icon and Category */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E7EDDF] text-4xl transition duration-300 group-hover:bg-[#D8E5D7]">
          {service.image || "✳"}
        </div>

        <span className="rounded-full border border-[#C9D9CA] bg-[#E7EDDF] px-3 py-1.5 text-xs font-semibold text-[#285B3F]">
          {service.category}
        </span>
      </div>

      {/* Service Information */}
      <div className="flex-1">
        <h2 className="font-serif text-2xl font-semibold tracking-tight text-[#252820]">
          {service.name}
        </h2>

        <p className="mt-2 text-sm font-medium text-[#285B3F]">
          Offered by {service.provider}
        </p>

        <p className="mt-4 text-sm leading-7 text-[#625F57]">
          {service.description}
        </p>
      </div>

      {/* Price and Rating */}
      <div className="mt-6 flex items-center justify-between border-t border-[#E5DED2] pt-5">
        <div>
          <p className="text-xs uppercase tracking-wider text-[#77736B]">
            Starting from
          </p>

          <p className="mt-1 text-xl font-bold text-[#252820]">
            ₹{service.price}
          </p>
        </div>

        <div className="rounded-lg border border-[#D5DFC9] bg-[#E7EDDF] px-3 py-2">
          <span className="text-sm font-bold text-[#285B3F]">
            ★ {service.rating}
          </span>
        </div>
      </div>

      {/* Location */}
      <p className="mt-4 flex items-center gap-2 text-sm text-[#625F57]">
        <span>📍</span>
        {service.location}
      </p>

      {/* Action */}
      <Link
        href={`/services/${service.id}`}
        className="mt-5 block rounded-full bg-[#285B3F] px-5 py-3 text-center text-sm font-semibold text-white transition duration-200 hover:bg-[#204A32] focus:outline-none focus:ring-2 focus:ring-[#285B3F] focus:ring-offset-2"
      >
        View Details →
      </Link>

    </article>
  );
}
