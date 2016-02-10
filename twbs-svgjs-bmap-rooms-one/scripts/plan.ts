/// <reference path="../typings/svgjs/svgjs.d.ts" />

function draw_plan() {
    // Styles
    var background_color        = "#dfdfdf";
    var o_default_stroke_color  = "#000000";
    var o_default_stroke_width  = 0.2;

    var draw = SVG('drawing').size(900, 500);
    var plan_background = draw.rect(900, 500).fill("#ece8df");

    /// Group 1
    var plan_b_background_group_x = 42.25;
    var plan_b_background_group_y = 49.5;

    var plan_b_background_group = draw.group().x(plan_b_background_group_x).y(plan_b_background_group_y);

    var plan_b_background = plan_b_background_group.path("m 847.79841,458.06452 -214.99998,0 0,-6.2924 -149.5,0 0,6.2924 -79.50003,0 0,-6.2924 -148.50003,0 0,6.2924 -216.000003,0 0,-152 74.000003,0 0,-246.000004 147.00003,0 0,58.207644 367.50003,0 0,-58.207644 147.49998,0 0,246.707604 72.5,0 0,151.2924 z")
        .fill(background_color)
        .stroke({ color: o_default_stroke_color, width: o_default_stroke_width })
        .x(0).y(0);
    
    /// Group 2 - Around
    var plan_around_group = draw.group();
    // aroundPosition01
    var aroundPosition01 = plan_around_group.circle(24).x(4).y(4)
        .attr({ 'data-toggle': 'modal', 'data-target': '#aroundPosition01Modal', 'class': 'around' });
    // aroundPosition02
    var aroundPosition02 = plan_around_group.circle(24).x(4).y(260)
        .attr({ 'data-toggle': 'modal', 'data-target': '#aroundPosition02Modal', 'class': 'around' });
    // aroundPosition03
    var aroundPosition03 = plan_around_group.circle(24).x(4).y(420)
        .attr({ 'data-toggle': 'modal', 'data-target': '#myModal', 'class': 'around' });
    // aroundPosition04
    var aroundPosition04 = plan_around_group.circle(24).x(4).y(472)
        .attr({ 'data-toggle': 'modal', 'data-target': '#myModal', 'class': 'around' });

    /// Group 3 - Floor 1
    var floor1_group_x = 42.25;
    var floor1_group_y = 49.5;

    var floor1_group = draw.group().x(0).y(0);
    var floor1_background = floor1_group.path("m 134,64 0,174 76,0 0,14 -75.66367,0 0,44.63014 75.66367,0 0,15.36986 -149,0 0,120 186.85201,0 0,-120 -13.05829,0 0,-15.36986 43.6861,0 0,15.36986 -16.574,0 0,115 143.15695,0 0,-115 -9.54259,0 0,-15.36986 23.5964,0 0,135.36986 58.76234,0 0,-135.36986 72.82512,0 0,15.36986 -58.70404,0 0,115 144,0 0,-115 -60.18386,0 0,-16 92.18386,0 0,16 -18,0 0,120 188,0 0,-120 -144,0 0,-15.36986 72,0 0,-44.63014 -80.69506,0 0,-14.5315 80.69506,0 0,-114.4685 -84,0 0,-13 84,0 0,-44 -116.35425,0 0,44 6.35425,0 0,13 -6.35425,0 0,46.28219 -13.64575,0 0,-46.28219 -144,0 0,115 58,0 0,14 -72,0 0,-129 -59,0 0,129 -73,0 0,-14 61.06275,0 0,-115 L 266,122.65479 266,238 l 56,0 0,14 -88,0 0,-14 17.35872,0 0,-174 z m 502,126.33973 13.64575,0 0,61.66027 -73.64575,0 0,-14 60,0 z m -332.40807,106.29041 66.81615,0 0,15.36986 -66.81615,0 z")
        .attr({ 'class': 'floor' });

    var button1 = draw.rect(112, 46).x(326).y(18).attr({ 'class': 'svg-button'}).click(
        function () {
            if (plan_around_group.visible() == true) {
                plan_around_group.hide();
            } else {
                plan_around_group.show();
            }
        });
}

draw_plan();