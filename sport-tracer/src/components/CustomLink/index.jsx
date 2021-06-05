export function CustomLink({ className, href, text }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {text}
    </a>
  );
}
