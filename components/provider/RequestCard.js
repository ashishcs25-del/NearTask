
"use client";

import { useBookings } from "../../context/BookingContext";
import StatusBadge from "./StatusBadge";

export default function RequestCard({
  id,
  customerName,
  serviceName,
  date,
  time,
  status,
}) {
  const { updateBookingStatus } = useBookings();

  return (
    <article className="rounded-2xl border border-[#DED8CA] bg-[#FFFEFA] p-5 transition hover:border-[#285B3F] hover:shadow-sm sm:p-6">

      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">

        {/* Booking Information */}
        <div className="min-w-0 flex-1">

          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-serif text-xl font-semibold text-[#252820]">
              {serviceName || "Service Request"}
            </h3>

            <StatusBadge status={status} />
          </div>

          <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#77736B]">
                Customer
              </p>

              <p className="mt-1 font-semibold text-[#252820]">
                {customerName || "Not provided"}
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#77736B]">
                Preferred Date
              </p>

              <p className="mt-1 font-semibold text-[#252820]">
                {date || "Not specified"}
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#77736B]">
                Preferred Time
              </p>

              <p className="mt-1 font-semibold text-[#252820]">
                {time || "Not specified"}
              </p>
            </div>

          </div>
        </div>

        {/* Booking Actions */}
        <div className="flex flex-wrap items-center gap-2 md:justify-end">

          {status === "Pending" && (
            <>
              <button
                type="button"
                onClick={() => updateBookingStatus(id, "Accepted")}
                className="rounded-full bg-[#285B3F] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#204A32] focus:outline-none focus:ring-2 focus:ring-[#285B3F] focus:ring-offset-2"
              >
                Accept
              </button>

              <button
                type="button"
                onClick={() => updateBookingStatus(id, "Rejected")}
                className="rounded-full border border-[#D8B8AD] px-5 py-2.5 text-sm font-semibold text-[#A45F50] transition hover:bg-[#F8EDE9]"
              >
                Reject
              </button>
            </>
          )}

          {status === "Accepted" && (
            <button
              type="button"
              onClick={() => updateBookingStatus(id, "Completed")}
              className="rounded-full border border-[#285B3F] bg-[#E7EDDF] px-5 py-2.5 text-sm font-semibold text-[#285B3F] transition hover:bg-[#D8E5D7] focus:outline-none focus:ring-2 focus:ring-[#285B3F] focus:ring-offset-2"
            >
              Mark Completed ✓
            </button>
          )}

        </div>

      </div>
    </article>
  );
}
