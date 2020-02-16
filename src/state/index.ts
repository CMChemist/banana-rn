import React from 'react';
import getEnv from '@util/environment';
import useGlobalHook from 'use-global-hook';
import { InitialState } from './index.types';

import * as actions from './actions';

const {
	USER_IDENTITY,
	API_BASE_URL,
	LOGIN_URL,
	MAP_OR_LIST_VIEW,
} = getEnv() as any;

export const initialState: InitialState = {
	userIdentity: USER_IDENTITY,
	apiBaseUrl: API_BASE_URL,
	loginUrl: LOGIN_URL,
	donorAddresses: [],
	donations: [],
	claims: [],
	jwt: undefined,
	user: {},
	mapOrListView: 'map',
};

// Paste the following into your code to use global state & actions:

// import useGlobal from '@state';
// const [ state, actions ] = useGlobal;

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
