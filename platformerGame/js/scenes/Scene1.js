class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }
  create() {
    const helloButton = this.add.text(400, 400, 'Start Game', { fill: '#ffb6c1' });
    helloButton.setInteractive();
    helloButton.on('pointerdown', () => { 
      this.scene.start("playGame");
    });
  }
}

