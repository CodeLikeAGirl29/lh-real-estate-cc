export default function CornerArrow() {
  return (
    <div className="absolute top-0 right-0 z-10 flex h-8 w-8 items-center justify-center overflow-hidden rounded-tr-[3px] rounded-bl-[32px] bg-reef">
      <span className="-mt-1 -mr-1 font-mono text-sm text-background">
        &rarr;
      </span>
    </div>
  );
}
