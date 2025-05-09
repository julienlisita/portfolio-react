export default function SectionTitle({ children }) {
    return (
      <h2 className=" 
        text-lg sm:text-xl lg:text-3xl 
        font-semibold text-white">
        {children}
      </h2>
    );
  }