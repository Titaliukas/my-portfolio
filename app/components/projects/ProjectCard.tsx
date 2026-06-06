import { Project } from '@/app/types/projects';

export default function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
	return (
		<div
			onClick={onClick}
			className='cursor-pointer border border-[#aca899] hover:border-[#316ac5] bg-[#f0efe8] flex flex-col'
		>
			<div className='w-full aspect-video overflow-hidden flex-shrink-0'>
				<img src={project.thumbnail} className='w-full h-full object-cover' />
			</div>
			<div className='p-2 flex flex-col gap-1'>
				<p className='text-[13px] text-black font-bold'>{project.name}</p>
				<div className='flex gap-1 flex-wrap'>
					{project.tags.map((tag) => (
						<span key={tag} className='text-[11px] bg-[#316ac5] text-white px-1'>
							{tag}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}
