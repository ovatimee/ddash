import * as React from 'react';
function SvgDocumentScanner(props) {
    return (<svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 24 24' width='1em' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z'/>
			<path d='M7 6v12h10V6H7zm8 10H9v-2h6v2zm0-3H9v-2h6v2zm0-3H9V8h6v2z' opacity={0.3}/>
			<path d='M7 3H4v3H2V1h5v2zm15 3V1h-5v2h3v3h2zM7 21H4v-3H2v5h5v-2zm13-3v3h-3v2h5v-5h-2zM17 6H7v12h10V6zm2 12c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v12zM15 8H9v2h6V8zm0 3H9v2h6v-2zm0 3H9v2h6v-2z'/>
		</svg>);
}
export default SvgDocumentScanner;
