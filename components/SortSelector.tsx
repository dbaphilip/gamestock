interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  selectedSortOrder: string;
}

export default function SortSelector({
  onSelectSortOrder,
  selectedSortOrder,
}: Props) {
  //
  const sortOrders = [
    // { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  //

  return (
    <select
      className="form-select fs-3 shadow-pri"
      onChange={(e) => onSelectSortOrder(e.target.value)}
    >
      <option value="">Sorted by: Relevance</option>

      {sortOrders.map((sortOrder) => (
        <option key={sortOrder.value} value={sortOrder.value}>
          {sortOrder.value == selectedSortOrder
            ? `Sorted by: ${sortOrder.label}`
            : sortOrder.label}
        </option>
      ))}
    </select>
  );
}
