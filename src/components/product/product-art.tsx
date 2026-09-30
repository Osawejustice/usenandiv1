import { AiAssistMock } from "@/components/product/ai-assist-mock";
import { RoutingDiagram } from "@/components/product/routing-diagram";
import { SoftphoneMock } from "@/components/product/softphone-mock";
import { TeamInboxMock } from "@/components/product/team-inbox-mock";
import type { ModeVisual } from "@/content/product-modes";

export function ProductArt({
  visual,
  className = "",
}: {
  visual: ModeVisual | "api";
  className?: string;
}) {
  const art =
    visual === "voice" ? (
      <SoftphoneMock className={className} />
    ) : visual === "routing" ? (
      <RoutingDiagram className={className} />
    ) : visual === "assist" ? (
      <AiAssistMock className={className} />
    ) : visual === "api" ? null : (
      <TeamInboxMock />
    );
  return art;
}
