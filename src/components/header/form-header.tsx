const FormHeader = ({
  headerText,
  headerDescription,
}: {
  headerText: string;
  headerDescription: string;
}) => {
  return (
    <header className="text-center md:mb-8">
      <h1 className=" first-letter:uppercase font-bold tracking-wide md:mb-4  md:text-3xl">
        {headerText}
      </h1>
      <h4 className="first-letter:uppercase text-slate-700">
        {headerDescription}
      </h4>
    </header>
  );
};

export default FormHeader;
