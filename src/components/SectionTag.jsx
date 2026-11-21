export default function SectionTag({ gold, muted, light = false, center = false }) {
  return (
    <p className={`section-tag${light ? ' section-tag-light' : ''}${center ? ' is-center' : ''}`}>
      <span className="tag-gold">{gold}</span>
      <span className="tag-muted">{muted}</span>
    </p>
  );
}
