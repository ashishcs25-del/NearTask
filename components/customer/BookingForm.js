
"use client";

import { useState } from "react";

export default function BookingForm({ service, onBookingSubmit }) {
  const [customerName, setCustomerName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const booking = {
      customerName,
      date,
      description,
      serviceId: service.id,
      serviceName: service.name,
      providerName: service.provider,
      price: service.price,
      location: service.location,
      status: "Pending",
    };

    onBookingSubmit(booking);
  }

  const inputStyle =
    "w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-4"
    >
      <h2 className="text-xl font-semibold text-gray-900">
        Request This Service
      </h2>

      <div>
        <label className="block text-sm font-medium text-gray-800 mb-2">
          Your Name
        </label>

        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          placeholder="Enter your name"
          required
          className={inputStyle}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-800 mb-2">
          Preferred Date
        </label>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={new Date().toISOString().split("T")[0]}
          required
          className={inputStyle}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-800 mb-2">
          Describe What You Need
        </label>

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Explain the service you need..."
          required
          rows={4}
          className={`${inputStyle} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Submit Booking Request
      </button>
    </form>
  );
}
