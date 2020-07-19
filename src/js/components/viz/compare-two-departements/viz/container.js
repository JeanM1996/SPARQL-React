import React from 'react';
import { sparqlConnect } from 'sparql-connect';
import Viz from './viz';
import Spinner from 'js/components/shared/spinner';
import D from 'js/i18n';

const queryBuilder = (dimension, idDepA, idDepB) => `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
PREFIX dbo: <http://dbpedia.org/ontology/> 
PREFIX gn: <http://www.geonames.org/ontology#> 
PREFIX j.0: <https://ld.utpl.edu.ec/dataCOVID/ontology#> 
PREFIX schema: <http://schema.org/> 
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
select DISTINCT  ?dep ?popByDim where {  
    ?dep rdf:type dbo:Province. 
    ?dep dbo:name ?nombrePais. 
    ?res gn:locatedIn ?dep. 
    VALUES ?dep {<${idDepA}> <${idDepB}>} .
    ?res j.0:quantity ?popByDim. 
    ?res schema:observationDate ?date.
    FILTER CONTAINS (?date, "19/06/2020")
    FILTER CONTAINS (str(?res), "/${dimension}/")
} GROUP BY ?dep ?popByDim
`;

const connector = sparqlConnect(queryBuilder, {
	queryName: 'popDepByDim',
	params: ['dimension', 'idDepA', 'idDepB'],
});

const VizContainer = ({
	popDepByDim,
	depA,
	depB,
	valueTabs,
	handleChangeTabsValue,
}) => (
	<div>
		<Viz
			data={popDepByDim}
			depA={depA}
			depB={depB}
			valueTabs={valueTabs}
			handleChangeTabsValue={handleChangeTabsValue}
		/>
	</div>
);

export default connector(VizContainer, {
	loading: () => <Spinner text={D.loading} />,
});
