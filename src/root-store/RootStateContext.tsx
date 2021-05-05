import React from "react";
import { NotesStore } from "../store/NoteStore";
import {Popup} from "../modules/add-user-form/store/popup";

type RootStateContextValue = {
    notesStore: NotesStore;
    popup: Popup;
};

const RootStateContext = React.createContext<RootStateContextValue>(
    {} as RootStateContextValue
);

const notesStore = new NotesStore();
const popup = new Popup();

const storeValue = {
    notesStore,
    popup
}

export const RootStateProvider: React.FC<React.PropsWithChildren<{}>> = ({
    children,
}) => {
    return (
        <RootStateContext.Provider value={storeValue}>
            {children}
        </RootStateContext.Provider>
    );
};

export const useRootStore = () => React.useContext(RootStateContext);