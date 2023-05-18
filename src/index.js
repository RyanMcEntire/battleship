import './style.css';
import { buildPlayerBoard, buildOpponentBoard } from './ui/main-game-ui';
import gameLoop from './controller/game-controller';

buildPlayerBoard();
buildOpponentBoard();
gameLoop();