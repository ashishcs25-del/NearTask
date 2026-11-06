
export default function EmptyRequests() {
  return (
    <div className="rounded-2xl border border-dashed border-[#DED3C1] bg-[#F6F2E9] px-6 py-12 text-center">

      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E9E5D9] text-3xl">
        📋
      </div>

      <h3 className="mt-5 font-serif text-2xl font-semibold text-[#34352F]">
        Nothing on your list yet.
      </h3>

      <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#77736B]">
        Your next opportunity could be just around the corner.
        Once a customer requests one of your services, their booking
        details will appear here.
      </p>

      <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#E7EDDF] px-4 py-2 text-xs font-semibold text-[#626B50]">
        ✳ Ready for your first booking
      </div>

    </div>
  );
}
