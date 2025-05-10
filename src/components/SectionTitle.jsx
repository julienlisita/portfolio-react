export default function SectionTitle({ className, children }) {
    return (
      <h2 className={`${className}
        text-lg sm:text-xl lg:text-3xl 
        font-semibold text-white`}>
        {children}
      </h2>
    );
  }