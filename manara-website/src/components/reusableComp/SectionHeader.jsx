// SectionHeader.jsx
export default function SectionHeader({ title }) {
    return (
      <section className="flex justify-center my-15">
        <div className="project flex items-baseline space-x-5 text-center">
          <div className="w-20 h-2.5 divider my-4"></div>
          <h1 className="greeting-text font-extrabold text-4xl">{title}</h1>
        </div>
      </section>
    );
  }
  