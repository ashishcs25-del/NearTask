
"use client";

import { useState } from "react";
import { useServices } from "../../context/ServiceContext";

const initialForm = {
  name: "",
  category: "",
  price: "",
  description: "",
  location: "",
};

export default function ServiceManager() {
  const { services, addService, deleteService, isLoaded } = useServices();

  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm((previousForm) => ({
      ...previousForm,
      [e.target.name]: e.target.value,
    }));
  }

  function handleAddService(e) {
    e.preventDefault();
    setError("");

    if (
      !form.name.trim() ||
      !form.category ||
      !form.price ||
      Number(form.price) <= 0 ||
      !form.description.trim() ||
      !form.location.trim()
    ) {
      setError("Please complete all fields and enter a valid price.");
      return;
    }

    let providerName = "Local Service Provider";

    try {
      const savedProfile = localStorage.getItem("neartask-provider-profile");

      if (savedProfile) {
        const profile = JSON.parse(savedProfile);
        if (profile.name?.trim()) {
          providerName = profile.name.trim();
        }
      }
    } catch (error) {
      console.error("Could not load provider name:", error);
    }

    addService({
      name: form.name.trim(),
      provider: providerName,
      category: form.category,
      price: Number(form.price),
      location: form.location.trim(),
      description: form.description.trim(),
      image: "✳",
    });

    setForm(initialForm);
    setShowForm(false);
    setError("");
  }

  function handleDelete(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this service?"
    );

    if (confirmed) {
      deleteService(id);
    }
  }

  const inputStyle =
    "mt-2 w-full rounded-xl border border-[#DED8CA] bg-[#FFFEFA] px-4 py-3 text-sm text-[#252820] placeholder:text-[#888579] outline-none transition focus:border-[#285B3F] focus:ring-2 focus:ring-[#285B3F]/20";

  if (!isLoaded) {
    return (
      <div className="py-8 text-sm text-[#625F57]">
        Loading your services...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Section Heading */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#285B3F]">
            Your offerings
          </p>

          <h3 className="mt-2 font-serif text-3xl font-semibold text-[#252820]">
            Your Services
          </h3>

          <p className="mt-2 text-sm text-[#625F57]">
            Manage the services you offer to customers.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            setShowForm(!showForm);
            setError("");
          }}
          className="w-fit rounded-full bg-[#285B3F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#204A32] focus:outline-none focus:ring-2 focus:ring-[#285B3F] focus:ring-offset-2"
        >
          {showForm ? "Cancel" : "+ Add Service"}
        </button>
      </div>

      {/* Add Service Form */}
      {showForm && (
        <form
          onSubmit={handleAddService}
          className="rounded-2xl border border-[#D5DFC9] bg-[#F0F3EB] p-5 sm:p-6"
        >
          <h4 className="font-serif text-2xl font-semibold text-[#252820]">
            Add a new service
          </h4>

          <p className="mt-2 text-sm text-[#625F57]">
            Tell customers what you can help them with.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {/* Service Name */}
            <div>
              <label
                htmlFor="service-name"
                className="text-sm font-semibold text-[#252820]"
              >
                Service Name
              </label>

              <input
                id="service-name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Mathematics Tutoring"
                required
                className={inputStyle}
              />
            </div>

            {/* Category */}
            <div>
              <label
                htmlFor="service-category"
                className="text-sm font-semibold text-[#252820]"
              >
                Category
              </label>

              <select
                id="service-category"
                name="category"
                value={form.category}
                onChange={handleChange}
                required
                className={inputStyle}
              >
                <option value="">Select category</option>
                <option value="Technology">Technology</option>
                <option value="Education">Education</option>
                <option value="Design">Design</option>
                <option value="Home Services">Home Services</option>
                <option value="Creative">Creative</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Price */}
            <div>
              <label
                htmlFor="service-price"
                className="text-sm font-semibold text-[#252820]"
              >
                Starting Price (₹)
              </label>

              <input
                id="service-price"
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                placeholder="500"
                min="1"
                step="1"
                required
                className={inputStyle}
              />
            </div>

            {/* Location */}
            <div>
              <label
                htmlFor="service-location"
                className="text-sm font-semibold text-[#252820]"
              >
                Service Location
              </label>

              <input
                id="service-location"
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="e.g. Bengaluru, Indiranagar"
                required
                className={inputStyle}
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label
                htmlFor="service-description"
                className="text-sm font-semibold text-[#252820]"
              >
                Service Description
              </label>

              <textarea
                id="service-description"
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Describe what you offer, your experience and how you can help customers..."
                rows={4}
                required
                className={inputStyle}
              />
            </div>
          </div>

          {error && (
            <p className="mt-4 rounded-xl border border-[#EAC9C1] bg-[#F8E8E4] px-4 py-3 text-sm font-medium text-[#963F32]">
              {error}
            </p>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="submit"
              className="rounded-full bg-[#285B3F] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#204A32]"
            >
              Save Service →
            </button>

            <button
              type="button"
              onClick={() => {
                setShowForm(false);
                setForm(initialForm);
                setError("");
              }}
              className="rounded-full border border-[#285B3F] px-7 py-3 text-sm font-semibold text-[#285B3F] transition hover:bg-[#E7EDDF]"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Service List */}
      {services.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-[#D5DFC9] bg-[#F0F3EB] px-6 py-12 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E7EDDF] text-2xl text-[#285B3F]">
            ✳
          </div>

          <h4 className="mt-4 font-serif text-2xl font-semibold text-[#252820]">
            No services yet
          </h4>

          <p className="mt-2 text-sm text-[#625F57]">
            Add your first service to start receiving bookings.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col gap-4 rounded-2xl border border-[#DED8CA] bg-[#FFFEFA] p-5 transition hover:border-[#285B3F] sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h4 className="font-serif text-xl font-semibold text-[#252820]">
                  {service.name}
                </h4>

                <p className="mt-2 text-sm text-[#625F57]">
                  {service.category}
                  <span className="mx-2 text-[#DED8CA]">·</span>
                  Starting from{" "}
                  <span className="font-bold text-[#252820]">
                    ₹{service.price}
                  </span>
                </p>

                {service.location && (
                  <p className="mt-1 text-xs text-[#77736B]">
                    📍 {service.location}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-4">
                <span className="rounded-full border border-[#BBD4BE] bg-[#DCEBDD] px-4 py-1.5 text-xs font-bold text-[#205B35]">
                  {service.status || "Active"}
                </span>

                <button
                  type="button"
                  onClick={() => handleDelete(service.id)}
                  className="text-sm font-semibold text-[#A45F50] transition hover:text-[#843F32] hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Service Count */}
      <p className="text-xs font-medium text-[#625F57]">
        {services.length} {services.length === 1 ? "service" : "services"} listed
      </p>
    </div>
  );
}
