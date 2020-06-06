import {SamsaFont} from 'samsa';

type ActionMap<M extends {[index: string]: any}> = {
    [Key in keyof M]: M[Key] extends undefined
        ? {
              type: Key;
          }
        : {
              type: Key;
              payload: M[Key];
          };
};

interface AxisType {
    axisNameId: number;
    default: number;
    flags: number;
    id: number;
    max: number;
    min: number;
    name: string;
    tag: string;
}

interface FontDataType {
    axes?: AxisType[];
    names?: string[];
    [key: string]: any;
}

export enum Types {
    Reset = 'RESET_FONTDATA',
    Update = 'UPDATE_FONTDATA',
    Fetching = 'FETCH_FONTDATA',
    UpdateAxis = 'UPDATE_AXIS',
    ResetAxis = 'RESET_AXIS',
    SetupSamsa = 'SETUP_SAMSA',
    AddInstance = 'ADD_INSTANCE',
}

interface FontActionType {
    type: Types.Reset | Types.Update | Types.Fetching | Types.SetupSamsa | Types.AddInstance;
    payload?: {
        fontData?: FontDataType;
    };
}

interface FontPayload {
    [Types.Update]: {
        fontData: FontDataType;
    };
}

export type FontActions = ActionMap<FontPayload>[keyof ActionMap<FontPayload>];

export function fontReducer(state, action: FontActionType | AxisActionType) {
    switch (action.type) {
        // ... to make sure that we don't have any other strings here ...
        case Types.SetupSamsa:
            console.log('payload', action.payload);
            return {
                ...state,
                samsa: action.payload,
            };
        case Types.AddInstance:
            const config = {
                path: '.',
                isNode: false,
            };

            const init = {
                callback: vfLoaded,
                outFile: 'samsa-instance',
                url: 'https://lorp.github.io/samsa/src/fonts/Amstelvar-Roman-VF.ttf',
            };

            const allInstances = [];
            let instanceDefs = [];

            instanceDefs = ['wght 155'];

            const vf = new SamsaFont(init, config);

            function vfLoaded(font) {
                console.log('font', font);
                // assemble the list of supplied instance definitions, expanding "named" and "stat" values
                instanceDefs.forEach(instanceDef => {
                    instanceDef = instanceDef.trim();
                    const instances = [];
                    const fvs = {}; // default

                    let instanceType;

                    instances.push(font.addInstance({wght: 155}, {type: 'custom'}));
                    font.instances.pop();

                    allInstances.push(...instances);
                });

                // for each instance, compile binary file
                allInstances.forEach((instance, i) => {
                    const extraName = instance.name === undefined ? '' : `(${instance.name})`;
                    instance.filename = `${init.outFile}-${i}${extraName}.ttf`;
                    font.exportInstance(instance);
                });
            }
            return {
                ...state,
            };
        case Types.Reset:
            return {
                ...state,
                loading: false,
                data: {},
            };

        case Types.Update:
            return {
                ...state,
                loading: false,
                data: action.payload.fontData,
            };

        case Types.Fetching:
            return {
                ...state,
                loading: true,
            };

        default:
            return state;
    }
}

interface AxisActionType {
    type: Types.UpdateAxis | Types.ResetAxis;
    payload?: {
        [key: string]: number;
    };
}

interface AxisPayload {
    [Types.UpdateAxis]: {
        [key: string]: number;
    };
    [Types.ResetAxis]: {
        [key: string]: number;
    };
}

export type AxisActions = ActionMap<AxisPayload>[keyof ActionMap<AxisPayload>];

export function axisReducer(state, action: AxisActionType | FontActionType) {
    switch (action.type) {
        // ... to make sure that we don't have any other strings here ...
        case Types.UpdateAxis:
            return {
                ...state,
                ...action.payload,
            };

        case Types.ResetAxis:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
}
