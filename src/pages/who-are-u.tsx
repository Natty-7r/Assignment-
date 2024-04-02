import OptionCard from "@/components/card/option.card";
import FormHeader from "@/components/header/form-header";
import FormProgress from "@/components/progress/form-progress";
const WhoAreYouPage = () => {
  return (
    <main className="p-12 ">
      <FormProgress />
      <FormHeader
        headerText=" which describes you best?"
        headerDescription=" this will help us personize your expreience."
      />
      <OptionCard />
      <OptionCard />
      <OptionCard />
    </main>
  );
};

export default WhoAreYouPage;
