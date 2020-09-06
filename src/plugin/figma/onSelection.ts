import {isJsonString} from '../shared/utils';
import {NODE_PROPS, NODE_TYPES, FIGMA_EVENT_TYPES, STATUSES} from '../shared/constants';

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
      type: FIGMA_EVENT_TYPES.SELECTED_CHANGED,
      status: STATUSES.ERROR,
      message: 'Select a single node.',
    };
  }

  const node = figma.currentPage.selection[0];
  console.log('node', node);

  if (node.getPluginData(NODE_PROPS.TEXT_CONTENT)) {
    console.log(NODE_PROPS.TEXT_CONTENT);
    let axes = '';
    const nodeAxes = node.getPluginData(NODE_PROPS.AXES);
    if (isJsonString(nodeAxes)) {
      axes = JSON.parse(nodeAxes);
    }
    return {
      type: FIGMA_EVENT_TYPES.SELECTED_CHANGED,
      status: STATUSES.SUCCESS,
      axes,
      fontName: node.getPluginData(NODE_PROPS.FONT_NAME),
      content: node.getPluginData(NODE_PROPS.TEXT_CONTENT),
      fontSize: node.getPluginData(NODE_PROPS.FONT_SIZE),
      isVariableFontNode: node.getPluginData(NODE_PROPS.IS_VARIABLE_FONT),
    };
  }

  if (node.type !== NODE_TYPES.TEXT) {
    console.log('node not text', node);
    return {
      type: FIGMA_EVENT_TYPES.SELECTED_CHANGED,
      status: STATUSES.ERROR,
      message: 'Select a single text node.',
    };
  }

  if (node.type === NODE_TYPES.TEXT) {
    console.log('here we are', node);
    return {
      type: FIGMA_EVENT_TYPES.SELECTED_CHANGED,
      status: STATUSES.SUCCESS,
      content: node.characters,
      fontSize: node.fontSize,
    };
  }
};
