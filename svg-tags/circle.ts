/// <reference path="typings/svgjs/svgjs.d.ts" />

function draw_circle() {
    var draw = SVG("drawing").size(50, 50).style("background:gray;");

    var circle = draw.circle(20)
        .fill("blue")
        .cy(10)
        .cx(25).stroke({ color: 'white', width: 4 });
}

draw_circle();
