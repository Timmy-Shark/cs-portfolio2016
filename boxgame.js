var mycanvas = document.getElementById("mycanvas");
var ctx = mycanvas.getContext("2d");
var enemies = [];

function Enemy(xPos, yPos, width, height, speed, color) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.color = color;
    this.draw = function() {
        ctx.rect(this.xPos, this.yPos, this.width, this.height);
        ctx.stroke();
    },
    this.move = function() {
        this.yPos += this.speed;
    };
}

setInterval(function() {
    enemies.push(new Enemy(Math.random() * 480 + 10, 0, 7, 10, 5, "red"));
}, 1000);
setInterval(function() {
    enemies.push(new Enemy(Math.random() * 450 + 11, 1, 4, 11, 6, "red"));
}, 1000);
var box = {
    xPos: 20,
    yPos: 50,
    goLeft: false,
    goRight: false,
    goUp: false,
    goDown: false,
    width: false,
    height: false,
    speed: false,
    move: function() {
        console.log(box.goLeft);
        if (box.goLeft) {
            box.xPos = box.xPos - 5;
        }
        if (box.goRight) {
            box.xPos += 5;
        }
        if (box.goUp) {
            box.yPos -= 5;
        }
        if (box.goDown) {
            box.yPos += 5;
        }
        console.log(box.xPos);
    },
    draw: function() {
        ctx.rect(box.xPos, box.yPos, 20, 20);
        ctx.stroke();
    }
}

document.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 37) {
        box.goLeft = true;
    }
    if (evt.keyCode === 38) {
        box.goUp = true;
    }
    if (evt.keyCode === 39) {
        box.goRight = true;
    }
    if (evt.keyCode === 40) {
        box.goDown = true;
    }

});

document.addEventListener("keyup", function(evt) {
    if (evt.keyCode === 37) {
        box.goLeft = false;
    }
    if (evt.keyCode === 38) {
        box.goUp = false;
    }
    if (evt.keyCode === 39) {
        box.goRight = false;
    }
    if (evt.keyCode === 40) {
        box.goDown = false;
    }
})

function gameLoop() {
    ctx.beginPath();
    ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
    box.move();
    box.draw();

    for (var i = 0; i < enemies.length; i++) {
        enemies[i].move();
        enemies[i].draw();
        
        if(isColliding(box,enemies[i])){
        ctx.font = "30px Timmy";
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.fillText("Game Over", mycanvas.width/2, mycanvas.height/2);
        return;
        }
    }


    window.requestAnimationFrame(gameLoop);
}
gameLoop();

function isColliding(box, Enemy) {
    var leftOf = box.xPos > Enemy.xPos + Enemy.width;
    var aboveOf = box.xPos > Enemy.yPos + Enemy.height;
    var belowOf = box.yPos + box.height < Enemy.yPos;
    var rightOf = box.xPos + box.width < Enemy.xPos;


    if (!rightOf && !leftOf && !aboveOf && !belowOf) {

        return true;
    }
    else {
        return false;
    }
}
