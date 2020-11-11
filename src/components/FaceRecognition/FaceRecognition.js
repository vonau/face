import React from 'react';

const FaceRecognition = ( {imageURL} ) => {
	return(
		<div className = 'center ma mt2'>
				<img alt = '' src={imageURL} width = '500px' height = 'auto' />		
		</div>
	);
}

export default FaceRecognition;