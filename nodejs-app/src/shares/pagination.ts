export function paginate(items: any[], currentPage = 1, perPage = 6) {
  const offset = (currentPage - 1) * perPage;
  const paginatedItems = items.slice(offset).slice(0, perPage);
  const totalPages = Math.ceil(items.length / perPage);

  return {
    currentPage,
    perPage,
    total: items.length,
    totalPages,
    data: paginatedItems,
  };
}
