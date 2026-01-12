"use client";

interface Props {
  value: boolean;
  onChange: (value: boolean) => void;
}

export default function FavoritesToggle({ value, onChange }: Props) {
  return (
   <label className="flex items-center gap-2 cursor-pointer select-none text-sm font-medium">
  <input
    type="checkbox"
    checked={value}
    onChange={(e) => onChange(e.target.checked)}
    className="hidden peer"
  />

  {/* Custom checkbox */}
  <span className="flex items-center justify-center w-4 h-4 border rounded 
    border-gray-400 peer-checked:bg-pink-500 peer-checked:border-pink-500
    transition">
    <span className="hidden peer-checked:block text-white text-xs">✓</span>
  </span>

  <span className="text-gray-700 peer-checked:text-pink-600">
    ❤️ Wishlist
  </span>
</label>

  );
}
