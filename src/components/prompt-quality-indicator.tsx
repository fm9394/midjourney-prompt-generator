import dynamic from "next/dynamic";
import { memo, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { HelpCircle } from "lucide-react";
import { countWords } from "@/utils/string";
import { cn } from "@/utils/style";

type PromptQualityIndicatorProps = {
  prompt: string;
  locale?: string;
};

const PromptQualityTips = dynamic(
  () => import("@/components/prompt-quality-tips")
);

function PromptQualityIndicator({
  prompt,
  locale,
}: PromptQualityIndicatorProps) {
  const t = useTranslations();
  const [showHintsModal, setShowHintsModal] = useState<boolean>(false);
  const promptWords = useMemo<number>(
    () => countWords(prompt, locale),
    [prompt, locale]
  );
  const tips = useMemo(() => {
    if (promptWords < 5)
      return t("Component.PromptQualityIndicator.level1Tips");
    if (promptWords < 12)
      return t("Component.PromptQualityIndicator.level2Tips");
    return t("Component.PromptQualityIndicator.level3Tips");
  }, [promptWords, t]);

  return (
    <>
      <div
        onClick={() => setShowHintsModal(true)}
        className={cn(
          "flex items-center text-xs transition-colors group cursor-pointer",
          { invisible: promptWords === 0 }
        )}
      >
        {promptWords < 5 ? (
          <HelpCircle className="h-3 w-3 mr-1 text-red-500 group-hover:text-red-400" />
        ) : (
          <div
            className={cn(
              "h-2 w-2 rounded-full mr-2",
              promptWords < 12 ? "bg-yellow-500" : "bg-green-500"
            )}
          />
        )}
        <span className="text-gray-500 group-hover:text-gray-400">{tips}</span>
      </div>
      <PromptQualityTips
        open={showHintsModal}
        onClose={() => setShowHintsModal(false)}
      />
    </>
  );
}

export default memo(PromptQualityIndicator);
