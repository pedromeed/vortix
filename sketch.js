let angle = 0;

let vectors = [];
// r(beta) = 0.8 + 1.6 * sin(6 * beta)
// theta(beta) = 2 * beta
// phi(beta) = 0.6 * pi * sin(12 * beta)

//x = r * cos(phi) * cos(theta)
//y = r * cos(phi) * sin(theta)
//z = r * sin(phi)

let beta = 0;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
    background(0);
    rotateY(angle);
    angle += 0.07;

    let r = 100 * (1 - 1 * sin(1 * beta));
    let theta = 2 * beta;
    let phi = 5 * PI * sin(155 * beta);
    let x = r * cos(phi) * cos(theta);
    let y = r * cos(phi) * sin(theta);
    let z = r * sin(phi);
    stroke(255, r, 255);

    vectors.push(createVector(x, y, z));
  
  box(200)

    beta += 0.3;

    fill(24,54,);
    stroke(243,4,);
    strokeWeight(8);
    beginShape();
    for (let i = 0; i < vectors.length; i++) {
        let v = vectors[i];
        vertex(v.x, v.y, v.z);
    }
    endShape();
}