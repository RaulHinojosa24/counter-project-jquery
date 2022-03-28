let counter = 0;

$(document).ready(function () {
    $(".prevBtn").click(() => {
        counter--;
        updateCounter();
    });
    $(".nextBtn").click(() => {
        counter++;
        updateCounter();
    });
});

function updateCounter() {
    $(".counter").text(counter);
    setCounterColor();
}

function setCounterColor() {
    if (counter > 0) {
        $(".counter").removeClass("negativo");
        $(".counter").addClass("positivo");
    } else if (counter < 0) {
        $(".counter").removeClass("positivo");
        $(".counter").addClass("negativo");
    } else {
        $(".counter").removeClass("positivo");
        $(".counter").removeClass("negativo");
    }
}