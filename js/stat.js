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

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function(ctx, text, x, y) {
  ctx.strokeText(text, x, y);
};

// находим максимальный элемент массива
var getMaxElement = function(arr) {
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
  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT);
  }


  for (var i = 0; i < names.length; i++) {
    //   MAX_BAR      BAR[I]
    // ----------- = --------
    //  BAR_WIDTH       X

    //  X = (BAR_WIDTH * BAR[I]) / MAX_BAR
    if (names[i] !== 'Вы') {
      ctx.fillStyle = COLORS[i];
    }
    ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - TEXT, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
  }
  //
  // ctx.fillStyle = '#000';
  // ctx.fillText('Кекс', CLOUD_X + GAP + (BAR_WIDTH + GAP) * 1, CLOUD_HEIGHT);
  // ctx.fillRect(CLOUD_X + 2 * GAP + BAR_WIDTH, CLOUD_HEIGHT - TEXT, BAR_WIDTH, BAR_HEIGHT);
  //
  // ctx.fillStyle = '#000';
  // ctx.fillText('Катя', CLOUD_X + 3 * GAP + 2 * BAR_WIDTH, CLOUD_HEIGHT);
  // ctx.fillRect(CLOUD_X + 3 * GAP + 2 * BAR_WIDTH, CLOUD_HEIGHT - TEXT, BAR_WIDTH, BAR_HEIGHT);
  //
  // ctx.fillStyle = '#000';
  // ctx.fillText('Игорь', CLOUD_X + 4 * GAP + 3 * BAR_WIDTH, CLOUD_HEIGHT);
  // ctx.fillRect(CLOUD_X + 4 * GAP + 3 * BAR_WIDTH, CLOUD_HEIGHT - TEXT, BAR_WIDTH, BAR_HEIGHT);
}

// window.renderStatistics = function(ctx, players, times) {
//   renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
//   renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');
//
//   ctx.fillStyle = '#000';
//
//   for (var i = 0; i < players.length; i++) {
//     //   MAX_BAR      BAR[I]
//     // ----------- = --------
//     //  BAR_WIDTH       X
//
//     //  X = (BAR_WIDTH * BAR[I]) / MAX_BAR
//
//     ctx.fillText(players[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i);
//     ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * i, barWidth, BAR_HEIGHT);
//   }
// };
