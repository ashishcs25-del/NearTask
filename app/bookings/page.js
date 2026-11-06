
"use client";

import Link from "next/link";
import { useBookings } from "@/context/BookingContext";

export default function MyBookings() {
  const { bookings, deleteBooking, isLoaded } = useBookings();

  const statusStyles = {
    Pending: "bg-amber-100 text-amber-800",
    Accepted: "bg-green-100 text-green-800",
    Rejected: "bg-red-100 text-red-800",
    Completed: "bg-blue-100 text-blue-800",
  };

  if (!isLoaded) {
    return (
      <main className="min-h-screen bg-slate-50 p-10 text-center text-gray-600">
        Loading your bookings...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">

      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            NearTask
          </Link>

          <div className="flex gap-6 text-sm">
            <Link href="/" className="text-gray-600 hover:text-blue-600">
              Explore Services
            </Link>

            <Link href="/bookings" className="text-blue-600 font-semibold">
              My Bookings
            </Link>

            <Link href="/provider" className="text-gray-600 hover:text-blue-600">
              Provider Dashboard
            </Link>
          </div>
        </div>
      </nav>

      <section className="max-w-5xl mx-auto px-6 py-12">

        <h1 className="text-3xl font-bold text-gray-900">
          My Bookings
        </h1>

        <p className="text-gray-500 mt-2 mb-8">
          Track your service requests and booking status.
        </p>

        {bookings.length === 0 ? (

          <div className="bg-white border border-gray-200 rounded-xl p-12 text-center">
            <div className="text-5xl mb-4">📋</div>

            <h2 className="text-xl font-semibold text-gray-900">
              No bookings yet
            </h2>

            <p className="text-gray-500 mt-2">
              You haven't requested any services yet.
            </p>

            <Link
              href="/"
              className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Explore Services
            </Link>
          </div>

        ) : (

          <div className="space-y-5">

            {bookings.map((booking) => (

              <div
                key={booking.id}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
              >

                <div className="flex flex-col sm:flex-row justify-between gap-4">

                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      {booking.serviceName}
                    </h2>

                    <p className="text-gray-500 mt-1">
                      Provider: {booking.providerName || booking.provider || "Not specified"}
                    </p>

                    <p className="text-gray-500 mt-1">
                      Customer: {booking.customerName}
                    </p>
                  </div>

                  <div>
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                      statusStyles[booking.status] || "bg-gray-100 text-gray-700"
                    }`}>
                      {booking.status}
                    </span>
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-5 border-t border-gray-100">

                  <div>
                    <p className="text-sm text-gray-500">Preferred Date</p>
                    <p className="font-medium text-gray-900 mt-1">
                      {booking.date || "Not specified"}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Price</p>
                    <p className="font-medium text-gray-900 mt-1">
                      {booking.price != null ? `₹${booking.price}` : "To be discussed"}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium text-gray-900 mt-1">
                      {booking.location || "Not specified"}
                    </p>
                  </div>

                </div>

                <div className="mt-5">
                  <p className="text-sm text-gray-500">
                    Your Requirements
                  </p>

                  <p className="text-gray-700 mt-1">
                    {booking.description || "No additional requirements."}
                  </p>
                </div>

                {booking.status === "Pending" && (
                  <div className="mt-5 pt-4 border-t border-gray-100 flex justify-end">
                    <button
                      onClick={() => {
                        if (window.confirm("Are you sure you want to delete this booking?")) {
                          deleteBooking(booking.id);
                        }
                      }}
                      className="text-sm font-semibold text-red-600 hover:text-red-800"
                    >
                      Remove Booking
                    </button>
                  </div>
                )}

              </div>

            ))}

          </div>

        )}

      </section>

    </main>
  );
}
