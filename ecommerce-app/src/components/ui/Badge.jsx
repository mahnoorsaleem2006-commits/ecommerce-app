const variants = {
  'Best Seller': 'bg-amber-100 text-amber-800',
  'New': 'bg-green-100 text-green-800',
  'Sale': 'bg-red-100 text-red-800',
  default: 'bg-primary-100 text-primary-800',
};

export default function Badge({ label, className = '' }) {
  if (!label) return null;
  const style = variants[label] || variants.default;
  return (
    <span className={`inline-block px-2 py-0.5 text-xs font-semibold rounded-full ${style} ${className}`}>
      {label}
    </span>
  );
}
