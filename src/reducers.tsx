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
}

interface FontActionType {
    type: Types.Reset | Types.Update | Types.Fetching;
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

export function fontReducer(state, action: FontActionType) {
    switch (action.type) {
        // ... to make sure that we don't have any other strings here ...
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
        axisValues?: {[key: string]: any};
    };
}

interface AxisPayload {
    [Types.UpdateAxis]: {
        axisValues: AxisActionType;
    };
    [Types.ResetAxis]: {
        axisValues: AxisActionType;
    };
}

export type AxistActions = ActionMap<AxisPayload>[keyof ActionMap<AxisPayload>];

export function axisReducer(state, action: AxisActionType) {
    switch (action.type) {
        // ... to make sure that we don't have any other strings here ...
        case Types.UpdateAxis:
            return {
                ...state,
                ...action.payload.axisValues,
            };

        default:
            return state;
    }
}
