export default function Heading2({ heading, className, id, ...props }) {
  return <h2 id={id} className={`text-3xl text-neutral-800 tracking-tight font-semibold mt-16 my-8 {className}`} {...props}>
    {heading}
  </h2>
}