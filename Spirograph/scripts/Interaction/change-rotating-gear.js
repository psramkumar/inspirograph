﻿/// <reference path='../definitions/references.d.ts' />
var Spirograph;
(function (Spirograph) {
    (function (Interaction) {
        'use strict';

        function changeRotatingGear(svgContainer, newGearOptions) {
            d3.selectAll('.gear.rotating').remove();

            var isDarkMode = $('body').is('.dark');

            var rotatingGear = svgContainer.append("g").attr("class", "gear rotating color-changing" + (isDarkMode ? ' dark' : '')).datum(newGearOptions);

            rotatingGear.append("path").attr("d", Spirograph.Shapes.Gear);

            return rotatingGear;
        }
        Interaction.changeRotatingGear = changeRotatingGear;
    })(Spirograph.Interaction || (Spirograph.Interaction = {}));
    var Interaction = Spirograph.Interaction;
})(Spirograph || (Spirograph = {}));
//# sourceMappingURL=change-rotating-gear.js.map
