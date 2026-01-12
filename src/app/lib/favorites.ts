const KEY = "favorites";

export function getFavorites(): number[] {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem(KEY) || "[]");
}

export function toggleFavorite(id: number): number[] {
  const favorites = getFavorites();
  const updated = favorites.includes(id)
    ? favorites.filter((fav) => fav !== id)
    : [...favorites, id];

  localStorage.setItem(KEY, JSON.stringify(updated));
  return updated;
}
