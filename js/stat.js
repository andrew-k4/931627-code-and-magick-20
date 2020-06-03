'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 20;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var GAP_WIDTH = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getRandomBlueHslColor = function () {
  return 'hsl(' + '240, ' + (Math.random() * 100) + '%, 50%, 1)';
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, CLOUD_Y + GAP + (FONT_GAP * 2));

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + GAP_WIDTH + (GAP_WIDTH + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP);
    if (players[i] === 'Вы') {
      ctx.fillText(Math.round(times[i]), CLOUD_X + GAP_WIDTH + (GAP_WIDTH + BAR_WIDTH) * i, CLOUD_HEIGHT - FONT_GAP - (BAR_HEIGHT * times[i]) / maxTime - FONT_GAP);
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(CLOUD_X + GAP_WIDTH + (GAP_WIDTH + BAR_WIDTH) * i, CLOUD_HEIGHT - (GAP + FONT_GAP), BAR_WIDTH, -(BAR_HEIGHT * times[i]) / maxTime);
    } else {
      ctx.fillText(Math.round(times[i]), CLOUD_X + GAP_WIDTH + (GAP_WIDTH + BAR_WIDTH) * i, CLOUD_HEIGHT - FONT_GAP - (BAR_HEIGHT * times[i]) / maxTime - FONT_GAP);
      ctx.fillStyle = getRandomBlueHslColor();
      ctx.fillRect(CLOUD_X + GAP_WIDTH + (GAP_WIDTH + BAR_WIDTH) * i, CLOUD_HEIGHT - (GAP + FONT_GAP), BAR_WIDTH, -(BAR_HEIGHT * times[i]) / maxTime);
    }
  }
};
