export function cleanString(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Sostituisce tutti gli spazi con "-"
    .replace(/[^a-z0-9\-]/g, "") // Rimuove tutto tranne lettere, numeri e trattini
    .replace(/\-+/g, "-") // Rimpiazza trattini multipli con uno solo
    .replace(/^-+|-+$/g, ""); // Rimuove trattini iniziali e finali
}

export function titleToString(str: string): string {
  return str
    .replace(/-/g, " ") // Sostituisce i trattini con spazi
    .toUpperCase(); // Converte tutto in maiuscolo
}
