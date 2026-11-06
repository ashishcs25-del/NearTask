"use client";

import ProviderProfile from "../../components/provider/ProviderProfile";
import ServiceManager from "../../components/provider/ServiceManager";
import RequestCard from "../../components/provider/RequestCard";
import EmptyRequests from "../../components/provider/EmptyRequests";
import { useBookings } from "../../context/BookingContext";

export default function ProviderDashboard() {
  const { bookings } = useBookings();

  const activeServices = 2;

  const pendingBookings = bookings.filter(
    (booking) => booking.status === "Pending"
  ).length;

  const completedJobs = bookings.filter(
    (booking) => booking.status === "Completed"
  ).length;

  const stats = [
    {
      title: "Active Services",
      value: activeServices,
      description: "Services currently listed",
    },
    {
      title: "Pending Bookings",
      value: pendingBookings,
      description: "Requests waiting for action",
    },
    {
      title: "Completed Jobs",
      value: completedJobs,
      description: "Jobs completed",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <header className="border-b border-[#E2E8F0] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <h1 className="text-3xl font-bold text-[#111827]">
            Provider Dashboard
          </h1>

          <p className="mt-1 text-sm text-[#64748B]">
            Welcome back. Manage your services and booking requests.
          </p>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="mx-auto max-w-7xl space-y-6 px-6 py-8">

        {/* Stats */}
        <section className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-xl border border-[#E2E8F0] bg-white p-5"
            >
              <p className="text-sm font-medium text-[#64748B]">
                {stat.title}
              </p>

              <p className="mt-2 text-3xl font-bold text-[#111827]">
                {stat.value}
              </p>

              <p className="mt-1 text-xs text-[#64748B]">
                {stat.description}
              </p>
            </div>
          ))}
        </section>

        {/* Provider Profile */}
        <section className="rounded-xl border border-[#E2E8F0] bg-white p-6">
          <div className="mb-5">
            <h2 className="text-xl font-semibold text-[#111827]">
              Provider Profile
            </h2>

            <p className="mt-1 text-sm text-[#64748B]">
              Your provider information
            </p>
          </div>

          <ProviderProfile />
        </section>

        {/* Services */}
        <section className="rounded-xl border border-[#E2E8F0] bg-white p-6">
          <ServiceManager />
        </section>

        {/* Booking Requests */}
        <section className="rounded-xl border border-[#E2E8F0] bg-white p-6">
          <div className="mb-5">
            <h2 className="text-xl font-semibold text-[#111827]">
              Recent Booking Requests
            </h2>

            <p className="mt-1 text-sm text-[#64748B]">
              Manage requests from customers.
            </p>
          </div>

          <div className="space-y-4">
            {bookings.length === 0 ? (
              <EmptyRequests />
            ) : (
              bookings.map((booking) => (
                <RequestCard
                  key={booking.id}
                  id={booking.id}
                  customerName={booking.customerName}
                  serviceName={booking.serviceName}
                  date={booking.date}
                  time={booking.time}
                  status={booking.status}
                />
              ))
            )}
          </div>
        </section>

      </div>
    </main>
  );
}