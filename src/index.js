import './style.css';
import { buildPlayerBoard, buildOpponentBoard } from './ui/main-game-ui';
import gameLoop from './controller/game-controller';
import buildNewGameModal from './ui/start-game-ui';
import startGame from './controller/start-game';

buildPlayerBoard();
buildOpponentBoard();
buildNewGameModal()
startGame();
gameLoop();