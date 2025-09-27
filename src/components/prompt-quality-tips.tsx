import { memo, useMemo } from "react";
import { useTranslations } from "next-intl";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type PromptHintsProps = {
  open: boolean;
  onClose: () => void;
};

const categoryColors: Record<string, string> = {
  subject: "bg-blue-500/10 border-blue-500/30 text-blue-400",
  scene: "bg-green-500/10 border-green-500/30 text-green-500",
  action: "bg-purple-500/10 border-purple-500/30 text-purple-400",
  style: "bg-orange-500/10 border-orange-500/30 text-orange-400",
  camera: "bg-pink-500/10 border-pink-500/30 text-pink-400",
};

function PromptQualityTips({ open, onClose }: PromptHintsProps) {
  const t = useTranslations();
  const promptHints = useMemo(
    () => [
      {
        category: "subject",
        label: t("Component.PromptQualityTips.subject.label"),
        text: t("Component.PromptQualityTips.subject.description"),
        example: t("Component.PromptQualityTips.subject.example"),
      },
      {
        category: "scene",
        label: t("Component.PromptQualityTips.scene.label"),
        text: t("Component.PromptQualityTips.scene.description"),
        example: t("Component.PromptQualityTips.scene.example"),
      },
      {
        category: "action",
        label: t("Component.PromptQualityTips.action.label"),
        text: t("Component.PromptQualityTips.action.description"),
        example: t("Component.PromptQualityTips.action.example"),
      },
      {
        category: "style",
        label: t("Component.PromptQualityTips.style.label"),
        text: t("Component.PromptQualityTips.style.description"),
        example: t("Component.PromptQualityTips.style.example"),
      },
      {
        category: "camera",
        label: t("Component.PromptQualityTips.camera.label"),
        text: t("Component.PromptQualityTips.camera.description"),
        example: t("Component.PromptQualityTips.camera.example"),
      },
    ],
    [t]
  );

  const handleOpenChange = (open: boolean) => {
    if (!open) onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className="sm:max-w-md max-h-[80vh] overflow-y-auto"
        aria-describedby={undefined}
      >
        <div className="bg absolute -z-10 h-full w-full"></div>
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-gray-700">
            {t("Component.PromptQualityTips.title")}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {promptHints.map((hint, index) => (
            <div key={index} className="space-y-2">
              <div className="inline-flex gap-2 items-center">
                <div
                  className={`inline-block px-2 py-1 rounded text-xs border ${categoryColors[hint.category]}`}
                >
                  {hint.label}
                </div>
                <p className="text-sm text-gray-800">{hint.text}</p>
              </div>
              <p className="text-sm text-gray-600 italic">{hint.example}</p>
            </div>
          ))}

          <div className="border-t mt-4 pt-3">
            <p className="text-sm text-gray-700">
              <strong className="text-gray-800">
                {t("Component.PromptQualityTips.bestPractice")}
              </strong>
              {t("Component.PromptQualityTips.tips")}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default memo(PromptQualityTips);
