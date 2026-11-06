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
    <div className="rounded-xl border border-[#E2E8F0] bg-white p-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <h3 className="font-semibold text-[#111827]">
              {serviceName}
            </h3>

            <StatusBadge status={status} />
          </div>

          <div className="mt-3 space-y-1 text-sm text-[#64748B]">
            <p>
              <span className="font-medium text-[#111827]">
                Customer:
              </span>{" "}
              {customerName}
            </p>

            <p>
              <span className="font-medium text-[#111827]">
                Date:
              </span>{" "}
              {date}
            </p>

            <p>
              <span className="font-medium text-[#111827]">
                Time:
              </span>{" "}
              {time}
            </p>
          </div>
        </div>

        {status === "Pending" && (
          <div className="flex gap-2">
            <button
              onClick={() => updateBookingStatus(id, "Accepted")}
              className="rounded-lg bg-[#16A34A] px-4 py-2 text-sm font-semibold text-white hover:bg-green-700"
            >
              Accept
            </button>

            <button
              onClick={() => updateBookingStatus(id, "Rejected")}
              className="rounded-lg border border-[#DC2626] px-4 py-2 text-sm font-semibold text-[#DC2626] hover:bg-red-50"
            >
              Reject
            </button>
          </div>
        )}
      </div>
    </div>
  );
}