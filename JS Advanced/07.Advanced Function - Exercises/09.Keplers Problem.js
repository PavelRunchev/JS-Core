function keplerProblem(meanAnomaly, eccentricity) {
    let count = 0;
    calculate(meanAnomaly);

    function calculate(approximate){
        "use strict";

        // 1 / (10 ** 9)
        let numericalAnalysis = 1e-9;

        // f(E) = E - e * sin(E) - M = 0
        let methodNewton = (approximate - (eccentricity * Math.sin(approximate)) - meanAnomaly);

        // f`(E) = (1 - e * cos(E))
        let func = 1 - (eccentricity * Math.cos(approximate));

        // E1 = Eo - f(E) / f`(E)
        let approximation = approximate - (methodNewton / func);

        //Check approximation of the eccentric anomaly less or equal on numericalAnalysis
        if(Math.abs(approximation - approximate) < numericalAnalysis || count > 200){
            //stop iterating and print the result
            console.log(+approximation.toFixed(9));
            return;
        }
        count++;

        // next iterate
        calculate(approximation);
    }
}

keplerProblem(1, 0);  //1
keplerProblem(0.25, 0.99); //1.156077258
keplerProblem(4.8, 0.2); //4.601234265
keplerProblem(3.1415926535, 0.75); //3.141592654