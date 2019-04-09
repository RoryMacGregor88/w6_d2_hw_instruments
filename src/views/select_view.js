const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(selectElement) {
  this.selectElement = selectElement;
};

SelectView.prototype.bindEvents = function() {
  PubSub.subscribe('all-instruments-ready', (evt) => {
    const instruments = evt.detail;
    this.populate(instruments);
  });

  this.selectElement.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish('instrument-id-selected', selectedIndex);
  });
};

SelectView.prototype.populate = function(instrumentsData){
  instrumentsData.forEach( (instrument, index) => {
    const option = document.createElement('option');
    option.textContent = instrument.name;
    option.value = index;
    this.selectElement.appendChild(option);
  });
};

module.exports = SelectView;
