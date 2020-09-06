import fontkit from 'fontkit-browserified';

export const openURL = function (url, callback) {
    let font = null;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            let buffer;
            if (this.status == 200) {
                buffer = new Buffer(this.response);
                font = fontkit.create(buffer);
                callback(null, font);
            } else {
                callback(this.status + ' ' + this.statusText, null);
            }
        }
    };
    xhr.send();
};

export const loadFontForOutput = (url, callback) => {
    console.log('fontkit', fontkit);
    if (!fontkit) {
        alert('fontkit not loaded; please wait a second and try again.');
        return;
    }
    openURL(url, function (err, font) {
        if (err) {
            alert('Failed loading font: ' + err);
        } else {
            callback(font);
        }
    });
};

export const getSVG = (fontName, font, axes, text) => {
    const xmlns = 'http://www.w3.org/2000/svg';

    try {
        font = font.getVariation(axes);
    } catch (e) {
        alert(e);
        return;
    }

    const glyphrun = font.layout(text);
    if (glyphrun.glyphs.length <= 0) {
        return;
    }
    let xMin = 0;
    let yMin = 0;
    let xMax = 0;
    let yMax = 0;
    let advwidth = 0;
    const paths = [];
    glyphrun.glyphs.forEach((glyph) => {
        paths.push({fontName, axes, svg: glyph.path.toSVG(), codePoints: glyph.codePoints});
        // paths.push('<path transform="translate(' + advwidth + ',0)" d="' + glyph.path.toSVG() + '"/>');

        xMin = Math.min(xMin, advwidth + glyph.bbox.minX);
        yMin = Math.min(yMin, glyph.bbox.minY);
        xMax = Math.max(xMax, advwidth + glyph.bbox.maxX);
        yMax = Math.max(yMax, glyph.bbox.maxY);
        advwidth += glyph.advanceWidth;
    });

    return paths;

    // const viewbox = [xMin, yMin, xMax-xMin, yMax-yMin];

    // const editSize = 40;
    // const backgroundColor = '#ffffff'
    // const foregroundColor = '#000000'

    // const svglines = [];
    // svglines.push('<?xml version="1.0" standalone="yes" ?>');
    // svglines.push('<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">');
    // svglines.push('<svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="' + viewbox.join(' ') + '" height="' + editSize + 'px" width="' + (editSize*viewbox[2]/viewbox[3]) + '">');
    // svglines.push('<rect fill="' + backgroundColor + '" x="' + viewbox[0] + '" y="' + viewbox[1] + '" width="' + viewbox[2] + '" height="' + viewbox[3] + '"/>');
    // svglines.push('<g stroke="none" fill="' + foregroundColor + '" transform="translate(0,' + (viewbox[1]+viewbox[3]) +') scale(1,-1) translate(0,' + (-viewbox[1]) + ')">');
    // svglines.push(paths.join("\n"));
    // svglines.push('</g>');
    // svglines.push('</svg>');

    // return svglines.join("\n");
};

export const createFigmaGlyph = (fontName, text, axes, fontUrl) => {
    loadFontForOutput(fontUrl, function (font) {
        const svgPathData = getSVG(fontName, font, axes, text);
        console.log('svgPathData', svgPathData);
        window.parent.postMessage(
            {
                pluginMessage: {
                    type: 'render-svg',
                    payload: {svgPathData},
                },
            },
            '*'
        );
    });
};
