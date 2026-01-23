export default function Container({ children }) {
  return (
    <div className="w-full max-w-2xl mx-auto px-5">
      {children}
    </div>
  );
}