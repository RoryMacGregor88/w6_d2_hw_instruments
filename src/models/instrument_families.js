const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function() {
  PubSub.publish('all-instruments-ready', this.data);

  PubSub.subscribe('instrument-id-selected', (evt) => {
    const instrumentIndex = evt.detail;
    const instrumentObject = this.findObjectByIndex(instrumentIndex);
  });
};

InstrumentFamilies.prototype.findObjectByIndex = function(instrumentIndex) {
  const foundInstrument = this.data[instrumentIndex];
  PubSub.publish('instrument-object-ready', foundInstrument);
};



module.exports = InstrumentFamilies;
