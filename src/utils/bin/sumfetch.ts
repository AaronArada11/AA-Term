import config from '../../../config.json';

const isConfigured = (value?: string): value is string =>
  Boolean(value && value.trim());

const link = (href: string, label: string) =>
  `<u><a href="${href}" target="_blank">${label}</a></u>`;

const sumfetch = async (args: string[]): Promise<string> => {
  const resumeLink = isConfigured(config.resume_url)
    ? link(config.resume_url, 'resume')
    : 'resume not configured';
  const repoLink = link(config.repo, 'Github repo');
  const emailLink = link(`mailto:${config.email}`, config.email);
  const githubLink = link(
    `https://github.com/${config.social.github}`,
    `github.com/${config.social.github}`,
  );
  const linkedinLink = isConfigured(config.social.linkedin)
    ? link(
        `https://linkedin.com/in/${config.social.linkedin}`,
        `linkedin.com/in/${config.social.linkedin}`,
      )
    : 'LinkedIn not configured';
  const Kumpas = link(`https://kumpas-translator.vercel.app/`, 'KUMPAS');
  const MirrorMentor = link(`https://github.com/Goodness-Gracious-GG/demo`, 'MirrorMentor');
  const AaronIntelligence = link(`https://aaron-arada.vercel.app/`, 'Aaron Intelligence');
  if (config.ascii === 'cveinnt') {
    return `                                                  
             @@@@@@@@@@@@@                   sumfetch: summary display
        @@@@               @@@@             -----------
      @@                       @@            ABOUT
    @@                           @@          ${config.name}
  @@                               @@       ﰩ ${config.ps1_hostname}
 @@                         @@@     @@       ${resumeLink}
@@        @@@                        @@     爵 ${repoLink}
@@                                   @@     -----------
@@             .@@@@@@@@@@.          @@      CONTACT 
 @@           @@          @@        @@       ${emailLink}
  @@           @@        @@        @@        ${githubLink}
   @@             @@@@@@          @@         ${linkedinLink}
     @@@                        @@@          PROJECTS
        @@@                  @@@ @@          
         @|  @@@@@@@@@@@@@@@@   @@           
         @|                      @@          

`;
  } else {
    return `
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                  sumfetch
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              -----------
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄             ABOUT
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            ${config.name}
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓           ${resumeLink}
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓       爵 ${repoLink}
▐▓                                 ▐▓       -----------
▐▓        > Aaron's Terminal       ▐▓        CONTACT 
▐▓                                 ▐▓        ${emailLink}
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓        ${githubLink}
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓           ${linkedinLink}
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           -----------
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀             PROJECTS
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀               ${Kumpas}
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                  ${AaronIntelligence}
                                            ${MirrorMentor}

`;
  }
};

export default sumfetch;
