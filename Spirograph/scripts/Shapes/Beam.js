﻿/// <reference path='../definitions/references.d.ts' />
var Spirograph;
(function (Spirograph) {
    (function (Shapes) {
        'use strict';

        function Beam(options) {
            if (options.endCapsToothCount % 2 !== 0) {
                throw 'Spirograph.Shapes.BeamOptions.endCapToothCount must be an even number';
            }
            if (options.totalToothCount % 2 !== 0) {
                throw 'Spirograph.Shapes.BeamOptions.totalToothCount must be an even number';
            }

            var pathBuilder = new Spirograph.SVG.PathBuilder(), radius = 2 * options.endCapsToothCount, beamToothCount = options.totalToothCount - options.endCapsToothCount, toothWidth = 2 * Math.PI * radius / options.endCapsToothCount, totalWidth = 2 * radius + toothWidth * (beamToothCount / 2), totalHeight = 2 * radius, offsetX = -1 * totalWidth / 2 + radius, toothAngleDelta = 360 / options.endCapsToothCount;

            // if we're passed a toothWidth, we calculate some things differently
            if (options.toothWidth) {
                toothWidth = options.toothWidth;
                radius = ((options.totalToothCount - options.endCapsToothCount) * toothWidth) / (2 * Math.PI);
                totalWidth = 2 * radius + toothWidth * (beamToothCount / 2), totalHeight = 2 * radius, offsetX = -1 * totalWidth / 2 + radius, toothAngleDelta = 360 / options.endCapsToothCount;
            }

            pathBuilder.addCommand(new Spirograph.SVG.MCommand(offsetX, -1 * radius));

            for (var i = 0; i < beamToothCount / 2; i++) {
                pathBuilder.addCommand(new Spirograph.SVG.LCommand((i + 1 / 12) * toothWidth + offsetX, -1 * radius));
                pathBuilder.addCommand(new Spirograph.SVG.LCommand((i + 5 / 12) * toothWidth + offsetX, (-1 * radius) + options.toothHeight));
                pathBuilder.addCommand(new Spirograph.SVG.LCommand((i + 7 / 12) * toothWidth + offsetX, (-1 * radius) + options.toothHeight));
                pathBuilder.addCommand(new Spirograph.SVG.LCommand((i + 11 / 12) * toothWidth + offsetX, -1 * radius));
                pathBuilder.addCommand(new Spirograph.SVG.LCommand((i + 12 / 12) * toothWidth + offsetX, -1 * radius));
            }

            // draw the right endcap
            var endCapOffsetX = offsetX *= -1;
            for (var i = 0; i < options.endCapsToothCount / 2; i++) {
                pathBuilder.addCommand(new Spirograph.SVG.ACommand(radius, radius, 0, false, true, radius * Math.cos(Spirograph.Utility.toRadians(90 - (i + 1 / 12) * toothAngleDelta)) + endCapOffsetX, -1 * radius * Math.sin(Spirograph.Utility.toRadians(90 - (i + 1 / 12) * toothAngleDelta))));
                pathBuilder.addCommand(new Spirograph.SVG.LCommand((radius - options.toothHeight) * Math.cos(Spirograph.Utility.toRadians(90 - (i + 5 / 12) * toothAngleDelta)) + endCapOffsetX, -1 * (radius - options.toothHeight) * Math.sin(Spirograph.Utility.toRadians(90 - (i + 5 / 12) * toothAngleDelta))));
                pathBuilder.addCommand(new Spirograph.SVG.ACommand(radius, radius, 0, false, true, (radius - options.toothHeight) * Math.cos(Spirograph.Utility.toRadians(90 - (i + 7 / 12) * toothAngleDelta)) + endCapOffsetX, -1 * (radius - options.toothHeight) * Math.sin(Spirograph.Utility.toRadians(90 - (i + 7 / 12) * toothAngleDelta))));
                pathBuilder.addCommand(new Spirograph.SVG.LCommand(radius * Math.cos(Spirograph.Utility.toRadians(90 - (i + 11 / 12) * toothAngleDelta)) + endCapOffsetX, -1 * radius * Math.sin(Spirograph.Utility.toRadians(90 - (i + 11 / 12) * toothAngleDelta))));
                pathBuilder.addCommand(new Spirograph.SVG.ACommand(radius, radius, 0, false, true, radius * Math.cos(Spirograph.Utility.toRadians(90 - (i + 12 / 12) * toothAngleDelta)) + endCapOffsetX, -1 * radius * Math.sin(Spirograph.Utility.toRadians(90 - (i + 12 / 12) * toothAngleDelta))));
            }

            // draw the bottom of the beam
            offsetX *= -1;
            for (var i = (beamToothCount / 2); i > 0; i--) {
                pathBuilder.addCommand(new Spirograph.SVG.LCommand((i - 1 / 12) * toothWidth + offsetX, radius));
                pathBuilder.addCommand(new Spirograph.SVG.LCommand((i - 5 / 12) * toothWidth + offsetX, radius - options.toothHeight));
                pathBuilder.addCommand(new Spirograph.SVG.LCommand((i - 7 / 12) * toothWidth + offsetX, radius - options.toothHeight));
                pathBuilder.addCommand(new Spirograph.SVG.LCommand((i - 11 / 12) * toothWidth + offsetX, radius));
                pathBuilder.addCommand(new Spirograph.SVG.LCommand((i - 12 / 12) * toothWidth + offsetX, radius));
            }

            // draw the left endcap
            var endCapOffsetX = offsetX;
            for (var i = 0; i < options.endCapsToothCount / 2; i++) {
                pathBuilder.addCommand(new Spirograph.SVG.ACommand(radius, radius, 0, false, true, radius * Math.cos(Spirograph.Utility.toRadians(-90 - (i + 1 / 12) * toothAngleDelta)) + endCapOffsetX, -1 * radius * Math.sin(Spirograph.Utility.toRadians(-90 - (i + 1 / 12) * toothAngleDelta))));
                pathBuilder.addCommand(new Spirograph.SVG.LCommand((radius - options.toothHeight) * Math.cos(Spirograph.Utility.toRadians(-90 - (i + 5 / 12) * toothAngleDelta)) + endCapOffsetX, -1 * (radius - options.toothHeight) * Math.sin(Spirograph.Utility.toRadians(-90 - (i + 5 / 12) * toothAngleDelta))));
                pathBuilder.addCommand(new Spirograph.SVG.ACommand(radius, radius, 0, false, true, (radius - options.toothHeight) * Math.cos(Spirograph.Utility.toRadians(-90 - (i + 7 / 12) * toothAngleDelta)) + endCapOffsetX, -1 * (radius - options.toothHeight) * Math.sin(Spirograph.Utility.toRadians(-90 - (i + 7 / 12) * toothAngleDelta))));
                pathBuilder.addCommand(new Spirograph.SVG.LCommand(radius * Math.cos(Spirograph.Utility.toRadians(-90 - (i + 11 / 12) * toothAngleDelta)) + endCapOffsetX, -1 * radius * Math.sin(Spirograph.Utility.toRadians(-90 - (i + 11 / 12) * toothAngleDelta))));
                pathBuilder.addCommand(new Spirograph.SVG.ACommand(radius, radius, 0, false, true, radius * Math.cos(Spirograph.Utility.toRadians(-90 - (i + 12 / 12) * toothAngleDelta)) + endCapOffsetX, -1 * radius * Math.sin(Spirograph.Utility.toRadians(-90 - (i + 12 / 12) * toothAngleDelta))));
            }

            pathBuilder.addCommand(new Spirograph.SVG.ZCommand());
            return pathBuilder.toString();
        }
        Shapes.Beam = Beam;
    })(Spirograph.Shapes || (Spirograph.Shapes = {}));
    var Shapes = Spirograph.Shapes;
})(Spirograph || (Spirograph = {}));
//# sourceMappingURL=Beam.js.map
