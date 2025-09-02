import { Cta4 } from "@/components/ui/cta-4";

const DemoOne = () => {
  return (
    <Cta4
      title="Call to Action"
      description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto illo praesentium nisi, accusantium quae."
      buttonText="Get Started"
      buttonUrl="https://shadcnblocks.com"
      items={[
        "Easy Integration",
        "24/7 Support",
        "Customizable Design",
        "Scalable Performance",
        "Hundreds of Blocks"
      ]}
    />
  );
};

export { DemoOne };