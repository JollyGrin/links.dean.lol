import LinkClass from './LinkClass';
import CategoryTable from '../lib/CategoryTable';

export const parseLink = (csv) => {
  let sheetObject = [];
  csv.forEach((link) => {
    let formatLink = new LinkClass(link);
    sheetObject.push(formatLink);
  });

  return sheetObject;
};

export const parseCategories = (sheetObject) => {
  const categoriesSet = new Set();
  sheetObject.forEach((link) => {
    categoriesSet.add(link.category);
  });

  const categories = [...categoriesSet];

  return categories;
};

const spillCategory = (categorySelected, sheetObject) => {
  const table = new CategoryTable(categorySelected, sheetObject);
  return table;
};

export const makeTable = (categories, sheetObject) => {
  const table = [];
  categories.forEach((category) => {
    table.push(spillCategory(category, sheetObject));
  });
  return table;
};

export const iconSelect = (type) => {
  switch (type) {
    case (type = 'youtube'):
      return 'fab fa-youtube';
    default:
      return 'fas fa-globe';
  }
};
