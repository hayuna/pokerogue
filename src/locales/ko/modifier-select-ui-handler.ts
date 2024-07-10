import { SimpleTranslationEntries } from "#app/interfaces/locales";

export const modifierSelectUiHandler: SimpleTranslationEntries = {
  "transfer": "건네주기",
  "reroll": "갱신",
  "lockRarities": "희귀도 고정",
  "checkTeam": "파티 확인",
  "transferDesc": "지닌 물건을 다른 포켓몬에게 건네줍니다.",
  "rerollDesc": "돈을 소모하여 아이템 목록을 새로 고칩니다.",
  "lockRaritiesDesc": "갱신되는 아이템의 희귀도가 고정됩니다(갱신 비용 증가).",
  "checkTeamDesc": "파티를 확인하거나 폼 변경 아이템을 사용합니다.",
  "rerollCost": "₽{{formattedMoney}}",
  "itemCost": "₽{{formattedMoney}}"
} as const;
