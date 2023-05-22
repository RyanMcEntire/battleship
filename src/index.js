import './style.css';
import { buildPlayerBoard, buildOpponentBoard } from './ui/main-game-ui';
import buildNewGameModal from './ui/start-game-ui';
import startGame from './controller/start-game';

buildPlayerBoard();
buildOpponentBoard();
buildNewGameModal()
startGame();