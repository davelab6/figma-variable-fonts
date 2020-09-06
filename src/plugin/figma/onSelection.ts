import {isJsonString} from '../shared/utils';

/**
 * How this works
 *
 * 1. Check if the node is one or many
 * 2. Check if the selection has the plugin data
 * 3. If not text at all, then error out
 * 4. If is a selected non text node, then go forth
 */
export const onSelectChange = () => {
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
};
