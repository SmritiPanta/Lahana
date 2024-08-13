export const encodeText = (data: string) => encodeURIComponent(btoa(data));

export const decodeText = (data: string) => decodeURIComponent(atob(data));
