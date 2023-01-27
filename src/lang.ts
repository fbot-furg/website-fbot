const lang = "en";

const content = {
    "Title": "Titulo",
    "Subtitle": "Subtitulo",
    "Description": "Descrição",
} as const;


function t(text: keyof typeof content) {
    if (lang === "en") {
        return text;
    } else if (lang === "pt") {
        return content[text];
    }
}

console.log(t("Title"))

export default t;

