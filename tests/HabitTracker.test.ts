import { describe, expect, it } from "vitest";
import { HabitTracker } from "../src/HabitTracker.js";

describe("HabitTracker", ()=> {
    it("should add a habit", ()=> {
        const tracker = new HabitTracker();
        // created a new object.

        tracker.addHabit("Exercise");
        // added the exercise habit.

        expect(tracker.getHabitCount()).toBe(1)
        // I expect there to be 1 habit.
    })

    it("should not allow empty habits", ()=> { //this test is to make sure an empty habit throws an error.
        const tracker = new HabitTracker();

        expect(()=> tracker.addHabit("")).toThrow()
    })
})