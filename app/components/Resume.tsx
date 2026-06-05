'use client';

import { useState } from 'react';

export default function Resume() {
	const [zoomed, setZoomed] = useState(true);

	return (
		<div className='xp-scrollbar h-full overflow-auto bg-[#808080] p-4'>
			<img
				src='/resume.jpg'
				alt='Resume'
				draggable={false}
				onClick={() => setZoomed(!zoomed)}
				className={`mx-auto block transition-all duration-200 ${
					zoomed ? 'w-auto cursor-zoom-out' : 'h-full w-full object-contain cursor-zoom-in'
				}`}
			/>
		</div>
	);
}
