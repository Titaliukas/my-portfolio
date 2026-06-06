import Image from 'next/image';

export default function ProjectsToolBar({ onBack, canGoBack }: { onBack?: () => void; canGoBack?: boolean }) {
	return (
		<div className='flex h-[36px] items-center gap-1 bg-[#EDEDED] px-2 py-4'>
			<div className='flex text-black items-center gap-1 rounded px-2 py-1 text-[12px] border border-transparent opacity-40'>
				<Image src={'/home.webp'} alt={'Home'} width={25} height={25} />
				Home
			</div>

			{canGoBack ? (
				<button
					onClick={onBack}
					className='flex text-black items-center gap-1 rounded px-2 py-1 text-[12px] border border-transparent hover:border hover:border-[#b0b0b0] active:bg-[#dadada]'
					onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 1px 1px rgba(0,0,0,.1)')}
					onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '')}
				>
					<Image src={'/back.webp'} alt={'Back'} width={25} height={25} />
					Back
				</button>
			) : (
				<div className='flex text-black items-center gap-1 rounded px-2 py-1 text-[12px] border border-transparent opacity-40'>
					<Image src={'/back.webp'} alt={'Back'} width={25} height={25} />
					Back
				</div>
			)}

			<div className='flex text-black items-center gap-1 rounded px-2 py-1 text-[12px] border border-transparent opacity-40'>
				<Image src={'/forward.webp'} alt={'Forward'} width={25} height={25} />
				Forward
			</div>
		</div>
	);
}
