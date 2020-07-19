const MAIN_ENDPOINT = 'http://graphdb.linked-open-statistics.org/repositories';

export default {
	POP5_ENDPOINT: `${MAIN_ENDPOINT}/pop5`,
	PLOSH_ENDPOINT: `${MAIN_ENDPOINT}/plosh`,
	NUTS_ENDPOINT: `${MAIN_ENDPOINT}/nuts`,
	INSEE_ENDPOINT: `http://rdf.insee.fr/sparql`,
	SIRENE_ENDPOINT: `${MAIN_ENDPOINT}/geo-sirene`,
	CENSUS_POINT_ENDPOINT: `${MAIN_ENDPOINT}/census-point`,
	TEST_ENDPOINT: `${MAIN_ENDPOINT}/test`,
	COVID_ENDPOINT: `${MAIN_ENDPOINT}/Covid`,
};

export const TOKEN = process.env.REACT_APP_MGL_TOKEN;
