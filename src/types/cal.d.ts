declare module '@calcom/embed-react' {
  export interface Cal {
    (method: 'ui', props: {
      theme?: 'light' | 'dark'
      hideEventTypeDetails?: boolean
      layout?: 'month_view' | 'week_view' | 'day_view'
    }): void;
  }

  export function getCalApi(): Promise<Cal>;
} 