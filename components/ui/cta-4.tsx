import { ArrowRight, Check } from "lucide-react";

interface Cta4Props {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  items?: string[];
}

const defaultItems = [
  "Easy Integration",
  "24/7 Support",
  "Customizable Design",
  "Scalable Performance",
  "Hundreds of Blocks",
];

export const Cta4 = ({
  title = "Call to Action",
  description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto illo praesentium nisi, accusantium quae.",
  buttonText = "Get Started",
  buttonUrl = "https://shadcnblocks.com",
  items = defaultItems,
}: Cta4Props) => {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="max-w-5xl w-full px-4">
            <div className="flex flex-col items-start justify-between gap-8 rounded-3xl bg-blue-50 px-6 py-10 md:flex-row lg:px-20 lg:py-16"
              style={{
                background: "linear-gradient(145deg, #eef4fd 0%, #dbeafe 100%)",
                border: "1.5px solid rgba(0,113,188,0.12)",
              }}
            >
              <div className="md:w-1/2">
                <h4 className="mb-1 text-2xl font-bold md:text-3xl">{title}</h4>
                <p className="text-muted-foreground">{description}</p>
                <a
                  href={buttonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-semibold text-base transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95 animate-pulse-glow"
                  style={{
                    background: "linear-gradient(135deg, #0071BC 0%, #29ABE2 100%)",
                    boxShadow: "0 4px 20px rgba(0,113,188,0.35)",
                  }}
                >
                  {buttonText}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="md:w-1/3">
                <ul className="flex flex-col space-y-2 text-sm font-medium">
                  {items.map((item, idx) => (
                    <li className="flex items-center gap-3" key={idx}>
                      <Check
                        className="size-4 flex-shrink-0"
                        style={{ color: "#0071BC" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
