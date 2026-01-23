export default function Tooltip({ title }) {
  return (
    <div
      className="absolute inset-x-0 -translate-y-[calc(100%+10px)] -translate-x-1/5 transition-transform duration-300 rounded-md opacity-0 group-hover:opacity-100 w-fit text-nowrap h-auto bg-black px-1 py-0.5 text-[12px] font-regular tracking-wide text-neutral-100"
    >
      {title}
    </div>
  )
}