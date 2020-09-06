import {addSpaces, isJsonString} from './utils';
import {figmaInit} from './figma/init';

// @ts-nocheck

/**
 * How this works
 *
 * 1. Check if the node is one or many
 * 2. Check if the selection has the plugin data
 * 3. If not text at all, then error out
 * 4. If is a selected non text node, then go forth
 */
function onSelectChange() {
  if (figma.currentPage.selection.length !== 1) {
    console.log('not 1');
    return {
      type: 'selected-change',
      status: 'error',
      message: 'Select a single node.',
    };
  }

  const node = figma.currentPage.selection[0];
  console.log('node', node);

  if (node.getPluginData('node_text_content')) {
    console.log('node_text_content');
    let axes = '';
    const nodeAxes = node.getPluginData('node_axes');
    if (isJsonString(nodeAxes)) {
      axes = JSON.parse(nodeAxes);
    }
    return {
      type: 'selected-change',
      status: 'success',
      axes,
      fontName: node.getPluginData('node_font_name'),
      content: node.getPluginData('node_text_content'),
      fontSize: node.getPluginData('node_font_size'),
      isVariableFontNode: node.getPluginData('is_variable_font'),
    };
  }

  if (node.type !== 'TEXT') {
    console.log('node not text');
    return {
      type: 'selected-change',
      status: 'error',
      message: 'Select a single text node.',
    };
  }

  console.log('here we are');
  if (node.type == 'TEXT') {
    return {
      type: 'selected-change',
      status: 'success',
      content: node.characters,
      fontSize: node.fontSize,
    };
  }
}

const setupGlyph = (pathData) => {
  const node = figma.createVector();

  node.vectorPaths = [
    {
      windingRule: 'NONZERO',
      data: addSpaces(pathData.svg),
    },
  ];

  node.fills = [{type: 'SOLID', color: {r: 0, g: 0, b: 0}}];
  node.strokeWeight = 0;
  // node.rotation = 180

  node.setPluginData('is_variable_font', 'true');
  node.setPluginData('node_font_name', pathData.fontName);
  node.setPluginData('node_axes', JSON.stringify(pathData.axes));
  node.setPluginData('node_text_content', String.fromCharCode(pathData.codePoints));
  node.setPluginData('node_font_size', '14');
  const angle = 0;
  node.relativeTransform = [
    [Math.cos(angle), -Math.sin(angle), 0],
    [-Math.sin(angle), -Math.cos(angle), 0],
  ];

  // Put the node in the center of the viewport so we can see it
  node.x = figma.viewport.center.x - node.width / 2;
  node.y = figma.viewport.center.y - node.height / 2;
};

function updateUiSelection() {
  const payload = onSelectChange();
  figma.ui.postMessage({
    payload,
  });
}

const setupFigmaEvents = () => {
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

    if (msg.type === 'update-selected-variable-settings') {
      console.log('payload', msg.payload);
      const {svgPathData} = msg.payload;
      const node = figma.currentPage.selection[0];
      if (node) {
        node.setPluginData('node_axes', JSON.stringify(svgPathData[0].axes));
        node.vectorPaths = [
          {
            windingRule: 'NONZERO',
            data: addSpaces(svgPathData[0].svg),
          },
        ];
      }
    }
  };
};

setupFigmaEvents();
figmaInit();
