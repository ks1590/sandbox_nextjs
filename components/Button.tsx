import clsx from 'clsx';

export function Button({ className, ...props }: any) {
	return (
		// <button
		//   className={clsx(
		//     'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
		//     'bg-zinc-600 font-semibold text-zinc-100 hover:bg-zinc-400 active:bg-zinc-800 active:text-zinc-100/70',
		//     className
		//   )}
		//   {...props}
		// />
		<button className='btn btn-circle' {...props}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-6 w-6'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='2'
					d='M6 18L18 6M6 6l12 12'
				/>
			</svg>
		</button>
	);
}
