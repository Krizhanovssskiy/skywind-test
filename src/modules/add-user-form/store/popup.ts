import { makeAutoObservable } from "mobx";

export class Popup {
    constructor() {
        makeAutoObservable(this)
    }
    condition: boolean = false;

    nameUser: string = "";

    togllePopup = (toggle: boolean) => {
        this.condition = toggle;
    }
}

// export default new NotesStore();