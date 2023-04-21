/**
 * @file Server-related URL constants.
 */

export const linkUrl =
	localStorage.getItem("meower_linkurl") ||
	"wss://server.streamilator.tk/";
export const apiUrl =
	localStorage.getItem("meower_apiurl") || "https://server.streamilator.tk/v0/cloudlink/";
export const encodeApiURLParams =
	localStorage.getItem("meower_encodeapi") || false;
