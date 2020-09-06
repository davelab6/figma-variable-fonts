import {addSpaces} from '../shared/utils';
import {NODE_PROPS} from '../shared/constants';

export const setupGlyph = (pathData) => {
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

  node.setPluginData(NODE_PROPS.IS_VARIABLE_FONT, 'true');
  node.setPluginData(NODE_PROPS.FONT_NAME, pathData.fontName);
  node.setPluginData(NODE_PROPS.AXES, JSON.stringify(pathData.axes));
  node.setPluginData(NODE_PROPS.TEXT_CONTENT, String.fromCharCode(pathData.codePoints));
  node.setPluginData(NODE_PROPS.FONT_SIZE, '14');
  const angle = 0;
  node.relativeTransform = [
    [Math.cos(angle), -Math.sin(angle), 0],
    [-Math.sin(angle), -Math.cos(angle), 0],
  ];

  // Put the node in the center of the viewport so we can see it
  node.x = figma.viewport.center.x - node.width / 2;
  node.y = figma.viewport.center.y - node.height / 2;
};
