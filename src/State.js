import { useState } from 'react';

import { createContainer } from 'react-tracked';

const initialState = {
	element: 'geo',
	character: 'amber'
};

const useValue = () => useState(initialState);

export const { Provider, useTracked } = createContainer(useValue, true);
