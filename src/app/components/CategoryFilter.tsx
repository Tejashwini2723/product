"use client";

interface Props {
  categories: string[];
  value: string;
  onChange: (value: string) => void;
}

export default function CategoryFilter({
  categories,
  value,
  onChange,
}: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border p-2 h-12 rounded bg-gray-100 px-3 py-2 focus:outline-none"
      style={{
        border: "none",
        width: 200, 
        fontSize: 15
      }}
    >
      <option value="">All Categories</option>
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
    
  );
}
