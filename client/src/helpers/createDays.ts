import type { Day } from "../types/day";

export function createDays(
    startDate: string,
    endDate: string
):    Day[] {
    if (!startDate || !endDate) return [];

    const start = new Date(startDate);
    const end = new Date(endDate);

    const days: Day[] = [];

    let index = 1;

    for (
        let current = new Date(start);
        current <= end;
        current.setDate(current.getDate() + 1)
    ) {
        days.push({
            id: index,
            title: `${index}. Gün`,
            date: current.toLocaleDateString("tr-TR"),
            activities: [],
        });
        index++;
    }

    return days;
}
