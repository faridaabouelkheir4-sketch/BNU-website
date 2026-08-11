function searchByTitle(items, query) {
  return items.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );
}

function filterByCategory(items, category) {
  return items.filter(item => item.category === category);
}

export { searchByTitle, filterByCategory };
function sortByDateNewestFirst(items) {
  return [...items].sort((a, b) => new Date(b.date) - new Date(a.date));
}