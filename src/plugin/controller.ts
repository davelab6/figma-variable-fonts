// @ts-nocheck

function onSelectChange() {
    if (figma.currentPage.selection.length !== 1) {
        return {
            type: 'selected-change',
            status: 'error',
            message: 'Select a single node.',
        };
    }

    const node = figma.currentPage.selection[0];
    if (node.getPluginData('canvas_text_content')) {
        return {
            type: 'selected-change',
            status: 'success',
            content: node.getPluginData('canvas_text_content'),
            fontSize: node.getPluginData('canvas_font_size'),
        };
    }

    if (node.type !== 'TEXT') {
        return {
            type: 'selected-change',
            status: 'error',
            message: 'Select a single text node.',
        };
    }

    return {type: 'selected-change', status: 'success', content: node.characters, fontSize: node.fontSize};
}

const setupGlyph = (pathData) => {
    console.log('WHHH');
    const node = figma.createVector();

    node.vectorPaths = [
        {
            windingRule: 'NONZERO',
            data: pathData.svg,
        },
    ];

    node.fills = [{type: 'SOLID', color: {r: 0, g: 0, b: 0}}];
    node.strokeWeight = 0;

    node.setPluginData('canvas_text_content', String.fromCharCode(pathData.codePoints));
    node.setPluginData('canvas_font_size', '14');

    // Put the node in the center of the viewport so we can see it
    node.x = figma.viewport.center.x - node.width / 2;
    node.y = figma.viewport.center.y - node.height / 2;
};

function updateUiSelection() {
    figma.ui.postMessage({
        payload: onSelectChange(),
    });
}

figma.on('selectionchange', () => {
    updateUiSelection();
});

figma.ui.onmessage = (msg) => {
    if (msg.type === 'on-ui-loaded') {
        updateUiSelection();
    }

    if (msg.type === 'render-svg') {
        console.log('payload', msg.payload);
        const {svgPathData} = msg.payload;

        svgPathData.forEach((pathData) => {
            setupGlyph(pathData);
        });
    }
};

figma.showUI(__html__, {
    width: 300,
    height: 600,
});
