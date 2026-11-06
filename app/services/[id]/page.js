
"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

import services from "@/data/services";
import BookingForm from "@/components/customer/BookingForm";
import { useBookings } from "@/context/BookingContext";

export default function ServiceDetails() {
  const params = useParams();
  const router = useRouter();

  const { addBooking } = useBookings();

  const service = services.find(
    (item) => item.id === params.id
  );

  if (!service) {
    return (
      <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-900">
          Service Not Found
        </h1>

        <Link
          href="/"
          className="mt-4 text-blue-600 hover:underline"
        >
          Back to Services
        </Link>
      </main>
    );
  }

  function handleBookingSubmit(booking) {
    addBooking(booking);

    alert("Your booking request has been submitted!");

    router.push("/bookings");
  }

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">

          <Link href="/" className="text-2xl font-bold text-blue-600">
            NearTask
          </Link>

          <Link
            href="/"
            className="text-gray-600 hover:text-blue-600"
          >
            ← Back to Services
          </Link>

        </div>
      </nav>

      {/* Service Details */}
      <section className="max-w-5xl mx-auto px-6 py-12">

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">

          <div className="text-6xl mb-6">
            {service.image}
          </div>

          <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm">
            {service.category}
          </span>

          <h1 className="text-3xl font-bold text-gray-900 mt-5">
            {service.name}
          </h1>

          <p className="text-gray-600 mt-3">
            {service.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">

            <div>
              <p className="text-sm text-gray-500">Provider</p>
              <p className="font-semibold text-gray-900 mt-1">
                {service.provider}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Price</p>
              <p className="font-semibold text-gray-900 mt-1">
                ₹{service.price}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Rating</p>
              <p className="font-semibold text-gray-900 mt-1">
                ★ {service.rating}
              </p>
            </div>

          </div>

          <div className="mt-6">
            <p className="text-sm text-gray-500">Location</p>
            <p className="font-semibold text-gray-900 mt-1">
              📍 {service.location}
            </p>
          </div>

        </div>

        {/* Booking Form */}
        <div className="mt-8 max-w-2xl mx-auto">
          <BookingForm
            service={service}
            onBookingSubmit={handleBookingSubmit}
          />
        </div>

      </section>

    </main>
  );
}
