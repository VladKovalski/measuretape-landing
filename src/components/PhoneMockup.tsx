export function PhoneMockup({
  src,
  alt,
  className = '',
  priority = false
}: {
  src: string;
  alt: string;
  className?: string;
  /** Set on the above-the-fold hero image (the LCP element): loads eagerly with
   *  high fetch priority instead of lazily. Leave false for below-fold mockups. */
  priority?: boolean;
}) {
  return (
    <div className={`phone-frame ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={828}
        height={1472}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding={priority ? 'sync' : 'async'}
      />
    </div>
  );
}
