import * as React from 'react';
function SvgMenuButton(props) {
    return (<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='currentColor' className='svg-icon' viewBox='0 0 16 16' {...props}>
			<path d='M0 1.5A1.5 1.5 0 011.5 0h8A1.5 1.5 0 0111 1.5v2A1.5 1.5 0 019.5 5h-8A1.5 1.5 0 010 3.5v-2zM1.5 1a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h8a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-8z'/>
			<path d='M7.823 2.823l-.396-.396A.25.25 0 017.604 2h.792a.25.25 0 01.177.427l-.396.396a.25.25 0 01-.354 0zM0 8a2 2 0 012-2h12a2 2 0 012 2v5a2 2 0 01-2 2H2a2 2 0 01-2-2V8zm1 3v2a1 1 0 001 1h12a1 1 0 001-1v-2H1zm14-1V8a1 1 0 00-1-1H2a1 1 0 00-1 1v2h14zM2 8.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0 4a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5z'/>
		</svg>);
}
export default SvgMenuButton;
