"use client";

import { useState } from "react";

export default function ServiceManager() {
  const [services, setServices] = useState([
    {
      id: 1,
      name: "Home Cleaning",
      category: "Cleaning",
      price: "₹500",
      status: "Active",
    },
    {
      id: 2,
      name: "AC Repair",
      category: "Repair",
      price: "₹800",
      status: "Active",
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleAddService(e) {
    e.preventDefault();

    if (!form.name || !form.category || !form.price) {
      return;
    }

    const newService = {
      id: Date.now(),
      name: form.name,
      category: form.category,
      price: `₹${form.price}`,
      status: "Active",
    };

    setServices([...services, newService]);

    setForm({
      name: "",
      category: "",
      price: "",
    });

    setShowForm(false);
  }

  function handleDelete(id) {
    setServices(services.filter((service) => service.id !== id));
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-[#111827]">
            Your Services
          </h3>

          <p className="mt-1 text-sm text-[#64748B]">
            Manage the services you offer to customers.
          </p>
        </div>

        <button
          onClick={() => setShowForm(!showForm)}
          className="rounded-lg bg-[#2563EB] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
        >
          {showForm ? "Cancel" : "+ Add Service"}
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleAddService}
          className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-4"
        >
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="text-sm font-medium text-[#111827]">
                Service Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Plumbing"
                className="mt-2 w-full rounded-lg border border-[#E2E8F0] bg-white px-3 py-2 text-sm outline-none focus:border-[#2563EB]"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#111827]">
                Category
              </label>

              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-[#E2E8F0] bg-white px-3 py-2 text-sm outline-none focus:border-[#2563EB]"
              >
                <option value="">Select category</option>
                <option value="Cleaning">Cleaning</option>
                <option value="Repair">Repair</option>
                <option value="Beauty">Beauty</option>
                <option value="Home Services">Home Services</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-[#111827]">
                Starting Price
              </label>

              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                placeholder="500"
                className="mt-2 w-full rounded-lg border border-[#E2E8F0] bg-white px-3 py-2 text-sm outline-none focus:border-[#2563EB]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 rounded-lg bg-[#0F766E] px-4 py-2 text-sm font-semibold text-white hover:bg-teal-700"
          >
            Save Service
          </button>
        </form>
      )}

      {services.length === 0 ? (
        <div className="rounded-xl border border-dashed border-[#CBD5E1] p-8 text-center">
          <p className="font-medium text-[#111827]">No services yet</p>

          <p className="mt-1 text-sm text-[#64748B]">
            Add your first service to start receiving bookings.
          </p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-[#E2E8F0]">
          <div className="divide-y divide-[#E2E8F0]">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex flex-col gap-3 p-4 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <h4 className="font-semibold text-[#111827]">
                    {service.name}
                  </h4>

                  <p className="mt-1 text-sm text-[#64748B]">
                    {service.category} · Starting from {service.price}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">
                    {service.status}
                  </span>

                  <button
                    onClick={() => handleDelete(service.id)}
                    className="text-sm font-medium text-[#DC2626] hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}