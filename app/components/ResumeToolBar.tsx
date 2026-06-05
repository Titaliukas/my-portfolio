import Image from 'next/image';

type ToolBarButton = {
	icon: string;
	label: string;
	onClick?: () => void;
	separator?: boolean;
};

export default function ResumeToolBar({ onZoom }: { onZoom?: () => void }) {
	const buttons: ToolBarButton[] = [
		{ icon: '/zoom.webp', label: 'Zoom', onClick: onZoom },
		{ icon: '/save.webp', label: 'Save', separator: true },
		// { icon: '/print.webp', label: 'Print', separator: true, disabled: true },
		// { icon: '/contact.png', label: 'Contact Me' },
	];

	return (
		<div className='flex h-[36px] items-center gap-1 bg-[#EDEDED] px-2'>
			{buttons.map((btn) => (
				<div key={btn.label} className='flex items-center'>
					<button
						onClick={btn.onClick}
						className={`flex text-black items-center gap-1 rounded px-2 py-1 text-[12px] border border-transparent hover:border hover:border-[#b0b0b0] active:bg-[#dadada]`}
						style={{ boxShadow: undefined }}
						onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 1px 1px rgba(0,0,0,.1)')}
						onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '')}
					>
						<Image src={btn.icon} alt={btn.label} width={25} height={25} />
						{btn.label}
					</button>
					{btn.separator && <div className='mx-1 h-6 w-[1px] bg-[#aca899]' />}
				</div>
			))}
			<div className='flex text-black items-center gap-1 rounded px-2 py-1 text-[12px] border border-transparent opacity-40'>
				<Image src={'/print.webp'} alt={'Print'} width={25} height={25} />
				{'Print'}
			</div>
		</div>
	);
}
