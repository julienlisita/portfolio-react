export default function SectionTitle({ className, children,id }) {
    return (
      <h2 
        id={id}
        className={`${className}
        mt-8 sm:mt-10 lg:mt-12
        text-xl sm:text-2xl lg:text-3xl 
        font-semibold text-white
        text-center scroll-mt-14 sm:scroll-mt-14 lg:scroll-mt-20`}
      >
        {children}
      </h2>
    );
  }