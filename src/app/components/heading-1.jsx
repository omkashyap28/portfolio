export default function Heading1({ heading, className, ...props }) {
  return (
    <h1 className={`text-4xl text-shadow-sm text-neutral-800 font-semibold mt-16 mb-8 ${className}`} {...props}>
      {heading}
    </h1>
  );
}