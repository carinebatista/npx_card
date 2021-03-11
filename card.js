#!/usr/bin/env node

const boxen = require("boxen");
const chalk = require("chalk");
const clear = require("clear");
const sw = require("star-wars-quotes");

const data = {
    name: chalk.red("                  Carine Batista"),
    work: `${chalk.white("Front End Developer at")} ${chalk.cyan("Braavo")}`,

    github: chalk.gray("https://github.com/") + chalk.blue("carinebatista"),
    twitter: chalk.gray("https://twitter.com/") + chalk.cyanBright("carinebatata"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.green("carinebatista"),
    web: chalk.cyan("https://carine.dev"),

    npx: chalk.red("npx carine"),

    labelWork: ("         "),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        ``,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelWeb}  ${data.web}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        
        `${chalk.italic("    My inbox is always open, Whether you have a")}`,
        `${chalk.italic(
            "    question or just want talk about Star Wars! "
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "bold",
        borderColor: "magenta"
    }
);

console.log(me);

console.log(`" ${chalk.cyanBright.italic(sw())} "`);
