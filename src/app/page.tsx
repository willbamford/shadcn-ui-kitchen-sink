import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-8">shadcn/ui kitchen sink</h1>
      <section>
        <h2 className="text-lg font-medium mb-4">Buttons</h2>
        <div className="flex gap-4 flex-wrap">
          <Button variant="default">Default Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="destructive">Destructive Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="link">Link Button</Button>
          <Button variant="outline" className="w-1">
            Outline Button
          </Button>
        </div>
      </section>
    </main>
  );
}
