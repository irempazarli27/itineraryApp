export interface Activity {
  id: number;
  place: string;
  time: string;
  category: string;
}

export interface Day {
  id: number;
  title: string;
  date: string;
  activities: Activity[];
}