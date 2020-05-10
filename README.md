# Figma Variable Fonts
A plugin to provide basic variable fonts support through Samsa.js.

This plugin allows you to:

- Render variable fonts in the Figma canvas
- Create static font instances, using a variable font's variable axes
- Load the static instances in a variable font's fvar table
- Preview, display, and update variable fonts
- Add and edit text for variable fonts to the Figma canvas

## Todos

- [ ] Load variable fonts into plugin modal
- [ ] Upload variable font from file path 
- [ ] Preview variable font axes
- [ ] Load variable font as static instance in Figma canvas
- [ ] Load variable font as SVG in Figma canvas
- [ ] View font instances from fvar table as list
- [ ] Control variable font axes using slider
- [ ] Control variable font axes by "locking" axes together
- [ ] Edit text in Figma canvas that was added using the variable font plugin


## Development
- clone repository from GitHub
    ````
    git clone https://github.com/rememberlenny/figma-variable-fonts.git
    ````

- install node modules either with `Yarn` or `npm`

    Yarn:
    ````
    cd <your project name>
    yarn 
    ````
    
    npm:
    ````
    cd <your project name>
    npm install
    ````

- run

    Yarn:
    ````
    yarn webpack:watch 
    ````
    
    npm:
    ````
    cd figma-variable-fonts
    npm run webpack:watch
    ````
