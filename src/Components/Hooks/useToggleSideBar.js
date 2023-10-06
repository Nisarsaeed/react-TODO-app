import { useState } from "react";

export function useToggleSideBar() {
    const [sideBarDisplay, setSideBarDisplay] = useState(true);

    function toggleMenu() {
        setSideBarDisplay(prevSideBarDisplay => !prevSideBarDisplay);
    }

    return {
        sideBarDisplay,
        toggleMenu
    };
}
