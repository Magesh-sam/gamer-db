'use client';
interface RenderHTMLProps extends React.HTMLAttributes<HTMLDivElement> {
  html: string;
}

function RenderHTML({ html, className, ...props }: RenderHTMLProps) {
  return (
    <div
      className={className}
      {...props}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default RenderHTML;
