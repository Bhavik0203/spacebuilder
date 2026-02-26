export const PROJECT_LINKS: Record<string, string> = {
    "37 grandstand": "https://37grandstand.com/",
    "codename hotspot": "https://codenamehotspot.com/",
};

export function getProjectLink(name: string): string | undefined {
    const key = name.trim().toLowerCase();
    return PROJECT_LINKS[key];
}

