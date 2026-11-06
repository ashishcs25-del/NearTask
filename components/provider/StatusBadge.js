export default function StatusBadge({ status }) {
  const styles = {
    Pending: "bg-yellow-100 text-yellow-800",
    Accepted: "bg-green-100 text-green-800",
    Completed: "bg-blue-100 text-blue-800",
    Rejected: "bg-red-100 text-red-800",
  };

  const style = styles[status] || "bg-gray-100 text-gray-800";

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${style}`}
    >
      {status}
    </span>
  );
}