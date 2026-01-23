export default function Main({ children, ...props }) {
  return <main className="w-full" {...props}>{children}</main>
}