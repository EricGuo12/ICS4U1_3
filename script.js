function calculateHeron() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    let area;
    let inside;
    let secoundStep;

    inside = Math.pow(Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2), 2);
    secoundStep = 4 * Math.pow(a, 2) * Math.pow(b, 2) - inside;

    area = 1 / 4 * Math.sqrt(secoundStep);

    document.getElementById('result-heron').value = area;

}

function degreesToRadians(num) {
    return (Math.PI / 180) * num;
}

function calculateAmbiguous() {
    const aAngle = degreesToRadians(parseFloat(document.getElementById('a-angle-ambiguous').value));
    const aSide = parseFloat(document.getElementById('a-side-ambiguous').value);
    const bSide = parseFloat(document.getElementById('b-side-ambiguous').value);

    let triangleResult;

    const h = bSide * Math.sin(aAngle)

    if (aAngle < Math.PI / 2) {
        if (aSide < h) {
            triangleResult = "no triangle";
        } else if (aSide === h) {
            triangleResult = "right triangle";
        } else {
            if (aSide < bSide) {
                triangleResult = "two triangles (ambiguous case)";
            } else {
                triangleResult = "one triangle";
            }
        }
    } else if (aAngle > Math.PI / 2) {
        if (aSide < bSide || aSide === h) {
            triangleResult = "no triangle";
        } else if (aSide > bSide) {
            triangleResult = "one triangle";
        }
    } else {
        triangleResult = "right triangle";
    }
    document.getElementById('ambiguous-result').value = triangleResult;
}

function calculateNewtons() {
    let zeroX = parseFloat(document.getElementById("root-guess").value);
    let fOfX = [6, -13, -18, 7, 6];
    let fOf1X = [24, -39, -36, 7];

    let maximunTimesRan = 100;
    let timesRan = 0;
    let acceptableError = 1e-8;

    while (timesRan < maximunTimesRan) {
        let fOfXValue = 0;
        let fOf1XValue = 0;

        for (let i = 0; i < fOfX.length; i++) {
            fOfXValue += fOfX[i] * Math.pow(zeroX, (fOfX.length - i - 1));

            if (i < fOf1X.length) {
                fOf1XValue += fOf1X[i] * Math.pow(zeroX, (fOf1X.length - i - 1));
            }
        }

        let nextX = zeroX - (fOfXValue / fOf1XValue);

        if (Math.abs(fOfXValue) < acceptableError) {
            break;
        }

        zeroX = nextX;
        timesRan++;
    }

    document.getElementById("newton-result").value = zeroX.toFixed(2);
}

function calculatePolynomial() {

    let coeffecent = [];
    coeffecent = document.getElementById("coeffecients").value;
    coeffecent = coeffecent.split(" ");

    let exponents = [];
    exponents = document.getElementById("exponents").value;
    exponents = exponents.split(" ");

    const xValue = parseFloat(document.getElementById("x-value").value)

    let equation = "f(x)=";
    let solution = 0;

    for (let i = 0; i < coeffecent.length; i++) {

        if (i > 0 && coeffecent[i] >= 0) {
            equation += "+";
        }

        equation += coeffecent[i] + "x^" + exponents[i];
    }

    for (let i = 0; i < coeffecent.length; i++) {

        solution += coeffecent[i] * Math.pow(xValue, exponents[i]);
    }



    document.getElementById('polynomial-function').value = equation;
    document.getElementById('polynomial-evaluation').value = "f(" + xValue + ")=" + solution;



    console.log(solution);
}



