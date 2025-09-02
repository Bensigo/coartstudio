import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Smartphone, Globe, Brain } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface Feature108Props {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
}

const Feature108 = ({
  badge = "Our Services",
  heading = "Comprehensive Digital Solutions for Modern Businesses",
  description = "From social media to AI-powered applications, we deliver cutting-edge solutions that drive growth and innovation.",
  tabs = [
    {
      value: "social-media",
      icon: <Smartphone className="h-auto w-4 shrink-0" />,
      label: "Social Media",
      content: {
        badge: "Digital Presence",
        title: "Amplify your brand across all platforms.",
        description:
          "Build a powerful social media presence with strategic content, targeted campaigns, and community management that converts followers into customers.",
        buttonText: "Get Started",
        imageSrc:
          "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&h=600",
        imageAlt: "Social media marketing dashboard",
      },
    },
    {
      value: "web-development",
      icon: <Globe className="h-auto w-4 shrink-0" />,
      label: "Web & App Development",
      content: {
        badge: "Custom Solutions",
        title: "Build modern web and mobile applications.",
        description:
          "Create responsive, high-performance web applications and mobile apps that provide exceptional user experiences and drive business growth.",
        buttonText: "View Portfolio",
        imageSrc:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=600",
        imageAlt: "Web development workspace",
      },
    },
    {
      value: "ai-solutions",
      icon: <Brain className="h-auto w-4 shrink-0" />,
      label: "AI Solutions",
      content: {
        badge: "Future Technology",
        title: "Harness the power of artificial intelligence.",
        description:
          "Implement AI-driven solutions including chatbots, automation, machine learning models, and intelligent analytics to revolutionize your business operations.",
        buttonText: "Explore AI",
        imageSrc:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=600",
        imageAlt: "AI technology visualization",
      },
    },
  ],
}: Feature108Props) => {
  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="outline">{badge}</Badge>
          <h1 className="max-w-2xl text-3xl font-semibold md:text-4xl">
            {heading}
          </h1>
          <p className="text-muted-foreground max-w-2xl">{description}</p>
        </div>
        <Tabs defaultValue={tabs[0].value} className="mt-8">
          <TabsList className="container flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10 bg-transparent">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground data-[state=active]:bg-white data-[state=active]:text-primary shadow-none data-[state=active]:shadow-sm"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-white shadow-lg p-6 lg:p-16">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid z-0 border-none place-items-center gap-20 lg:grid-cols-2 lg:gap-10"
              >
                <div className="flex flex-col gap-5">
                  <Badge variant="outline" className="w-fit bg-background">
                    {tab.content.badge}
                  </Badge>
                  <h3 className="text-3xl font-semibold lg:text-5xl">
                    {tab.content.title}
                  </h3>
                  <p className="text-muted-foreground lg:text-lg">
                    {tab.content.description}
                  </p>
                  <Button className="mt-2.5 w-fit gap-2 bg-green-500 hover:bg-green-600" size="lg">
                    {tab.content.buttonText}
                  </Button>
                </div>
                <img
                  src={tab.content.imageSrc}
                  alt={tab.content.imageAlt}
                  className="rounded-xl shadow-md"
                />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export { Feature108 };