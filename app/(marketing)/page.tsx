import { Button } from "@/components/ui/button";
import { Footer } from "./_components/footer";
import { Heading } from "./_components/heading";
import Heros from "./_components/heroes";

const MarketingPage = () => {
  return (
    <div className="min-h-full felx flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-10 flex-1 px-6 py-12">
        <Heading />
        <Heros />
        <Footer />
      </div>
    </div>
  );
};

export default MarketingPage;
