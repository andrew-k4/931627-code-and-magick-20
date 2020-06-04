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
var TEXT_STYLE = '16px PT Mono';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, textStyle, text, x, y, color) {
  ctx.fillStyle = color;
  ctx.font = textStyle;
  ctx.fillText(text, x, y);
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

  renderText(ctx, '16px PT Mono', 'Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y + GAP + FONT_GAP, '#000');
  renderText(ctx, '16px PT Mono', 'Список результатов:', CLOUD_X + FONT_GAP, CLOUD_Y + GAP + (FONT_GAP * 2), '#000');

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    renderText(ctx, TEXT_STYLE, players[i], CLOUD_X + GAP_WIDTH + (GAP_WIDTH + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP, '#000');
    renderText(ctx, TEXT_STYLE, Math.round(times[i]), CLOUD_X + GAP_WIDTH + (GAP_WIDTH + BAR_WIDTH) * i, CLOUD_HEIGHT - FONT_GAP - (BAR_HEIGHT * times[i]) / maxTime - FONT_GAP);
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    ctx.fillRect(CLOUD_X + GAP_WIDTH + (GAP_WIDTH + BAR_WIDTH) * i, CLOUD_HEIGHT - (GAP + FONT_GAP), BAR_WIDTH, -(BAR_HEIGHT * times[i]) / maxTime);
    if (players[i] !== 'Вы') {
      ctx.fillStyle = getRandomBlueHslColor();
      ctx.fillRect(CLOUD_X + GAP_WIDTH + (GAP_WIDTH + BAR_WIDTH) * i, CLOUD_HEIGHT - (GAP + FONT_GAP), BAR_WIDTH, -(BAR_HEIGHT * times[i]) / maxTime);
    }
  }
};
