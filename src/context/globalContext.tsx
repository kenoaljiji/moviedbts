import { createContext } from 'react';
import { ActionType, GlobalStateInterface } from '../types';

import { initialState } from '../types';

const globalContext = createContext<{
    state: GlobalStateInterface;
    dispatch: React.Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => undefined });

export default globalContext;
