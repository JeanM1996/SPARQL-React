import React from 'react';
import * as C from './components';
import D from 'js/i18n';

export const items = [
	{ route: `/`, title: D.summary, body: <C.Home /> },
	{
		route: `/population`,
		title: D.pop5Title,
		body: <C.Population />,
	},
	{
		route: `/population-departemental-comparisons`,
		title: D.popComparisonTitle,
		body: <C.PopulationDepCompare />,
	},
	{
		route: `/unemployement-map`,
		title: D.unemployementTitle,
		body: <C.UnemployementMap />,
	},
];
