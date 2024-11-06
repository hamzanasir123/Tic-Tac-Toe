
var boxes = document.querySelectorAll(".Box");
var resetBotton = document.querySelector(".Reset");
var newGameBtn = document.querySelector("#new-btn");
var newGameBtn1 = document.querySelector("#new-btn1");
var msgContainer = document.querySelector(".msg-container");
var peragraph = document.querySelector("#msg");
var turnO = true;
var count = [];
var drawMsg = document.querySelector(".sms-container");
var winSituations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [3, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
var resetGame = function () {
    turnO = true;
    enableBoxes();
    msgContainer === null || msgContainer === void 0 ? void 0 : msgContainer.classList.add("hide");
    drawMsg === null || drawMsg === void 0 ? void 0 : drawMsg.classList.add("hide");
    count = [];
};
var showWinner = function (winner) {
    peragraph.innerText = "".concat(winner, " is Winner");
    msgContainer === null || msgContainer === void 0 ? void 0 : msgContainer.classList.remove("hide");
    drawMsg === null || drawMsg === void 0 ? void 0 : drawMsg.classList.add("hide");
    disableBoxes();
};
boxes.forEach(function (box) {
    box.addEventListener("click", function () {
        count++;
        for (var _i = 0, boxes_1 = boxes; _i < boxes_1.length; _i++) {
            var b = boxes_1[_i];
            if (count == 9 && b !== winSituations) {
                drawMsg === null || drawMsg === void 0 ? void 0 : drawMsg.classList.remove("hide");
            }
            ;
        }
        ;
    });
});

boxes.forEach(function (Box) {
    Box.addEventListener("click", function () {
        if (turnO) {
            Box.innerText = "O";
            turnO = false;
        }
        else {
            Box.innerText = "X";
            turnO = true;
        }
        ;
        Box.disabled = true;
        gameWinner();
    });
});
var disableBoxes = function () {
    for (var _i = 0, boxes_2 = boxes; _i < boxes_2.length; _i++) {
        var box = boxes_2[_i];
        box.disabled = true;
    }
};
var enableBoxes = function () {
    for (var _i = 0, boxes_3 = boxes; _i < boxes_3.length; _i++) {
        var box = boxes_3[_i];
        box.disabled = false;
        box.innerText = "";
    }
};

var gameWinner = function () {
    for (var _i = 0, winSituations_1 = winSituations; _i < winSituations_1.length; _i++) {
        var situation = winSituations_1[_i];
        var position1 = boxes[situation[0]].innerText;
        var position2 = boxes[situation[1]].innerText;
        var position3 = boxes[situation[2]].innerText;
        if (position1 != "" && position2 != "" && position3 != "") {
            if (position1 === position2 && position2 === position3) {
                showWinner(position1);
            }
        }
    }
};
newGameBtn.addEventListener("click", resetGame);
resetBotton.addEventListener("click", resetGame);
newGameBtn1.addEventListener("click", resetGame);
