import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

const Section = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-medium mb-4">{title}</h2>
      {children}
    </section>
  );
};

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-8">shadcn/ui kitchen sink</h1>

      <Section title="Accordion">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Section>

      <Section title="Alerts">
        <Alert className="mb-4">
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </Alert>

        <Alert variant="destructive">
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Your session has expired. Please log in again.
          </AlertDescription>
        </Alert>
      </Section>

      <Section title="Buttons">
        <div className="flex gap-4 flex-wrap">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="outline">Outline</Button>
          <Button className="w-full">Full Width</Button>
          <Button size="icon">Ic.</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button className="bg-blue-700 p-8 font-bold">
            Custom className
          </Button>
          <Button>
            <div className="bg-yellow-200 text-stone-800">Children</div>
          </Button>
        </div>
      </Section>
    </main>
  );
}
