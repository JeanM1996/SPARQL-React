import React from 'react';
import * as C from './components';
import D from 'js/i18n';

export const items = [
	{ route: `/`, title: D.summary, body: <C.Home /> },
	/*{
		route: `/pop-establishments`,
		title: D.popEtabsTitle,
		body: <C.PopEtabs />,
	},*/
	{
		route: `/population`,
		title: D.pop5Title,
		body: <C.Population />,
	},/*
	{
		route: `/population-by-dimension`,
		title: D.popDimensionTitle,
		body: <C.PopulationByDimensions />,
	},*/
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
