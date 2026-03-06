export default function ContentCard({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const Tag = onClick ? "button" : "div";
  return (
    <Tag
      className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-mint-light/30 p-6 text-left w-full ${className}`}
      onClick={onClick}
    >
      {children}
    </Tag>
  );
}
