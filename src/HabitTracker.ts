/*
Always write the smallest amount of code needed to pass the tests.

*/

export class HabitTracker {
    // class - Groupsdata and behaivior. A class is a blueprint
    private habits: string[] = [];// This is an Array of strings
    /* with private property only HabitTracker can modify it. This is encapsulation.
        Encapsulation is on of the foundations of OOP - Object-Oriented Programming.
    */

    addHabit(name: string): void {
        if (name.trim() === ""){
            throw new Error("Habit Required");
        }
        this.habits.push(name);// .push adds an item to the end of an Array.
    }

    getHabitCount() : number {
        return this.habits.length;
    }
}