export default function SectionTitle({ className, children }) {
    return (
      <h2 className={`${className}
        mt-8 sm:mt-10 lg:mt-12
        text-xl sm:text-2xl lg:text-3xl 
        font-semibold text-white
        text-center`
        }>
        {children}
      </h2>
    );
  }