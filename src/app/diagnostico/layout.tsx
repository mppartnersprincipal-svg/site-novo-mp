import { MinimalHeader } from "@/components/layout/MinimalHeader";
import { SITE } from "@/lib/constants";

export default function DiagnosticoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-dvh flex-col bg-mp-ink text-white">
      <MinimalHeader />
      <main className="flex-1">{children}</main>
      <footer className="border-t border-white/10 py-6">
        <p className="text-center text-xs text-white/40">
          © {new Date().getFullYear()} M|P Assessoria · {SITE.city}
        </p>
      </footer>
    </div>
  );
}
