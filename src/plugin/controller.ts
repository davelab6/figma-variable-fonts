// @ts-nocheck

figma.showUI(__html__, {
    width: 300,
    height: 900,
});

figma.ui.onmessage = (msg) => {
    figma.closePlugin();
};
