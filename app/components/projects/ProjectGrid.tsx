import ProjectCard from '@/app/components/projects/ProjectCard';
import { Project, projects } from '@/app/types/projects';

export default function ProjectGrid({ onSelect }: { onSelect: (p: Project) => void }) {
	return (
		<div
			className='xp-scrollbar grid gap-4 p-4 bg-white overflow-auto content-start'
			style={{
				gridTemplateColumns: 'repeat(auto-fill, minmax(500px, 1fr))',
				height: '100%',
			}}
		>
			{projects.map((p) => (
				<ProjectCard key={p.id} project={p} onClick={() => onSelect(p)} />
			))}
		</div>
	);
}
