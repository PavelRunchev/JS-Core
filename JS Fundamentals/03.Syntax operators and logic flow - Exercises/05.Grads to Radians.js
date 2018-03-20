function gradsToDegrees(grads) {
    "use strict";
    // 1 grad = 0.9radian; full turn = 400
    grads %= 400;
    grads = grads < 0 ? 400 + grads : grads;

    // 0.9 = 360 / 400
    grads *= 0.9;

    return grads;
}
console.log(gradsToDegrees(850));