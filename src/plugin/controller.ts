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
};

const node = figma.createVector();

node.vectorPaths = [
    {
        windingRule: 'NONZERO',
        data:
            'M 20 0 L 350 0 L 640 800 L 360 800 Z M 210 120 L 940 120 L 940 340 L 210 340 Z M 800 0 L 1270 0 L 930 800 L 480 800 Z M 410 540 L 830 540 L 830 800 L 410 800 Z',
    },
];

node.fills = [{type: 'SOLID', color: {r: 0, g: 0, b: 0}}];
node.strokeWeight = 0;

node.setPluginData('canvas_text_content', 'a');
node.setPluginData('canvas_font_size', '14');

// Put the node in the center of the viewport so we can see it
node.x = figma.viewport.center.x - node.width / 2;
node.y = figma.viewport.center.y - node.height / 2;

figma.showUI(__html__, {
    width: 300,
    height: 600,
});
