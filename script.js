function main() {
    if (changingDirection) return;

    changingDirection = false;
    setTimeout(() => {
        clearCanvas();
        drawFood();
        advanceSnake();
        drawSnake();
        main();
    }, 200); // Langsamere Geschwindigkeit
}
