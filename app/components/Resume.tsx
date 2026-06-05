'use client';

export default function Resume({ zoomed, onZoomToggle }: { zoomed: boolean; onZoomToggle: () => void }) {
	return (
		<div className='xp-scrollbar h-full overflow-auto bg-[#808080] p-4'>
			<img
				src='/resume.jpg'
				alt='Resume'
				draggable={false}
				onClick={onZoomToggle}
				className={`mx-auto block transition-all duration-200 ${
					zoomed ? 'w-auto cursor-zoom-out' : 'h-full w-full object-contain cursor-zoom-in'
				}`}
			/>
		</div>
	);
}
