"use client";

import { createContext, useContext, useState } from "react";

const BookingContext = createContext();

export function BookingProvider({ children }) {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      customerName: "Rahul Sharma",
      serviceName: "Home Cleaning",
      date: "12 Nov 2026",
      time: "10:00 AM",
      status: "Pending",
    },
    {
      id: 2,
      customerName: "Priya Singh",
      serviceName: "AC Repair",
      date: "10 Nov 2026",
      time: "2:00 PM",
      status: "Accepted",
    },
  ]);

  function addBooking(booking) {
    setBookings((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...booking,
        status: "Pending",
      },
    ]);
  }

  function updateBookingStatus(id, status) {
    setBookings((prev) =>
      prev.map((booking) =>
        booking.id === id ? { ...booking, status } : booking
      )
    );
  }

  return (
    <BookingContext.Provider
      value={{
        bookings,
        addBooking,
        updateBookingStatus,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBookings() {
  return useContext(BookingContext);
}