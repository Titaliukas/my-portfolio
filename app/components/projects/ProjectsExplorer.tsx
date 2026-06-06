'use client';

import ProjectDetail from '@/app/components/projects/ProjectDetail';
import ProjectGrid from '@/app/components/projects/ProjectGrid';
import { Project } from '@/app/types/projects';

export default function ProjectsExplorer({
	selected,
	onSelect,
}: {
	selected: Project | null;
	onSelect: (p: Project | null) => void;
}) {
	return (
		<div className='h-full'>
			{selected ? <ProjectDetail project={selected} /> : <ProjectGrid onSelect={onSelect} />}
		</div>
	);
}
