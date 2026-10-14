import { BookText, Gamepad2, Hammer, PlantPot, type LucideIcon } from "lucide-react";
import type { IconeLoisir } from "../types/cv";

export const ICONES_LOISIRS = {
  "plant-pot": PlantPot,
  "book-text": BookText,
  "hammer": Hammer,
  "gamepad-2": Gamepad2,
} satisfies Record<IconeLoisir, LucideIcon>;
