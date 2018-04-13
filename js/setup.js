'use strict';

// переменные
var setupBlock = document.querySelector('.hidden');

// массивы и объекты
var WIZARDS = [];
var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarListElement = document.querySelector('.setup-similar-list');
var wizardLabel = document.querySelector('.setup-similar-label');

// процессинг
setupBlock.classList.remove('hidden');

var randomNum = function (max, min) {
  var num = Math.round(Math.random() * (max - min) + min);
  return num;
}

// цикл наполняющий массив объектами
for (var i = 0; i <= 3; i++) {
  var randomName = randomNum(7,0);
  var randomSurName = randomNum(7,0);
  var randomCoatColor = randomNum(5,0);
  var randomEyeColor = randomNum(4,0);

  var names = WIZARDS_NAMES[randomName] + ' ' + WIZARDS_SURNAMES[randomNum(7,0)];
  var coats = WIZARD_COAT_COLORS[randomCoatColor];
  var eyesColor = WIZARD_EYE_COLORS[randomEyeColor];

  WIZARDS[i] = {
    name: names,
    coat: coats,
    eyes: eyesColor
  }
}

// цикл копирующий шаблон и подставляющий в ячейку
for (var j = 0; j < 4; j++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

}
