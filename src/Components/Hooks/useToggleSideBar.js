import { useState } from "react";

export function useToggleSideBar() {
    const [sideBarDisplay, setSideBarDisplay] = useState(false);

    function toggleMenu() {
        setSideBarDisplay(prevSideBarDisplay => !prevSideBarDisplay);
    }

    return {
        sideBarDisplay,
        toggleMenu
    };
}
