import { writable, type Writable } from "svelte/store";

export const isSideOpen : Writable<boolean> = writable(false)