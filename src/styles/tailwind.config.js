/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      typography: () => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': 'var(--color-foreground)',
            '--tw-prose-headings': 'var(--color-foreground)',
            '--tw-prose-lead': 'var(--text-primary)',
            '--tw-prose-links': 'var(--color-primary)',
            '--tw-prose-bold': 'var(--color-foreground)',
            '--tw-prose-counters': 'var(--color-primary)',
            '--tw-prose-bullets': 'var(--color-foreground)',
            '--tw-prose-hr': 'var(--color-foreground)',
            '--tw-prose-quotes': 'var(--color-foreground)',
            '--tw-prose-quote-borders': 'var(--color-foreground)',
            '--tw-prose-captions': 'var(--color-foreground)',
            '--tw-prose-code': 'var(--color-foreground)',
            '--tw-prose-pre-code': 'var(--color-foreground)',
            '--tw-prose-pre-bg': 'var(--color-foreground)',
            '--tw-prose-th-borders': 'var(--color-foreground)',
            '--tw-prose-td-borders': 'var(--color-foreground)',
          },
        },
      }),
    },
  },
};
