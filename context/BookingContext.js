
"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const BookingContext = createContext(null);

export function BookingProvider({ children }) {
  const [bookings, setBookings] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved bookings once when the app starts
  useEffect(() => {
    try {
      const savedBookings = localStorage.getItem("neartask-bookings");

      if (savedBookings) {
        setBookings(JSON.parse(savedBookings));
      }
    } catch (error) {
      console.error("Error loading bookings:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save bookings only after initial loading is complete
  useEffect(() => {
    if (!isLoaded) return;

    try {
      localStorage.setItem(
        "neartask-bookings",
        JSON.stringify(bookings)
      );
    } catch (error) {
      console.error("Error saving bookings:", error);
    }
  }, [bookings, isLoaded]);

  // Add a new booking
  function addBooking(booking) {
    const newBooking = {
      ...booking,
      id: Date.now(),
      status: "Pending",
    };

    setBookings((previousBookings) => [
      ...previousBookings,
      newBooking,
    ]);

    return newBooking;
  }

  // Update booking status
  function updateBookingStatus(id, newStatus) {
    if (!["Pending", "Accepted", "Rejected", "Completed"].includes(newStatus)) {
      return;
    }

    setBookings((previousBookings) =>
      previousBookings.map((booking) =>
        booking.id === id
          ? { ...booking, status: newStatus }
          : booking
      )
    );
  }

  // Delete a booking
  function deleteBooking(id) {
    setBookings((previousBookings) =>
      previousBookings.filter((booking) => booking.id !== id)
    );
  }

  return (
    <BookingContext.Provider
      value={{
        bookings,
        addBooking,
        updateBookingStatus,
        deleteBooking,
        isLoaded,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

// Custom hook
export function useBookings() {
  const context = useContext(BookingContext);

  if (!context) {
    throw new Error(
      "useBookings must be used inside BookingProvider"
    );
  }

  return context;
}
