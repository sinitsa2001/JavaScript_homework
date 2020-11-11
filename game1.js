'use strict';
var gameDirection = 0;
const settings = {
    rowCount: 10,
    colCount: 10,
    startPositionX: 0,
    startPositionY: 0,
};

const player = {
    x: null,
    y: null,

    init(startX, startY) {
        this.x = startX;
        this.y = startY;
    },
    log(str){
        if (str ===''){
         this.message = ' ';
        }else
            this.message = 'сюда не ходи' + str;
},
    move(direction) {
        this.log('');
        switch (direction) {
            case 2:
                if (this.y >= settings.rowCount-1){
                   this.log(this.y);
                   return false;
                };
                this.y++;
                break;
            case 4:
                if (this.x<= 0){
                    this.log(this.x);
                    return false;

                };

                this.x--;
                break;
            case 6:
                if (this.x>= settings.colCount-1){
                    this.log(this.x);
                    return false;
                }
                this.x++;
                break;
            case 8:
                if (this.y <=0){
                    this.log(this.y);
                    return false;
                }
                this.y--;
        }
    }
};

const game = {
    settings,
    player,
    run() {
        this.player.init(this.settings.startPositionX, this.settings.startPositionY);
        document.onkeydown = function(e) {
        switch (e.keyCode) {
            case 37:
                gameDirection = 4;
            // alert('left');
            break;
            case 38:
                gameDirection = 8;
            // alert('up');
            break;
             case 39:
                 gameDirection = 6;
            // alert('right');
            break;
             case 40:
                 gameDirection = 2;
            // alert('down');
            break;
            default:
                gameDirection = 0;
    }
    game.player.move(gameDirection);
        game.render();

};

        // while (true) {
        //     this.render();

            // const direction = this.getDirection();

            // if (direction === -1) return alert('До свидания!');
            //
    //         // this.player.move(direction);
    //     }
    },

    render() {
        let map = '';

        for (let row = 0; row < this.settings.rowCount; row++) {
            for (let col = 0; col < this.settings.colCount; col++) {
               if (this.player.y === row && this.player.x === col) {
                   map += '  ';
               } else {
                   map += 'X ';
               }
            }
            map += '\n';
        }
        console.clear();
        console.log(map);
        console.log(this.player.message);
    },

    getDirection() {
        const availableDirections = [-1, 2, 4, 6, 8];

        while (true) {
            const direction = parseInt(prompt('Введите число куда хотите переместиться или -1 для выхода.'));

            if (!availableDirections.includes(direction)) {
                alert(`Для перемещения необходимо ввести одно из чисел: ${availableDirections.join(', ')}.`);
                continue;
            }

            return direction;
        }
    }
}

game.run();
