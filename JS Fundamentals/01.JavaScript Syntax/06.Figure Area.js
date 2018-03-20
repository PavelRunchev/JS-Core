function FigureArea(w, h, W, H){
    "use strict";
    let figureAreaA = w * h;
    let figureAreaB = W * H;
    let substractArea = Math.min(w, W) * Math.min(h, H);
    return figureAreaA + figureAreaB - substractArea;
}

console.log(FigureArea(13, 2, 5, 8));