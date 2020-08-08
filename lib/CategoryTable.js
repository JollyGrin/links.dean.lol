export default class CategoryTable {
  constructor(category, sheetObject) {
    this.category = category;
    this.links = this.grabLinks(category, sheetObject);
  }

  grabLinks = (category, sheetObject) => {
    const links = [];
    sheetObject.forEach((link) => {
      if (link.category === category) {
        links.push(link);
      }
    });
    return links;
  };
}
