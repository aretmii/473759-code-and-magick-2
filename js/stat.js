'use strict';

// константы координат облака статистики
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var BAR_WIDTH = 40;
var GAP = 50;
var TEXT = 20;
var BAR_HEIGHT = -(CLOUD_HEIGHT - TEXT - 100);
var COLORS = ['#0000FF', '#808080', '#D3D3D3'];

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, text, x, y) {
  ctx.strokeText(text, x, y);
};

// находим максимальный элемент массива
var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};


window.renderStatistics = function (ctx, names, times) {
  ctx.font = '16px PT Mono';
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');
  renderText(ctx, 'Ура вы победили!', 225, 30);
  renderText(ctx, 'Список результатов:', 210, 50);
  // ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  var getColor = function () {
    if (names[i] === 'Вы') {
      return '#FF0000';
    }
    return COLORS[i];
  };

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, GAP + TEXT + CLOUD_Y);

    ctx.fillStyle = getColor();
    ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - TEXT, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
  }
};
