let furnitureList = [];
fetch('scripts/furnish.json')
  .then((response) => response.json())
  .then((data) => data.forEach((item) => furnitureList.push(item)));
export default furnitureList;
