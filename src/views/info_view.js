const PubSub = require('../helpers/pub_sub.js');

const InfoView = function(infoSection) {
  this.infoSection = infoSection;
  console.log(this.infoSection);
};

InfoView.prototype.bindEvents = function() {
  PubSub.subscribe('instrument-object-ready', (evt) => {
    const instrumentObject = evt.detail;
    this.render(instrumentObject);
  });
};

InfoView.prototype.render = function(instrumentObject) {
  this.infoSection.innerHTML = '';

  infoParagraphName = document.createElement('h1');
  infoParagraphName.textContent = `${instrumentObject.name}`;

  infoParagraphDetail = document.createElement('p');
  infoParagraphDetail.textContent = `${instrumentObject.description}`;

  this.infoSection.appendChild(infoParagraphName);
  this.infoSection.appendChild(infoParagraphDetail);

  const ul = document.querySelector('#instrument-info, #instrument-list');

  for (var i = 0; i < instrumentObject.instruments.length; i++) {
    instrumentLi = document.createElement('li');
    instrumentLi.textContent = instrumentObject.instruments[i];
    ul.appendChild(instrumentLi);
  }
};

module.exports = InfoView;
