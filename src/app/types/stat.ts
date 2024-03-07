export interface Stat {
  name: string;
  url: string;
}

export interface StatItem {
  base_stat: number;
  effort: number;
  stat: Stat;
}
