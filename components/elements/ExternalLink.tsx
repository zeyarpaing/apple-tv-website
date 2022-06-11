type LinkProps = {
  label?: string;
  href?: string;
  rightChevron?: boolean;
  lightColor?: boolean;
};
const ExternalLink = ({ label, lightColor, href, rightChevron }: LinkProps) => {
  return (
    <a className={`link ${lightColor ? 'link-light' : ''}`} href={href || '#'}>
      <span>{label || 'Learn more'}</span>
      {rightChevron && <span className="icon more" />}
    </a>
  );
};

export default ExternalLink;
