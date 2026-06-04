'use client';

import DesktopIcon from '@/app/components/DekstopIcon';
import Resume from '@/app/components/Resume';
import Taskbar from '@/app/components/Taskbar';
import Window from '@/app/components/Window';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
	const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
	const [resumeOpen, setResumeOpen] = useState(false);
	const [resumeMinimized, setResumeMinimized] = useState(false);

	return (
		<main className='relative h-screen w-screen overflow-hidden' onClick={() => setSelectedIcon(null)}>
			<Image
				src='/windows_xp.jpg'
				alt='Background'
				fill
				priority
				className='object-cover pointer-events-none select-none'
			/>
			<div className='absolute left-2 top-2 z-10 grid auto-rows-max grid-cols-1 gap-4'>
				<DesktopIcon
					label='My Projects'
					icon='/folder.png'
					selected={selectedIcon === 'projects'}
					onSelect={() => setSelectedIcon('projects')}
					onOpen={() => {
						setResumeOpen(true);
						if (resumeMinimized) setResumeMinimized(false);
					}}
				/>

				<DesktopIcon
					label='My Resume'
					icon='/resume.webp'
					selected={selectedIcon === 'resume'}
					onSelect={() => setSelectedIcon('resume')}
					onOpen={() => {
						setResumeOpen(true);
						if (resumeMinimized) setResumeMinimized(false);
					}}
				/>
			</div>
			<Taskbar />
			{resumeOpen && !resumeMinimized && (
				<Window
					title='My Resume'
					defaultX={150}
					defaultY={40}
					defaultWidth={700}
					defaultHeight={850}
					onClose={() => setResumeOpen(false)}
					onMinimize={() => setResumeMinimized(true)}
				>
					<Resume />
				</Window>
			)}
		</main>
	);
}
