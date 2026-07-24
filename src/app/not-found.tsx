import { MPLogo } from "@/components/icons/MPLogo";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-mp-ink px-4 py-20 text-center text-white">
      <MPLogo variant="dark" size="lg" />
      <p className="mt-12 font-heading text-7xl font-extrabold text-mp-gold">
        404
      </p>
      <h1 className="mt-4 text-2xl font-bold">Página não encontrada</h1>
      <p className="mt-3 max-w-md text-base leading-relaxed text-mp-muted-dark">
        O endereço que você acessou não existe ou mudou de lugar.
      </p>
      <div className="mt-8">
        <Button href="/">Voltar para a home</Button>
      </div>
    </div>
  );
}
