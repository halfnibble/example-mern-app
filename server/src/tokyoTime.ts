function getCurrentTimeInTokyo(): string {
    const tokyoTime = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Tokyo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    });

    return tokyoTime;
}

export default getCurrentTimeInTokyo;
