"use client";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <input
  type="text"
  placeholder="Search products..."
  value={value}
  onChange={(e) => onChange(e.target.value)}
  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
  style={{
    fontSize: "20px", 
    border: "none",
    width: 200
  }}
/>


  );
}
