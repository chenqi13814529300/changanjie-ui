import {arr} from './arr.js'
const WINDOW_WIDTH = 1000;
const WINDOW_HEIGHT = 800;
const RADIUS = 6;
const MARGIN_LEFT = 80;
const MARGIN_TOP = 60;
var now = new Date()
var balls = []
const colors = ['#33BEE5', '#0099CC', '#9933CC', '#AA66CC', '#669900', '#FFBB33', '#FF8800', '#FF4444', 'pink', 'yellow']
export function init(canvas) {
    canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT
    var context = canvas.getContext('2d')

    setInterval(() => {
        render(context);
        update()
    }, 40);
}

function render(cxt) {
    cxt.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT)
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    renderArr(MARGIN_LEFT, MARGIN_TOP, parseInt(hours / 10), cxt);
    renderArr(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, parseInt(hours % 10), cxt);
    renderArr(MARGIN_LEFT + 30 * (RADIUS + 1), MARGIN_TOP, 10, cxt);


    renderArr(MARGIN_LEFT + 39 * (RADIUS + 1), MARGIN_TOP, parseInt(minutes / 10), cxt);
    renderArr(MARGIN_LEFT + 54 * (RADIUS + 1), MARGIN_TOP, parseInt(minutes % 10), cxt);
    renderArr(MARGIN_LEFT + 69 * (RADIUS + 1), MARGIN_TOP, 10, cxt);


    renderArr(MARGIN_LEFT + 78 * (RADIUS + 1), MARGIN_TOP, parseInt(seconds / 10), cxt);
    renderArr(MARGIN_LEFT + 93 * (RADIUS + 1), MARGIN_TOP, parseInt(seconds % 10), cxt);


    for (var i = 0; i < balls.length; i++) {
        cxt.fillStyle = balls[i].color;
        cxt.beginPath()


        cxt.arc(balls[i].x, balls[i].y, RADIUS, 0, 2 * Math.PI)
        cxt.closePath()
        cxt.fill()
    }

    ballsUpdate()
    console.log(balls.length);

}


function ballsUpdate() {
    for (var i = 0; i < balls.length; i++) {
        balls[i].x += balls[i].v_x;
        balls[i].y += balls[i].v_y;
        balls[i].v_y += balls[i].g;

        if (balls[i].y >= 800 - RADIUS) {
            balls[i].y = 800 - RADIUS
            balls[i].v_y = -balls[i].v_y * 0.4
        }
    }

    // 性能优化，销毁球
    var t = 0;
    for (let i in balls) {
        if ((balls[i].x + RADIUS) > 0 && balls[i].x - RADIUS < WINDOW_WIDTH) {
            balls[t++] = balls[i];
        }
    }

    while (balls.length > Math.min(300, t)) {
        balls.pop();
    }
}






// 更新时间
function update() {
    // 现在的时间
    var cur_now = new Date()
    var cur_hours = cur_now.getHours();
    var cur_minutes = cur_now.getMinutes();
    var cur_seconds = cur_now.getSeconds();

    // 上一秒的时间
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // 时间不= 就把新时间给旧时间
    if (cur_now != now) {
        now = cur_now;
    }

    // 旧时间和新时间 哪里不一样就改哪里
    if (parseInt(cur_hours / 10) != parseInt(hours / 10)) {
        addBalls(MARGIN_LEFT, MARGIN_TOP, parseInt(cur_hours / 10))
    }
    if (parseInt(cur_hours % 10) != parseInt(hours % 10)) {
        addBalls(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, parseInt(cur_hours % 10))
    }
    if (parseInt(cur_minutes / 10) != parseInt(minutes / 10)) {
        addBalls(MARGIN_LEFT + 39 * (RADIUS + 1), MARGIN_TOP, parseInt(cur_minutes / 10))
    }
    if (parseInt(cur_minutes % 10) != parseInt(minutes % 10)) {
        addBalls(MARGIN_LEFT + 54 * (RADIUS + 1), MARGIN_TOP, parseInt(cur_minutes % 10))
    }
    if (parseInt(cur_seconds % 10) != parseInt(seconds % 10)) {
        addBalls(MARGIN_LEFT + 93 * (RADIUS + 1), MARGIN_TOP, parseInt(cur_seconds % 10))
    }
    if (parseInt(cur_seconds / 10) != parseInt(seconds / 10)) {
        addBalls(MARGIN_LEFT + 78 * (RADIUS + 1), MARGIN_TOP, parseInt(cur_seconds / 10))
    }


}



// 绘制时间
function renderArr(x, y, num, cxt) {
    cxt.fillStyle = 'skyblue'
    for (var i = 0; i < arr[num].length; i++) {
        for (var j = 0; j < arr[num][i].length; j++) {
            if (arr[num][i][j] == 1) {
                cxt.beginPath();
                cxt.arc(x + j * 2 * (RADIUS + 1), y + i * 2 * (RADIUS + 1), RADIUS, 0, 2 * Math.PI)
                cxt.closePath()
                cxt.fill()
            }
        }
    }
}

function addBalls(x, y, num) {
    for (var i = 0; i < arr[num].length; i++) {
        for (var j = 0; j < arr[num][i].length; j++) {
            if (arr[num][i][j] == 1) {
                var one_ball = {
                    x: x + j * 2 * (RADIUS + 1),
                    y: y + i * 2 * (RADIUS + 1),
                    g: 1.5 * Math.random(),
                    v_x: i % 2 == 1 ? -4 : 4,
                    v_y: Math.ceil(Math.random() * 10),
                    color: colors[Math.floor(Math.random() * colors.length)]
                }
                balls.push(one_ball)
            }
        }
    }
}