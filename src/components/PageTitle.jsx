export default function PageTitle({ children }) {
    return (
      <h1 className="
        mt-16 ms:mt-20 lg:mt-32  
        text-2xl sm:text-4xl lg:text-6xl
        font-bold text-white
        text-center">
        {children}
      </h1>
    );
  }