export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="w-full flex justify-center py-20 select-none font-sans ">
      <div className="flex items-start gap-8 text-left">
        <div className="w-1.5 h-20 bg-[#D34A32] rounded-full" />
        <div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none uppercase">{title}</h1>
          {subtitle && <p className="text-sm text-slate-500 font-medium tracking-wide mt-2">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}