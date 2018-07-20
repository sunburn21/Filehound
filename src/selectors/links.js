export default (links, { text, folder }) => {
  return links
    .filter(link => {
      const textMatch = link.title.includes(text) || link.link.includes(text);
      const folderMatch = folder === "All" || link.folder === folder;
      return textMatch && folderMatch;
    })
    .sort((a, b) => {
      return a.createdDate < b.createdDate ? 1 : -1;
    });
};
