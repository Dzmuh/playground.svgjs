/// <reference path="../typings/svgjs/svgjs.d.ts" />

function draw_plan() {
    // Styles
    var background_color        = "#dfdfdf";
    var o_default_color         = "#fdf8cb";
    var o_default_stroke_color  = "#000000";
    var o_default_stroke_width  = 0.2;

    var draw = SVG('drawing').size(900, 500);
    var plan_background = draw.rect(900, 500).fill("#ece8df");

    // Group 1
    var plan_b_background_group_x = 42.25;
    var plan_b_background_group_y = 49.5;

    var plan_b_background_group = draw.group().x(plan_b_background_group_x).y(plan_b_background_group_y);

    var plan_b_background = plan_b_background_group.path("m 847.79841,458.06452 -214.99998,0 0,-6.2924 -149.5,0 0,6.2924 -79.50003,0 0,-6.2924 -148.50003,0 0,6.2924 -216.000003,0 0,-152 74.000003,0 0,-246.000004 147.00003,0 0,58.207644 367.50003,0 0,-58.207644 147.49998,0 0,246.707604 72.5,0 0,151.2924 z")
        .fill(background_color)
        .stroke({ color: o_default_stroke_color, width: o_default_stroke_width })
        .x(0).y(0);
    
    // Group 2 - Around
    var plan_around_group = draw.group();
    var aroundPosition01 = plan_around_group.circle(24).x(4).y(4)
        .fill(o_default_color)
        .stroke({ color: o_default_stroke_color, width: o_default_stroke_width })
        .attr({
            'data-toggle': 'modal', 'data-target': '#myModal'
        });

}

draw_plan();