'use client';

import Image from 'next/image';

interface DesktopIconProps {
	label: string;
	icon: string;
	selected: boolean;
	onSelect: () => void;
	onOpen: () => void;
}

export default function DesktopIcon({ label, icon, selected, onSelect, onOpen }: DesktopIconProps) {
	return (
		<button
			onDoubleClick={onOpen}
			className={`flex w-[100px] flex-col items-center gap-1 p-2 ${selected ? 'bg-[#3c5cc241]' : ''} hover:bg-[#73aaf37a]`}
			onClick={(e) => {
				e.stopPropagation();
				onSelect();
			}}
		>
			<Image src={icon} alt={label} width={64} height={64} draggable={false} />

			<span className='font-xp-icon text-center text-white'>{label}</span>
		</button>
	);
}
