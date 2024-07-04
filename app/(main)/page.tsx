import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Events</h1>
        <Button className="text-black-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Click on me
        </Button>
      </section>
    </div>
  );
};

export default Home;
