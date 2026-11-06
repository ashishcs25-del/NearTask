
import Link from "next/link";

export default function ServiceCard({ service }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
      
      <div className="flex items-center justify-between mb-4">
        <span className="text-4xl">{service.image}</span>
        <span className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
          {service.category}
        </span>
      </div>

      <h2 className="text-xl font-semibold text-gray-900">
        {service.name}
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        Provided by {service.provider}
      </p>

      <p className="text-sm text-gray-600 mt-3">
        {service.description}
      </p>

      <div className="flex justify-between items-center mt-5">
        <span className="text-lg font-bold text-gray-900">
          ₹{service.price}
        </span>

        <span className="text-sm text-yellow-600">
          ★ {service.rating}
        </span>
      </div>

      <p className="text-sm text-gray-500 mt-2">
        📍 {service.location}
      </p>

      <Link
        href={`/services/${service.id}`}
        className="block text-center bg-blue-600 text-white py-2.5 rounded-lg mt-4 hover:bg-blue-700 transition"
      >
        View Details
      </Link>

    </div>
  );
}
