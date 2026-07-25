import { experience } from '../data/experience';
import { profile } from '../data/home';
import { projects } from '../data/projects';

const SITE = 'https://shouryatiwaryy.github.io';

function bullets(items: string[]): string {
  return items.map((item) => `- ${item}`).join('\n');
}

function block(title: string, body: string): string {
  return `\n## ${title}\n\n${body.trim()}\n`;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

/** Plain-text digest of the whole site for LLMs and crawlers. Built at deploy time. */
export async function buildLlmsTxt(): Promise<string> {
  const generated = new Date(
    import.meta.env.PUBLIC_SITE_UPDATED || Date.now()
  ).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const sections: string[] = [
    `# ${profile.name}`,
    '',
    `> ${profile.description}`,
    '',
    `Site: ${SITE}`,
    `Generated: ${generated}`,
    '',
    '---',

    block(
      'Home',
      [
        `URL: ${SITE}/`,
        `Role: ${profile.role}`,
        '',
        '### My Story',
        '',
        profile.storyParagraphs.join('\n\n'),
        '',
        '### Links',
        '',
        bullets(profile.links.map((l) => `${l.label}: ${l.url}`)),
      ].join('\n')
    ),

    block(
      'Experience',
      [
        `URL: ${SITE}/experience`,
        '',
        ...experience.map((role) =>
          [
            `### ${role.title} — ${role.company}`,
            `Period: ${role.period}${role.current ? ' (current)' : ''}`,
            '',
            bullets(role.bullets),
          ].join('\n')
        ),
      ].join('\n\n')
    ),

    block(
      'Projects',
      [
        `URL: ${SITE}/projects`,
        '',
        ...projects.map((p) =>
          [
            `### ${p.title}`,
            `Category: ${p.category}`,
            `Date: ${formatDate(p.date)}`,
            ...(p.url ? [`URL: ${p.url}`] : []),
            '',
            p.summary,
          ].join('\n')
        ),
      ].join('\n\n')
    ),
  ];

  sections.push(
    block(
      'Site map',
      bullets([
        `Home: ${SITE}/`,
        `Experience: ${SITE}/experience`,
        `Projects: ${SITE}/projects`,
        `LLM digest: ${SITE}/llms.txt`,
      ])
    )
  );

  return `${sections.join('\n').trim()}\n`;
}