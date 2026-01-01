import Container from './Container';

export default function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-[rgb(var(--smg-soft))]">
      <Container className="py-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="font-extrabold">Sport Music Group</div>
          <div className="flex flex-wrap gap-4 text-sm font-semibold text-black/70">
            <a className="hover:text-black" href="/about">
              About
            </a>
            <a className="hover:text-black" href="/partners">
              Partners
            </a>
            <a className="hover:text-black" href="/contact">
              Contact
            </a>
            <a className="hover:text-black" href="/media-kit">
              Media Kit
            </a>
          </div>
        </div>
        <p className="mt-6 text-xs text-black/60">© {new Date().getFullYear()} Sport Music Group.</p>
      </Container>
    </footer>
  );
}
