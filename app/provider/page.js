
"use client";

import Link from "next/link";

import ProviderProfile from "../../components/provider/ProviderProfile";
import ServiceManager from "../../components/provider/ServiceManager";
import RequestCard from "../../components/provider/RequestCard";
import EmptyRequests from "../../components/provider/EmptyRequests";
import { useBookings } from "../../context/BookingContext";
import { useServices } from "../../context/ServiceContext";

export default function ProviderDashboard() {
  const { bookings } = useBookings();
  const { services } = useServices();

  const activeServices = services.filter(
    (service) => (service.status || "Active") === "Active"
  ).length;

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
      icon: "✳",
    },
    {
      title: "Pending Bookings",
      value: pendingBookings,
      description: "Requests waiting for action",
      icon: "◷",
    },
    {
      title: "Completed Jobs",
      value: completedJobs,
      description: "Jobs successfully completed",
      icon: "✓",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F6F2E9] text-[#252820]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-[#E5DED2] bg-[#F6F2E9]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              href="/"
              className="font-serif text-3xl font-semibold tracking-tight text-[#252820]"
            >
              NearTask<span className="text-[#285B3F]">.</span>
            </Link>

            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-[#285B3F]">
              Provider workspace
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex w-fit items-center justify-center rounded-full bg-[#285B3F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#204A32] focus:outline-none focus:ring-2 focus:ring-[#285B3F] focus:ring-offset-2"
          >
            Switch to Customer →
          </Link>
        </div>
      </header>

      {/* Dashboard */}
      <div className="mx-auto max-w-7xl space-y-10 px-6 py-10">
        {/* Welcome */}
        <section>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#285B3F]">
            Your workspace
          </p>

          <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight text-[#252820] sm:text-5xl">
            Provider Dashboard
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#625F57] sm:text-base">
            Welcome back. Keep track of your services, connect with
            customers and manage your booking requests.
          </p>
        </section>

        {/* Stats */}
        <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-2xl border border-[#DED8CA] bg-[#FFFEFA] p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#285B3F] hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-[#625F57]">
                  {stat.title}
                </p>

                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E7EDDF] text-xl font-semibold text-[#285B3F]">
                  {stat.icon}
                </span>
              </div>

              <p className="mt-5 font-serif text-4xl font-semibold text-[#252820]">
                {stat.value}
              </p>

              <p className="mt-2 text-xs text-[#77736B]">
                {stat.description}
              </p>
            </div>
          ))}
        </section>

        {/* Provider Profile */}
        <section className="rounded-2xl border border-[#DED8CA] bg-[#FFFEFA] p-6 shadow-sm sm:p-8">
          <div className="mb-7 border-b border-[#E5DED2] pb-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#285B3F]">
              Your account
            </p>

            <h2 className="mt-2 font-serif text-3xl font-semibold text-[#252820]">
              Provider Profile
            </h2>

            <p className="mt-2 text-sm text-[#625F57]">
              Manage your provider information.
            </p>
          </div>

          <ProviderProfile />
        </section>

        {/* Services */}
        <section className="rounded-2xl border border-[#DED8CA] bg-[#FFFEFA] p-6 shadow-sm sm:p-8">
          <ServiceManager />
        </section>

        {/* Booking Requests */}
        <section className="rounded-2xl border border-[#DED8CA] bg-[#FFFEFA] p-6 shadow-sm sm:p-8">
          <div className="mb-7 border-b border-[#E5DED2] pb-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#285B3F]">
              Customer activity
            </p>

            <h2 className="mt-2 font-serif text-3xl font-semibold text-[#252820]">
              Booking Requests
            </h2>

            <p className="mt-2 text-sm text-[#625F57]">
              Review and manage requests from your customers.
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

      {/* Footer */}
      <footer className="mt-12 border-t border-[#E5DED2] bg-[#252820] px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-xl font-semibold text-[#F6F2E9]">
            NearTask<span className="text-[#75A783]">.</span>
          </p>

          <p className="text-xs text-[#D4D0C6]">
            Connecting local talent with local needs.
          </p>
        </div>
      </footer>
    </main>
  );
}
