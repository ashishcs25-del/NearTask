
"use client";

import { useEffect, useState } from "react";

const defaultProfile = {
  name: "Local Service Provider",
  location: "Bengaluru",
  skills: "Technology, Education, Design",
};

export default function ProviderProfile() {
  const [profile, setProfile] = useState(defaultProfile);
  const [form, setForm] = useState(defaultProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedProfile = localStorage.getItem("neartask-provider-profile");

      if (savedProfile) {
        const parsedProfile = JSON.parse(savedProfile);

        setProfile({ ...defaultProfile, ...parsedProfile });
        setForm({ ...defaultProfile, ...parsedProfile });
      }
    } catch (error) {
      console.error("Error loading provider profile:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  }

  function handleSave(event) {
    event.preventDefault();

    const updatedProfile = {
      name: form.name.trim(),
      location: form.location.trim(),
      skills: form.skills.trim(),
    };

    if (!updatedProfile.name || !updatedProfile.location || !updatedProfile.skills) {
      alert("Please fill in all profile fields.");
      return;
    }

    try {
      localStorage.setItem(
        "neartask-provider-profile",
        JSON.stringify(updatedProfile)
      );

      setProfile(updatedProfile);
      setForm(updatedProfile);
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving provider profile:", error);
      alert("Could not save your profile. Please try again.");
    }
  }

  function handleCancel() {
    setForm(profile);
    setIsEditing(false);
  }

  if (!isLoaded) {
    return (
      <p className="text-sm text-[#625F57]">
        Loading your profile...
      </p>
    );
  }

  return (
    <div>
      {!isEditing ? (
        <>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {/* Provider Name */}
            <div className="rounded-2xl border border-[#DED8CA] bg-[#F0F3EB] p-5 transition hover:border-[#285B3F]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#DCEBDD] text-lg">
                  👤
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#285B3F]">
                    Provider Name
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#252820]">
                    {profile.name}
                  </p>
                </div>
              </div>
            </div>

            {/* Account Status */}
            <div className="rounded-2xl border border-[#DED8CA] bg-[#F0F3EB] p-5 transition hover:border-[#285B3F]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#DCEBDD] text-lg font-bold text-[#205B35]">
                  ✓
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#285B3F]">
                    Account Status
                  </p>

                  <span className="mt-1 inline-flex rounded-full border border-[#BBD4BE] bg-[#DCEBDD] px-3 py-1 text-xs font-bold text-[#205B35]">
                    Active
                  </span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="rounded-2xl border border-[#DED8CA] bg-[#F0F3EB] p-5 transition hover:border-[#285B3F]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#DCEBDD] text-lg">
                  📍
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#285B3F]">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#252820]">
                    {profile.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="rounded-2xl border border-[#DED8CA] bg-[#F0F3EB] p-5 transition hover:border-[#285B3F]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#DCEBDD] text-lg">
                  ✨
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#285B3F]">
                    Skills
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#252820]">
                    {profile.skills}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="mt-6 rounded-full bg-[#285B3F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#204A32] focus:outline-none focus:ring-2 focus:ring-[#285B3F] focus:ring-offset-2"
          >
            ✎ Edit Profile
          </button>
        </>
      ) : (
        <form onSubmit={handleSave} className="max-w-2xl space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#252820]">
              Provider Name
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full rounded-xl border border-[#DED8CA] bg-white px-4 py-3 text-sm text-[#252820] outline-none transition focus:border-[#285B3F] focus:ring-2 focus:ring-[#285B3F]/10"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#252820]">
              Location
            </label>

            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Enter your city or area"
              required
              className="w-full rounded-xl border border-[#DED8CA] bg-white px-4 py-3 text-sm text-[#252820] outline-none transition focus:border-[#285B3F] focus:ring-2 focus:ring-[#285B3F]/10"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#252820]">
              Skills
            </label>

            <textarea
              name="skills"
              value={form.skills}
              onChange={handleChange}
              placeholder="Example: Photography, Graphic Design, Tutoring"
              rows={3}
              required
              className="w-full resize-y rounded-xl border border-[#DED8CA] bg-white px-4 py-3 text-sm text-[#252820] outline-none transition focus:border-[#285B3F] focus:ring-2 focus:ring-[#285B3F]/10"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="submit"
              className="rounded-full bg-[#285B3F] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#204A32]"
            >
              Save Changes
            </button>

            <button
              type="button"
              onClick={handleCancel}
              className="rounded-full border border-[#DED8CA] bg-white px-7 py-3 text-sm font-semibold text-[#625F57] transition hover:bg-[#F0EBE1]"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
