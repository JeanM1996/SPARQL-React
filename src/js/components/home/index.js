import React from 'react';
import { Link } from 'react-router-dom';
import { items } from 'js/components/router/component-list';
import obtencion from '../../../img/obtencion.png';
import generacion from '../../../img/generacion.png';
import almacenamiento from '../../../img/almacenamiento.PNG';
import proceso from '../../../img/proceso.png';
import {NavigationUnfoldLess} from "material-ui/svg-icons/index.es";

export default () => (

	<ul>
		{items.map(
			({ route, title }, i) =>
				i !== 0 &&
				(route ? (
					<li key={i} className="item">
						<Link to={route}>{title}</Link>
					</li>
				) : (
					<React.Fragment key={i}>
						<br />
						<h2 className="item-title centered">
							<i>{title}</i>
						</h2>
					</React.Fragment>
				))
		)}
		<h1><strong>Proceso</strong></h1>
		<p>El proceso inicia con la busqueda de fuentes de datos relacionados con estadísticas del Covid 19 en Latinoamérica, seguidamente se procede a extraer esta infromación para
			proceder a limpiarla y estructurarla como paso previo para la representación empleando el modelo ontológico, posteriormente empleando Java y Jena (librería para procesamiento LOD).
		Se procedio a generar las tripletas (Sujeto - Predicado - Objeto), las cuales representan la información de forma entendible para máquinas y humanos. Posteriormente las tripletas fueron
			alojadas en  GraphDB (Triple Store) el cual provee varias ventajas, entre ellas un endpoint Sparql necesario para la explotación de datos. Finalmente se desarrollo una aplicación web
		empleando React Js, para de este modo permitis al usuario realizar las consultas del grafo de conocimiento sin necesidad de un conocimiento especializado.</p>
		<img style={{width: "100%"}} src={proceso}/>
		<h1><strong>Fuentes</strong></h1>
		<p>Se difiniero las siguientes fuentes, las cuales presentan la información actualizada y semi-estructurada</p>
		<p>Se ha considerado en función a los atributos clasificar las fuentes de datos en función a la data que proveen, sean estas estadísticas, medidas o acciones gubernamentales,
			descripción de casos, entre otras, para de este modo lograr un proceso más limpio al momento de adaptar las fuentes de datos al modelo propuesto.
			Así se ha definido la información a obtener de cada una de las fuentes para evitar redundancia.</p>
		<table>
			<tr>
				<th style={{border: "black 1px solid"}}>Fuente</th>
				<th style={{border: "black 1px solid"}}>Descripción</th>
			</tr>
			<tr>
				<td style={{border: "black 1px solid"}}><a href={"https://www.datos.gov.co/Salud-y-Protecci-n-Social/Casos-positivos-de-COVID-19-en-Colombia/gt2j-8ykr/data "}>https://www.datos.gov.co/Salud-y-Protecci-n-Social/Casos-positivos-de-COVID-19-en-Colombia/gt2j-8ykr/data </a></td>
				<td style={{border: "black 1px solid"}}>Información médica de casos en Colombia</td>
			</tr>
			<tr>
				<td style={{border: "black 1px solid"}}><a href={"https://github.com/andrab/ecuacovid "}>https://github.com/andrab/ecuacovid </a></td>
				<td style={{border: "black 1px solid"}}>Estadísticas hospitalizados, y muestras</td>
			</tr>
			<tr>
				<td style={{border: "black 1px solid"}}><a href={"https://data.humdata.org/dataset/total-covid-19-tests-performed-by-country "}>https://data.humdata.org/dataset/total-covid-19-tests-performed-by-country </a></td>
				<td style={{border: "black 1px solid"}}>Tests</td>
			</tr>
			<tr>
				<td style={{border: "black 1px solid"}}><a href={"https://www.acaps.org/covid19-government-measures-dataset "}>https://www.acaps.org/covid19-government-measures-dataset </a></td>
				<td style={{border: "black 1px solid"}}>Medidas</td>
			</tr>
			<tr>
				<td style={{border: "black 1px solid"}}><a href={"https://github.com/owid/covid-19-data/tree/master/public/data/ "}>https://github.com/owid/covid-19-data/tree/master/public/data/ </a></td>
				<td style={{border: "black 1px solid"}}>Tests, Gdp, Camas Hospital, y Población</td>
			</tr>
			<tr>
				<td style={{border: "black 1px solid"}}><a href={"https://github.com/microsoft/Bing-COVID-19-Data/tree/master/data "}>https://github.com/microsoft/Bing-COVID-19-Data/tree/master/data </a></td>
				<td style={{border: "black 1px solid"}}>Estadisticas Confirmados, Recuperdadosy Fallecidos</td>
			</tr>
		</table>
		<h1><strong>Generación (Obtención, Limpieza, Enlazado de datos)</strong></h1>
		<p>Para la parte de generación, que comprende la obtención, limpieza y enlazado, se está considerando la aplicación de la siguiente estrategia, que consiste en:
			<ul>
				<li>Extracción de todos los datos de los diferentes dataset antes analizados.</li>
				<li>Limpieza y disposición de datos en otro fichero.</li>
				<li>Filtrado de datos en función a país con el objetivo de obtener únicamente datos de los países latinoamericanos.</li>
				<li>Filtrado de campos acorde a los requeridos en las clases del modelo ontológico.</li>
				<li>Creación de Script para lectura de fichero y posterior uso de los datos.</li>
			</ul>
		</p>
		<img style={{width: "90%"}}  src={obtencion}/>
		<img style={{width: "90%"}} src={generacion}/>
		<h1><strong>Almacenamiento Ontologia</strong></h1>
		<p><strong>GraphDB</strong> entre muchos de sus beneficios provee una interfaz intuitiva y amigable para gestionar los repositorios y subir los datos generados previamente.</p>
		<img style={{width: "90%"}} src={almacenamiento}/>
	</ul>

);
