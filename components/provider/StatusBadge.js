
export default function StatusBadge({ status }) {
  const styles = {
    Pending:
      "bg-[#F5EBD7] text-[#805B1D] border-[#E6D4AD]",

    Accepted:
      "bg-[#DCEBDD] text-[#205B35] border-[#BBD4BE]",

    Completed:
      "bg-[#DDEAE2] text-[#245C43] border-[#BBD5C5]",

    Rejected:
      "bg-[#F8E8E4] text-[#963F32] border-[#EAC9C1]",
  };

  const style =
    styles[status] ||
    "bg-[#F0EBE1] text-[#625F57] border-[#DED8CA]";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-bold ${style}`}
    >
      {status}
    </span>
  );
}
