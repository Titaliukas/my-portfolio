'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

type MenuItem = {
	label: string;
	onClick?: () => void;
	disabled?: boolean;
	separator?: boolean;
};

type Menu = {
	label: string;
	disabled?: boolean;
	items: MenuItem[];
};

export default function ResumeMenuBar({
	onSave,
	onExit,
	onMinimize,
	onMaximize,
}: {
	onSave?: () => void;
	onExit?: () => void;
	onMinimize?: () => void;
	onMaximize?: () => void;
}) {
	const [openMenu, setOpenMenu] = useState<string | null>(null);
	const barRef = useRef<HTMLDivElement>(null);

	const menus: Menu[] = [
		{
			label: 'File',
			items: [
				{ label: 'Save', onClick: onSave },
				{ label: 'Print', disabled: true },
				{ label: 'Exit', onClick: onExit, separator: true },
			],
		},
		{
			label: 'View',
			items: [
				{ label: 'Minimize', onClick: onMinimize },
				{ label: 'Maximize', onClick: onMaximize },
			],
		},
	];

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (barRef.current && !barRef.current.contains(e.target as Node)) {
				setOpenMenu(null);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	return (
		<div ref={barRef} className='relative flex h-[22px] items-center gap-1 bg-[#EDEDED] text-[13px]'>
			{menus.map((menu) => (
				<div key={menu.label} className='relative'>
					<button
						className={`px-2 py-0.5 text-black ${
							openMenu === menu.label ? 'bg-[#316ac5] text-white' : 'hover:bg-[#316ac5] hover:text-white'
						}`}
						onClick={() => setOpenMenu(openMenu === menu.label ? null : menu.label)}
					>
						{menu.label}
					</button>

					{openMenu === menu.label && (
						<div
							className='absolute left-0 top-full z-50 min-w-[120px] border border-[#919b9c] bg-[#f0efe8] py-[2px] shadow-md'
							style={{ boxShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
						>
							{menu.items.map((item) => (
								<div key={item.label}>
									{item.separator && <div className='my-[2px] mx-1 h-[1px] bg-[#aca899]' />}
									<button
										disabled={item.disabled}
										onClick={() => {
											item.onClick?.();
											setOpenMenu(null);
										}}
										className={`w-full px-6 py-[2px] text-left text-[13px] ${
											item.disabled ? 'text-[#a0a0a0]' : 'text-black hover:bg-[#316ac5] hover:text-white'
										}`}
									>
										{item.label}
									</button>
								</div>
							))}
						</div>
					)}
				</div>
			))}

			<div className='px-2 py-[2px] text-black opacity-30'>Help</div>

			<div className='ml-auto'>
				<Image src='/windows_flag.webp' alt='' width={40} height={20} />
			</div>
		</div>
	);
}
