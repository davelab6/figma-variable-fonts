import {addSpaces} from '../shared/utils';

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
