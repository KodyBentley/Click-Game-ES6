import Boot from 'states/Boot';
import Preload from 'states/Preload';
import Menu from 'states/Menu';
import GameState from 'states/Game';
import Gameover from 'states/Gameover';
import Options from 'states/Options';
import Credits from 'states/Credits';


class Game extends Phaser.Game {

	constructor() {
		super(590, 834, Phaser.AUTO, 'content', null);
		this.state.add('Boot', Boot, false);
		this.state.add('Preload', Preload, false);
		this.state.add('Menu', Menu, false);
		this.state.add('Game', GameState, false);
		this.state.add('GameOver', Gameover, false);
		this.state.add('Options', Options, false);
		this.state.add('Credits', Credits, false);
		this.state.start('Boot');
	}
}

new Game();