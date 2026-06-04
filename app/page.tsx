'use client';

import DesktopIcon from '@/app/components/DekstopIcon';
import Resume from '@/app/components/Resume';
import Taskbar from '@/app/components/Taskbar';
import Window from '@/app/components/Window';
import Image from 'next/image';
import { useState } from 'react';

export type WindowId = 'resume' | 'projects';

export interface WindowState {
	open: boolean;
	minimized: boolean;
	active: boolean;
	zIndex: number;
	animationState: 'open' | 'closing' | 'minimizing';
}

export type WindowsState = Record<WindowId, WindowState>;

export default function Home() {
	const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
	const [windows, setWindows] = useState<WindowsState>({
		resume: {
			open: false,
			minimized: false,
			active: false,
			zIndex: 20,
			animationState: 'open',
		},
		projects: {
			open: false,
			minimized: false,
			active: false,
			zIndex: 20,
			animationState: 'open',
		},
	});

	const [topZ, setTopZ] = useState(20);

	const openWindow = (id: WindowId) => {
		setTopZ((currentZ) => {
			const newZ = currentZ + 1;

			setWindows((prev) => {
				const updated = { ...prev };

				(Object.keys(updated) as WindowId[]).forEach((key) => {
					updated[key] = {
						...updated[key],
						active: false,
					};
				});

				updated[id] = {
					...updated[id],
					open: true,
					minimized: false,
					active: true,
					zIndex: newZ,
				};

				return updated;
			});

			return newZ;
		});
	};

	const closeWindow = (id: WindowId) => {
		setWindows((prev) => ({ ...prev, [id]: { ...prev[id], animationState: 'closing' } }));
		setTimeout(() => {
			setWindows((prev) => ({ ...prev, [id]: { ...prev[id], open: false, active: false, animationState: 'open' } }));
		}, 250);
	};

	const minimizeWindow = (id: WindowId) => {
		setWindows((prev) => ({ ...prev, [id]: { ...prev[id], animationState: 'minimizing' } }));
		setTimeout(() => {
			setWindows((prev) => ({
				...prev,
				[id]: { ...prev[id], minimized: true, active: false, animationState: 'open' },
			}));
		}, 250);
	};

	const focusWindow = (id: WindowId) => {
		setTopZ((currentZ) => {
			const newZ = currentZ + 1;

			setActiveWindow(id, newZ);

			return newZ;
		});
	};

	const setActiveWindow = (id: WindowId, zIndex: number) => {
		setWindows((prev) => {
			const updated = { ...prev };

			(Object.keys(updated) as WindowId[]).forEach((key) => {
				updated[key] = {
					...updated[key],
					active: key === id,
				};
			});

			updated[id] = {
				...updated[id],
				active: true,
				minimized: false,
				zIndex,
			};

			return updated;
		});
	};

	const toggleTaskbarWindow = (id: WindowId) => {
		const window = windows[id];

		if (window.minimized) {
			focusWindow(id);
			return;
		}

		if (window.active) {
			minimizeWindow(id);
			return;
		}

		focusWindow(id);
	};

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
					onOpen={() => openWindow('projects')}
				/>

				<DesktopIcon
					label='My Resume'
					icon='/resume.webp'
					selected={selectedIcon === 'resume'}
					onSelect={() => setSelectedIcon('resume')}
					onOpen={() => openWindow('resume')}
				/>
			</div>
			<Taskbar windows={windows} onWindowClick={toggleTaskbarWindow} />
			{windows.resume.open && !windows.resume.minimized && (
				<Window
					title='My Resume'
					defaultX={150}
					defaultY={40}
					defaultWidth={700}
					defaultHeight={850}
					zIndex={windows.resume.zIndex}
					isActive={windows.resume.active}
					onFocus={() => focusWindow('resume')}
					onClose={() => closeWindow('resume')}
					onMinimize={() => minimizeWindow('resume')}
					animationState={windows.resume.animationState}
				>
					<Resume />
				</Window>
			)}
			{windows.projects.open && !windows.projects.minimized && (
				<Window
					title='My Projects'
					defaultX={250}
					defaultY={20}
					defaultWidth={1400}
					defaultHeight={850}
					zIndex={windows.projects.zIndex}
					isActive={windows.projects.active}
					onFocus={() => focusWindow('projects')}
					onClose={() => closeWindow('projects')}
					onMinimize={() => minimizeWindow('projects')}
					animationState={windows.projects.animationState}
				>
					<Resume />
				</Window>
			)}
		</main>
	);
}
