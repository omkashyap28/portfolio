export default function Heading2({ heading, className, ...props }) {
  return <h2 className={`text-3xl text-neutral-800 tracking-tight font-semibold mt-16 my-8 {className}`} {...props}>
    {heading}
  </h2>
}