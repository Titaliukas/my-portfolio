'use client';

import { Project } from '@/app/types/projects';
import { useState } from 'react';

export default function ProjectDetail({ project }: { project: Project }) {
	const [current, setCurrent] = useState(0);

	const next = () => setCurrent((c) => (c + 1) % project.screenshots.length);
	const prev = () => setCurrent((c) => (c - 1 + project.screenshots.length) % project.screenshots.length);

	return (
		<div className='xp-scrollbar h-full overflow-auto bg-white'>
			{/* Carousel */}
			<div className='relative w-full max-w-[700px] mx-auto aspect-video overflow-hidden group cursor-pointer bg-black'>
				<img src={project.screenshots[current]} className='w-full h-full object-cover' />
				<div
					onClick={prev}
					className='absolute left-0 top-0 h-full w-1/2 flex items-center justify-start px-3 opacity-0 group-hover:opacity-100 transition-opacity'
				>
					<span className='bg-black/40 text-white text-[22px] px-2 py-1 rounded'>‹</span>
				</div>
				<div
					onClick={next}
					className='absolute right-0 top-0 h-full w-1/2 flex items-center justify-end px-3 opacity-0 group-hover:opacity-100 transition-opacity'
				>
					<span className='bg-black/40 text-white text-[22px] px-2 py-1 rounded'>›</span>
				</div>
			</div>

			{/* Title row */}
			<div className='flex items-center justify-between px-4 py-3 border-b text-black border-[#e0e0e0]'>
				<div className='flex items-center gap-2'>
					<h2 className='text-[18px] font-bold'>{project.name}</h2>
				</div>
				<div className='flex gap-1'>
					{project.screenshots.map((_, i) => (
						<button
							key={i}
							onClick={() => setCurrent(i)}
							className={`w-2 h-2 rounded-full ${i === current ? 'bg-[#316ac5]' : 'bg-[#aca899]'}`}
						/>
					))}
				</div>
			</div>

			{/* Description */}
			<div className='px-4 py-3'>
				<div className='flex gap-4 text-[13px] mb-3 text-[#555] border-b border-[#e0e0e0] pb-3'>
					<span className='font-bold text-[#333] w-[60px] shrink-0'>Short:</span>
					<span>{project.shortDescription}</span>
				</div>
				<div className='flex flex-col gap-2'>
					{project.longDescription.map((line, i) => (
						<p
							key={i}
							className={`text-[12px] leading-relaxed ${line.startsWith('•') ? 'pl-3 text-[#333]' : 'text-[#444]'}`}
						>
							{line}
						</p>
					))}
				</div>
			</div>
		</div>
	);
}
