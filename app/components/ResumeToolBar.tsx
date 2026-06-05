import Image from 'next/image';

export default function ResumeToolBar({ onZoom, zoomed }: { onZoom?: () => void; zoomed?: boolean }) {
	return (
		<div className='flex h-[36px] items-center gap-1 bg-[#EDEDED] px-2 py-4'>
			<button
				onClick={onZoom}
				className='flex text-black items-center gap-1 rounded px-2 py-1 text-[12px]'
				style={{
					border: zoomed ? '1.5px solid #b0b0b0' : '1.5px solid transparent',
					backgroundColor: zoomed ? '#dadada' : undefined,
					boxShadow: zoomed ? '0 1px 1px rgba(0,0,0,.1)' : undefined,
				}}
				onMouseEnter={(e) => {
					e.currentTarget.style.border = '1.5px solid #b0b0b0';
					e.currentTarget.style.boxShadow = '0 1px 1px rgba(0,0,0,.1)';
				}}
				onMouseLeave={(e) => {
					e.currentTarget.style.border = zoomed ? '1.5px solid #b0b0b0' : '1.5px solid transparent';
					e.currentTarget.style.boxShadow = zoomed ? '0 1px 1px rgba(0,0,0,.1)' : '';
					e.currentTarget.style.backgroundColor = zoomed ? '#dadada' : '';
				}}
			>
				<Image src='/zoom.webp' alt='Zoom' width={25} height={25} />
				Zoom
			</button>
			<button
				className={`flex text-black items-center gap-1 rounded px-2 py-1 text-[12px] border border-transparent hover:border hover:border-[#b0b0b0] active:bg-[#dadada]`}
				style={{ boxShadow: undefined }}
				onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 1px 1px rgba(0,0,0,.1)')}
				onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '')}
			>
				<Image src={'/save.webp'} alt={'Save'} width={25} height={25} />
				{'Save'}
			</button>
			<div className='mx-1 h-6 w-[1px] bg-[#aca899]' />
			<div className='flex text-black items-center gap-1 rounded px-2 py-1 text-[12px] border border-transparent opacity-40'>
				<Image src={'/print.webp'} alt={'Print'} width={25} height={25} />
				{'Print'}
			</div>
		</div>
	);
}
