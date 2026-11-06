export default function ProviderProfile() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div>
        <p className="text-xs font-medium uppercase text-[#64748B]">
          Provider Name
        </p>
        <p className="mt-1 text-sm font-semibold text-[#111827]">
          Local Service Provider
        </p>
      </div>

      <div>
        <p className="text-xs font-medium uppercase text-[#64748B]">
          Status
        </p>
        <span className="mt-1 inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">
          Active
        </span>
      </div>

      <div>
        <p className="text-xs font-medium uppercase text-[#64748B]">
          Location
        </p>
        <p className="mt-1 text-sm font-semibold text-[#111827]">
          Bengaluru
        </p>
      </div>
    </div>
  );
}