const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const WIDTH = 10;
const HEIGHT = 20;

const rows = canvas.height / HEIGHT;
const cols = canvas.width / WIDTH;

// i miss my int main void boys

setup_board();
// play();

ctx.fillStyle = "#FFFFFF";
ctx.fillRect(1, 0.25, 29, 29/4);


////////////////////////////////////////////////////////////////////////////////
/////// helper functions

// setting up the display of the board
function setup_board() {
    console.log("Hello there?")

    for (var i = 1; i < 11; i++) {
        draw_line(cols * i, 0)
    }
    // probs chuck a welcome screen or some shit
}

// the game logic
function play() {

}

/////// the actal helper functions

// draws the vertical alignment lines on the board
function draw_line(x, y) {
    ctx.fillStyle = "#5e5e5e";  
    ctx.fillRect(x, y, 1, 600);
}

// manages the spawning of the pieces
function spawner()
{
    // stub for now
}