export default function EmptyRequests() {
  return (
    <div className="rounded-xl border border-dashed border-[#CBD5E1] bg-white p-8 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#EFF6FF] text-xl">
        📋
      </div>

      <h3 className="mt-4 font-semibold text-[#111827]">
        No booking requests
      </h3>

      <p className="mx-auto mt-2 max-w-md text-sm text-[#64748B]">
        New customer booking requests will appear here when someone books one
        of your services.
      </p>
    </div>
  );
}