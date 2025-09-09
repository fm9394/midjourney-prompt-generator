"use client";
import { useTranslations } from "next-intl";
import { memo } from "react";
import { Proportions, Brush, Palette, Sun, Focus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/utils/style";

type PresetListProps = {
  className?: string;
  update: (type: keyof Presets, value: string) => void;
};

function PresetList({ className, update }: PresetListProps) {
  const t = useTranslations();

  return (
    <div className={cn("gap-3 pb-1 overflow-x-auto", className)}>
      <Select onValueChange={(value) => update("ar", value)}>
        <SelectTrigger className="w-auto h-8 py-0 px-0 gap-2 select-none bg-transparent border-none shadow-none focus:outline-none focus:ring-0 focus:ring-offset-0">
          <Proportions className="w-4 h-4" />
          <SelectValue placeholder={t("Prompt.generator.aspectRatios")} />
        </SelectTrigger>
        <SelectContent>
          <div className="grid grid-cols-2">
            <SelectGroup className="w-[160px]">
              <SelectLabel className="font-normal text-gray-500">
                {t("Prompt.generator.default")}
              </SelectLabel>
              <SelectItem value="1:1">1:1</SelectItem>
              <SelectLabel className="font-normal text-gray-500">
                {t("Prompt.generator.moviesAndDisplays")}
              </SelectLabel>
              <SelectItem value="16:9">16:9</SelectItem>
              <SelectItem value="5:8">5:8</SelectItem>
              <SelectLabel className="font-normal text-gray-500">
                {t("Prompt.generator.socialPlatforms")}
              </SelectLabel>
              <SelectItem value="9:16">9:16</SelectItem>
              <SelectLabel className="font-normal text-gray-500">
                {t("Prompt.generator.fullScreenMobilePhone")}
              </SelectLabel>
              <SelectItem value="13:6">13:6</SelectItem>
              <SelectItem value="6:13">6:13</SelectItem>
              <SelectLabel className="font-normal text-gray-500">
                {t("Prompt.generator.print")}
              </SelectLabel>
              <SelectItem value="5:4">5:4</SelectItem>
            </SelectGroup>
            <SelectGroup className="w-[160px]">
              <SelectLabel className="font-normal text-gray-500">
                {t("Prompt.generator.instagram")}
              </SelectLabel>
              <SelectItem value="4:5">4:5</SelectItem>
              <SelectLabel className="font-normal text-gray-500">
                {t("Prompt.generator.earlyVideosAndPhotos")}
              </SelectLabel>
              <SelectItem value="4:3">4:3</SelectItem>
              <SelectLabel className="font-normal text-gray-500">
                {t("Prompt.generator.standardSLRCamera")}
              </SelectLabel>
              <SelectItem value="3:2">3:2</SelectItem>
              <SelectItem value="2:3">2:3</SelectItem>
              <SelectLabel className="font-normal text-gray-500">
                {t("Prompt.generator.panoramicPhotography")}
              </SelectLabel>
              <SelectItem value="2:1">2:1</SelectItem>
              <SelectLabel className="font-normal text-gray-500">
                {t("Prompt.generator.portraitPhotography")}
              </SelectLabel>
              <SelectItem value="1:2">1:2</SelectItem>
            </SelectGroup>
          </div>
        </SelectContent>
      </Select>
      <Select onValueChange={(value) => update("style", value)}>
        <SelectTrigger className="w-auto h-8 py-0 px-0 gap-2 select-none bg-transparent border-none shadow-none focus:outline-none focus:ring-0 focus:ring-offset-0">
          <Brush className="w-4 h-4" />
          <SelectValue placeholder={t("Prompt.generator.style")} />
        </SelectTrigger>
        <SelectContent>
          <div className="grid grid-cols-2">
            <SelectGroup className="w-[160px]">
              <SelectItem value="Random" className="text-gray-500">
                {t("Prompt.generator.random")}
              </SelectItem>
              <SelectItem value="Photography">
                {t("Prompt.generator.photography")}
              </SelectItem>
              <SelectItem value="Film">{t("Prompt.generator.film")}</SelectItem>
              <SelectItem value="Anime style">
                {t("Prompt.generator.animeStyle")}
              </SelectItem>
              <SelectItem value="Comics">
                {t("Prompt.generator.comics")}
              </SelectItem>
              <SelectItem value="Studio Ghibli">
                {t("Prompt.generator.studioGhibli")}
              </SelectItem>
              <SelectItem value="Illustration">
                {t("Prompt.generator.illustration")}
              </SelectItem>
              <SelectItem value="Cyberpunk">
                {t("Prompt.generator.cyberpunk")}
              </SelectItem>
              <SelectItem value="Pixel art">
                {t("Prompt.generator.pixelArt")}
              </SelectItem>
              <SelectItem value="Minimalist design">
                {t("Prompt.generator.minimalistDesign")}
              </SelectItem>
              <SelectItem value="Surrealism">
                {t("Prompt.generator.surrealism")}
              </SelectItem>
              <SelectItem value="Realism">
                {t("Prompt.generator.realism")}
              </SelectItem>
            </SelectGroup>
            <SelectGroup className="w-[160px]">
              <SelectItem value="Washpainting">
                {t("Prompt.generator.washpainting")}
              </SelectItem>
              <SelectItem value="Chinese traditional painting">
                {t("Prompt.generator.chineseTraditionalPainting")}
              </SelectItem>
              <SelectItem value="Sketch">
                {t("Prompt.generator.sketch")}
              </SelectItem>
              <SelectItem value="Watercolor painting">
                {t("Prompt.generator.watercolorPainting")}
              </SelectItem>
              <SelectItem value="Oil painting">
                {t("Prompt.generator.oilPainting")}
              </SelectItem>
              <SelectItem value="Manuscript">
                {t("Prompt.generator.manuscript")}
              </SelectItem>
              <SelectItem value="Ukiyoe">
                {t("Prompt.generator.ukiyoe")}
              </SelectItem>
              <SelectItem value="Claymation">
                {t("Prompt.generator.claymation")}
              </SelectItem>
              <SelectItem value="Kirigami">
                {t("Prompt.generator.kirigami")}
              </SelectItem>
              <SelectItem value="Low-poly">
                {t("Prompt.generator.lowPoly")}
              </SelectItem>
              <SelectItem value="Holographic">
                {t("Prompt.generator.holographic")}
              </SelectItem>
              <SelectItem value="3D model">
                {t("Prompt.generator.3DModel")}
              </SelectItem>
            </SelectGroup>
          </div>
        </SelectContent>
      </Select>
      <Select onValueChange={(value) => update("color", value)}>
        <SelectTrigger className="w-auto h-8 py-0 px-0 gap-2 select-none bg-transparent border-none shadow-none focus:outline-none focus:ring-0 focus:ring-offset-0">
          <Palette className="w-4 h-4" />
          <SelectValue placeholder={t("Prompt.generator.color")} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Random" className="text-gray-500">
            {t("Prompt.generator.random")}
          </SelectItem>
          <SelectItem value="Warm colors">
            {t("Prompt.generator.warmColors")}
          </SelectItem>
          <SelectItem value="Cool colors">
            {t("Prompt.generator.coolColors")}
          </SelectItem>
          <SelectItem value="Bright colors">
            {t("Prompt.generator.brightColors")}
          </SelectItem>
          <SelectItem value="Pastel colors">
            {t("Prompt.generator.pastelColors")}
          </SelectItem>
          <SelectItem value="Black and White">
            {t("Prompt.generator.blackAndWhite")}
          </SelectItem>
        </SelectContent>
      </Select>
      <Select onValueChange={(value) => update("light", value)}>
        <SelectTrigger className="w-auto h-8 py-0 px-0 gap-2 select-none bg-transparent border-none shadow-none focus:outline-none focus:ring-0 focus:ring-offset-0">
          <Sun className="w-4 h-4" />
          <SelectValue placeholder={t("Prompt.generator.light")} />
        </SelectTrigger>
        <SelectContent>
          <div className="grid grid-cols-2">
            <SelectGroup className="w-[140px]">
              <SelectItem value="Random" className="text-gray-500">
                {t("Prompt.generator.random")}
              </SelectItem>
              <SelectItem value="Sunlight">
                {t("Prompt.generator.sunlight")}
              </SelectItem>
              <SelectItem value="Backlight">
                {t("Prompt.generator.backlight")}
              </SelectItem>
              <SelectItem value="Moonlight">
                {t("Prompt.generator.moonlight")}
              </SelectItem>
              <SelectItem value="Dim light">
                {t("Prompt.generator.dimLight")}
              </SelectItem>
              <SelectItem value="Soft light">
                {t("Prompt.generator.softLight")}
              </SelectItem>
            </SelectGroup>
            <SelectGroup className="w-[140px]">
              <SelectItem value="Contour light">
                {t("Prompt.generator.contourLight")}
              </SelectItem>
              <SelectItem value="Side light">
                {t("Prompt.generator.sideLight")}
              </SelectItem>
              <SelectItem value="Neon light">
                {t("Prompt.generator.neonLight")}
              </SelectItem>
              <SelectItem value="Sunrise">
                {t("Prompt.generator.sunrise")}
              </SelectItem>
              <SelectItem value="Sunset">
                {t("Prompt.generator.sunset")}
              </SelectItem>
              <SelectItem value="Tyndall effect">
                {t("Prompt.generator.tyndallEffect")}
              </SelectItem>
            </SelectGroup>
          </div>
        </SelectContent>
      </Select>
      <Select onValueChange={(value) => update("composition", value)}>
        <SelectTrigger className="w-auto h-8 py-0 px-0 gap-2 select-none bg-transparent border-none shadow-none focus:outline-none focus:ring-0 focus:ring-offset-0">
          <Focus className="w-4 h-4" />
          <SelectValue placeholder={t("Prompt.generator.composition")} />
        </SelectTrigger>
        <SelectContent>
          <div className="grid grid-cols-2">
            <SelectGroup className="w-[140px]">
              <SelectItem value="Random" className="text-gray-500">
                {t("Prompt.generator.random")}
              </SelectItem>
              <SelectItem value="Blurry background">
                {t("Prompt.generator.blurryBackground")}
              </SelectItem>
              <SelectItem value="Close up">
                {t("Prompt.generator.closeUp")}
              </SelectItem>
              <SelectItem value="Shot from below">
                {t("Prompt.generator.shotFromBelow")}
              </SelectItem>
              <SelectItem value="Shot from above">
                {t("Prompt.generator.shotFromAbove")}
              </SelectItem>
            </SelectGroup>
            <SelectGroup className="w-[140px]">
              <SelectItem value="Wide angle">
                {t("Prompt.generator.wideAngle")}
              </SelectItem>
              <SelectItem value="Macrophotography">
                {t("Prompt.generator.macrophotography")}
              </SelectItem>
              <SelectItem value="Panoramic photography">
                {t("Prompt.generator.panoramicPhotography")}
              </SelectItem>
              <SelectItem value="Tilt-Shift photography">
                {t("Prompt.generator.tiltShiftPhotography")}
              </SelectItem>
            </SelectGroup>
          </div>
        </SelectContent>
      </Select>
    </div>
  );
}

export default memo(PresetList);
