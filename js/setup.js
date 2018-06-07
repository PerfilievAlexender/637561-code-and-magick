'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)']; 

var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green']; 

 var getRandomInt = function (min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
 };

var wizards = [
  {
    name: WIZARD_NAMES[getRandomInt(0, WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[getRandomInt(0, WIZARD_NAMES.length)],
    coatColor: WIZARD_COAT_COLOR[getRandomInt(0 , WIZARD_COAT_COLOR.length)],
    eyesColor: WIZARD_EYES_COLOR[getRandomInt(0 , WIZARD_EYES_COLOR.length)]   
  },
  {
    name: WIZARD_NAMES[getRandomInt(0, WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[getRandomInt(0, WIZARD_NAMES.length)],
    coatColor: WIZARD_COAT_COLOR[getRandomInt(0 , WIZARD_COAT_COLOR.length)],
    eyesColor: WIZARD_EYES_COLOR[getRandomInt(0 , WIZARD_EYES_COLOR.length)] 
  },
  {
    name: WIZARD_NAMES[getRandomInt(0, WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[getRandomInt(0, WIZARD_NAMES.length)],
    coatColor: WIZARD_COAT_COLOR[getRandomInt(0 , WIZARD_COAT_COLOR.length)],
    eyesColor: WIZARD_EYES_COLOR[getRandomInt(0 , WIZARD_EYES_COLOR.length)] 
  },
  {
    name: WIZARD_NAMES[getRandomInt(0, WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[getRandomInt(0, WIZARD_NAMES.length)],
    coatColor: WIZARD_COAT_COLOR[getRandomInt(0 , WIZARD_COAT_COLOR.length)],
    eyesColor: WIZARD_EYES_COLOR[getRandomInt(0 , WIZARD_EYES_COLOR.length)] 
  }
];

var renderWizard = function (paramWizard) {
    var element = similarWizardTemplate.cloneNode(true);
    element.querySelector('.setup-similar-label').textContent = paramWizard.name;
    element.querySelector('.wizard-coat').style.fill = paramWizard.coatColor;
    element.querySelector('.wizard-eyes').style.fill = paramWizard.eyesColor;
    
    return element;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {  
    fragment.appendChild(renderWizard(wizards[i]));
};

similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden'); 