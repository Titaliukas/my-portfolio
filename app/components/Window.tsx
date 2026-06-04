'use client';

import { Rnd } from 'react-rnd';
import { ReactNode, useState } from 'react';
import Image from 'next/image';

interface WindowProps {
	title: string;
	children: ReactNode;
	defaultWidth?: number;
	defaultHeight?: number;
	defaultX?: number;
	defaultY?: number;
	onClose?: () => void;
}

export default function Window({
	title,
	children,
	defaultWidth = 600,
	defaultHeight = 400,
	defaultX = 100,
	defaultY = 100,
	onClose,
}: WindowProps) {
	const [isDragging, setIsDragging] = useState(false);

	return (
		<Rnd
			onDragStart={() => setIsDragging(true)}
			onDragStop={() => setIsDragging(false)}
			default={{
				x: defaultX,
				y: defaultY,
				width: defaultWidth,
				height: defaultHeight,
			}}
			minWidth={300}
			minHeight={200}
			dragHandleClassName='window-titlebar'
			cancel='.window-button'
			className='overflow-hidden rounded-md'
			resizeHandleClasses={{
				right: 'xp-e',
				left: 'xp-w',
				top: 'xp-n',
				bottom: 'xp-s',
			}}
		>
			<div className='flex h-full flex-col border-[#284ffd] border-2 border-t bg-[#ece9d8] shadow-lg'>
				{/* Title Bar */}
				<div
					className={`window-titlebar flex h-[30px] items-center justify-between px-1 text-white ${isDragging ? 'cursor-move' : 'cursor-default'}`}
					style={{
						background:
							'linear-gradient(to bottom, #0997ff, #0053ee 8%, #0050ee 40%, #06f 88%, #06f 93%, #005bff 95%, #003dd7 96%, #003dd7)',
					}}
				>
					<div className='font-xp-title flex items-center gap-2'>
						<Image src='/resume.webp' alt='Close' width={16} height={16} draggable={false} />
						<span>{title}</span>
					</div>

					<div className='flex gap-[2px]'>
						<button className='window-button ml-[2px] hover:brightness-110'>
							<Image src='/minimize.svg' alt='Close' width={21} height={21} draggable={false} />
						</button>

						<button className='window-button ml-[2px] hover:brightness-110'>
							<Image src='/maximise.svg' alt='Close' width={21} height={21} draggable={false} />
						</button>

						<button onClick={onClose} className='window-button ml-[2px] hover:brightness-110'>
							<Image src='/close.svg' alt='Close' width={21} height={21} draggable={false} />
						</button>
					</div>
				</div>

				{/* Content */}
				<div className='flex-1 overflow-auto bg-white'>{children}</div>
			</div>
		</Rnd>
	);
}
