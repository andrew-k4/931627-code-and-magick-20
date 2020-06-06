'use strict';

var WIZARD_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var WIZARD_LAST_NAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var generateRandomName = function (name, surname) {

  return name[Math.floor(Math.random() * name.length)] + ' ' + surname[Math.floor(Math.random() * surname.length)];
};

var getRandomColor = function (color) {

  return color[Math.floor(Math.random() * color.length)];
};

var wizards = [
  {
    name: generateRandomName(WIZARD_NAMES, WIZARD_LAST_NAMES),
    coatColor: getRandomColor(COAT_COLORS),
    eyesColor: getRandomColor(EYES_COLORS)
  },
  {
    name: generateRandomName(WIZARD_NAMES, WIZARD_LAST_NAMES),
    coatColor: getRandomColor(COAT_COLORS),
    eyesColor: getRandomColor(EYES_COLORS)
  },
  {
    name: generateRandomName(WIZARD_NAMES, WIZARD_LAST_NAMES),
    coatColor: getRandomColor(COAT_COLORS),
    eyesColor: getRandomColor(EYES_COLORS)
  },
  {
    name: generateRandomName(WIZARD_NAMES, WIZARD_LAST_NAMES),
    coatColor: getRandomColor(COAT_COLORS),
    eyesColor: getRandomColor(EYES_COLORS)
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
