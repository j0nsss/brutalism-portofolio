export function Footer() {
  return (
    <footer className="border-t-3 border-brutal-black bg-brutal-black text-brutal-white">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs uppercase tracking-wider">
          &copy; {new Date().getFullYear()} Jonad. Built different. Literally.
        </p>
        <p className="font-mono text-xs text-brutal-yellow">
          Junadhan Alzam Tiniza Putra
        </p>
      </div>
    </footer>
  )
}
