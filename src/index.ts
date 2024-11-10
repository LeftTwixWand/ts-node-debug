import { App } from "octokit";
import { ConsoleLogger } from "./ConsoleLogger";
 
const logger = new ConsoleLogger();

const INSTALLATION_ID = 56473199;
const app = new App({appId: 56473199, privateKey: "NiJ9.eyJpbnN0YWxsYXRpb25JZCI6IjU2NDczMTk5IiwiaXNzIjoidnN0cyIsImF1ZCI6InZzdHMiLCJuYmYiOi02MjEzNTU5MzEzOSwiZXhwIjotNjIxMzU1OTMxMzl9.IanmI-mqETyCHUB84Og8i14QMTni4WraMm8QX4ixSx8"});

const octokit = await app.getInstallationOctokit(INSTALLATION_ID);

const respone = await octokit.graphql(`
    query {
      viewer {
        login
      }
    }
    `);

    console.log(respone);