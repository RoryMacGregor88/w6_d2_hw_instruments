const instrumentFamilyData = require('./data/instrument_family_data.js');
const InstrumentFamilies = require('./models/instrument_families.js');
const InfoView = require('./views/info_view.js');
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('select#instrument-families');
  const instrumentDropdown = new SelectView(selectElement);
  instrumentDropdown.bindEvents();

  const infoSection = document.querySelector('section#instrument-info');
  const instrumentInfoDisplay = new InfoView(infoSection);
  instrumentInfoDisplay.bindEvents();

  const instrumentDataSource = new InstrumentFamilies(instrumentFamilyData);
  instrumentDataSource.bindEvents();
});
