(function() {
    let noiseMax = 1
    let zoff = 0
    
    window.addEventListener('resize', resizeCanvas, false);
    function resizeCanvas() {
        var r = 200
        var c = document.querySelector("canvas");
        var ctx = c.getContext("2d");
        c.width = window.innerWidth;
        c.height = window.innerHeight;
        var radius = 200;
        ctx.strokeStyle = "#FFF";
        ctx.lineWidth = 2;
        ctx.beginPath();
        // for(var a = 0; a <= 2 * Math.PI; a+=.03){
        //     // let xoff = mapRange(Math.cos(a), -1, 1, 0, noiseMax)
        //     // let yoff = mapRange(Math.sin(a), -1, 1, 0, noiseMax)
        //     // let r = mapRange(noise.perlin2(xoff, yoff, zoff), 0, 1, 100, 200)
        //     let x = 200 * Math.cos(a)
        //     let y = 200 * Math.sin(a)
        //     ctx.moveTo(x, y);
        //     ctx.lineTo(x, y);
        // }
        ctx.arc(c.width/2, c.height/2, r, 0, 2 * Math.PI);
        ctx.stroke();
    }
    
    resizeCanvas();

    function draw() {
       
    }

    function mapRange (value, a, b, c, d) {
        value = (value - a) / (b - a);
        return c + value * (d - c);
    }
})();


// export function draw () {
//     background(0)
//     translate( width/2, height/2)
//     stroke(255)
//     noFill()
//     beginShape()
//     for(var a = 0; a <= TWO_PI; a+=.03){
//         let xoff = map(cos(a), -1, 1, 0, noiseMax)
//         let yoff = map(sin(a), -1, 1, 0, noiseMax)
//         let r = map(noise(xoff, yoff, zoff), 0, 1, 100, 200)
//         let x = r * cos(a)
//         let y = r * sin(a)
//         vertex(x, y)
//     }
//     endShape(CLOSE)
//     zoff += .01
// }