const Model = require('./model');
const Presenter = require('./presenter');
const View = require('./view');

const data = { mess: 'Lorem ipsum dolor sit, amet.' };
const model = new Model(data);
const presenter = new Presenter(model);
const view = new View(presenter);

view.render();

