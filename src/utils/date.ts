type DateDisplayFormat = 'short' | 'long';

const DATE_FORMATS = {
  short: {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  },
  long: {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  },
} as const;

export function formatDate(date: Date, format: DateDisplayFormat = 'long'): string {
  return new Intl.DateTimeFormat('en-US', DATE_FORMATS[format]).format(date);
}
