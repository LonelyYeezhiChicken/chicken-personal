import React from "react";

export function useTitle(title: string) {
    React.useEffect(() => {
        const prevTitle = document.title;
        document.title = title;
        return () => {
            document.title = prevTitle;
        };
    });
}