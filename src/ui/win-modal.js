import bp from 'domweaver';

export default function appendWinModal(playerName) {
  const modal = bp('div', 'win-modal')
    .addChild(bp('div', 'winning-player').addText(`${playerName} won`))
    .addChild(bp('button', 'play-again-button').addText('Play Again'))
    .build();
  document.body.appendChild(modal);
}
