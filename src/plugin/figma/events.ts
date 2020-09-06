import {setupGlyph} from './glyphs';
import {addSpaces} from '../shared/utils';
import {FIGMA_EVENT_TYPES, NODE_PROPS} from '../shared/constants';
import {onSelectChange} from './onSelection';

export const updateUiSelection = () => {
  const payload = onSelectChange();
  figma.ui.postMessage({
    payload,
  });
};

export const setupFigmaEvents = () => {
  figma.on('selectionchange', () => {
    updateUiSelection();
  });

  figma.ui.onmessage = (msg) => {
    if (msg.type === FIGMA_EVENT_TYPES.ON_UI_LOADED) {
      updateUiSelection();
    }

    if (msg.type === FIGMA_EVENT_TYPES.RENDER_SVG) {
      console.log('payload', msg.payload);
      const {svgPathData} = msg.payload;

      svgPathData.forEach((pathData) => {
        setupGlyph(pathData);
      });
    }

    if (msg.type === FIGMA_EVENT_TYPES.UPDATE_SELECTED_VARIABLE_SETTINGS) {
      console.log('payload', msg.payload);
      const {svgPathData} = msg.payload;
      const node = figma.currentPage.selection[0];
      if (node) {
        node.setPluginData(NODE_PROPS.AXES, JSON.stringify(svgPathData[0].axes));
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
