export default function getTitles(contents) {
  const titles = [];
  Object.values(contents)
    .forEach((rows) => rows
      .forEach((row) => titles
        .push({ value: row.title })));

  return titles;
}
