import { useState } from 'react';
import { useFileStore } from '../data/filestore'

function FileInput() {
	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) = > {
		const file = event.target.files?.[0];
		setFile(file);
	};

	return (<input type="file" onChange={handleFileChange} />);
}
