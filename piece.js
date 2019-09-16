class Piece {
    constructor() {
        this.blocks_pos;
        this.rotation = 0;
    }

    // Draws the piece on the board
    draw() {
        
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(1, 0.25, 29, 29/4);
    }

    move_left() {
        let new_pos = this.blocks_pos.slice(0);

        for (let i = 0; i < 4; i++) {
            new_pos[i][0]--;
        }

        if (!this.check_valid_move(new_pos)) return;

        this.blocks_pos = new_pos;
        this.draw();
    }

    move_right() {
        let new_pos = this.blocks_pos.slice(0);

        for (let i = 0; i < 4; i++) {
            new_pos[i][0]++;
        }

        if (!this.check_valid_move(new_pos)) return;

        this.blocks_pos = new_pos;
        this.draw();
    }

    move_down() {
        let new_pos = this.blocks_pos.slice(0);

        for (let i = 0; i < 4; i++) {
            new_pos[i][1]--;
        }

        if (!this.check_valid_move(new_pos)) return;

        this.blocks_pos = new_pos;
        this.draw();
    }

    rotate_cw() { }

    rotate_ccw() { }

    hard_drop() {
        // this should be common for all blocks
    }

    check_valid_move(new_pos) { }

}

class I_Block extends Piece {
    constructor() {
        super();
        // spawning the I block horizontally at maximum height
        this.blocks_pos = [[3, 19], [4, 19], [5, 19], [6, 19]];
    }

    draw() {
        ctx.fillStyle = "#00f9ff"
        for (let i = 0; i < 4; i++) {
            x = this.blocks_pos[i][0];
            y = this.blocks_pos[i][1];
            ctx.fillRect(cols * x, rows * y, )
        }
    }
}