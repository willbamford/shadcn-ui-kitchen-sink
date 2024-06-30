import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-8">shadcn/ui kitchen sink</h1>
      <section>
        <h2 className="text-lg font-medium mb-4">Buttons</h2>
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
      </section>
    </main>
  );
}
