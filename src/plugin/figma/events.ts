import {setupGlyph} from '../shared/utils';
import {addSpaces} from '../shared/utils';
import {onSelectChange} from './onSelectChange';

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
