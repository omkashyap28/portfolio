export default function Heading3({ heading, className, ...props }) {
  return <h3 className={`text-2xl text-neutral-800 tracking-tight font-semibold mt-8 mb-4 ${className}`} {...props}>
    {heading}
  </h3>
}