import { DocsMobileNav } from "@/site/docs-mobile-nav";
import { DocsSidebar } from "@/site/docs-sidebar";

export default function DocsLayout({ children }: LayoutProps<"/docs">) {
  return (
    <div className="mx-auto flex w-full max-w-6xl gap-10 px-4 py-12 sm:px-6">
      <DocsSidebar />
      <div className="min-w-0 flex-1">
        <DocsMobileNav />
        {children}
      </div>
    </div>
  );
}
