import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ( {onInputChange, onButtonSubmit} ) => {
	return(
		<div>
			<p className= 'f3'>
				{'AI Face detection, give it a try!'}
			</p>
			<div className= 'center'>
				<div className = 'form center pa4 br3 shadow-5'>
					<input className= 'f4 pa2 w-70 center' 
						type = 'tex' 
						placeholder="Image URL" 
						onChange = {onInputChange}/>
					<button className= 'w-30 f3 grow no-underline br-pill ph3 pv2 mb2 dib white bg-near-black'
						onClick = {onButtonSubmit}
						>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;