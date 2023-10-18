import { createClient } from "contentful";

const client = createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN,
    host: process.env.REACT_APP_HOST
});

export const fetchWeeklyRecord = async () => {
    try {
        const entries = await client.getEntries({
            content_type: ["studiedTopicsWeek"]
        });
        
        const sanitizedEntries = entries.items.map((item) => {
            return {
                ...item.fields,
            };
        });
        return sanitizedEntries;
         
    } catch (error) {
        console.error("Error fetching Weekly Record  Data:", error);
        throw error;
    }
};