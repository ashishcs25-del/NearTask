"use client";

import { useState } from "react";

// Get today's date in the user's local timezone (not UTC)
function getLocalDateString() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export default function BookingForm({ service, onBookingSubmit }) {
  const [customerName, setCustomerName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const today = getLocalDateString();

    if (date < today) {
      setError("Please select today or a future date.");
      return;
    }

    if (!customerName.trim() || !description.trim()) {
      setError("Please fill in all the required fields.");
      return;
    }

    setError("");

    const booking = {
      customerName: customerName.trim(),
      date,
      description: description.trim(),
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
          onChange={(e) => {
            setDate(e.target.value);
            setError("");
          }}
          min={getLocalDateString()}
          required
          className={inputStyle}
        />

        <p className="text-xs text-gray-500 mt-1">
          You can choose today or any future date.
        </p>
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

      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Submit Booking Request
      </button>
    </form>
  );
}