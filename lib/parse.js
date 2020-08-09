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
    case (type = 'medium'):
      return 'fab fa-medium-m';
    case (type = 'github'):
      return 'fab fa-github';
    case (type = 'twitter'):
      return 'fab fa-twitter';
    case (type = 'discord'):
      return 'fab fa-discord';
    case (type = 'facebook'):
      return 'fab fa-facebook-square';
    case (type = 'btc'):
      return 'fab fa-btc';
    case (type = 'btc'):
      return 'fab fa-btc';
    case (type = 'bitcoin'):
      return 'fab fa-bitcoin';
    case (type = 'eth'):
      return 'fab fa-ethereum';
    case (type = 'dropbox'):
      return 'fab fa-dropbox';
    case (type = 'dnd'):
      return 'fab fa-d-and-d';
    case (type = 'meetup'):
      return 'fab fa-meetup';
    case (type = 'read'):
      return 'fas fa-scroll';
    case (type = 'book'):
      return 'fas fa-book';
    default:
      return 'fas fa-globe';
  }
};
