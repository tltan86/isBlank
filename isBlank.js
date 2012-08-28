/*
	Description:
		13/09/2011 - Tan Tai Li
		
		Check for blank.
		
		Note:
		(typeof(undefined) === undefined); -> false
		(typeof(undefined) === "undefined"); -> true
		typeof(null); -> object
	Params:
		need_trim - boolean. True/False. Default "False".
	Return:
		boolean. True/False.
*/
function isBlank(value, need_trim) {
	if ((typeof(need_trim) !== "undefined") && (need_trim !== null) && (need_trim !== true)) {
		need_trim = false;
	}
	
	if (need_trim) {
		if ((value !== null) && (typeof(value) !== "undefined") && (typeof(value) == "string")) {
			value = trim(value);
		}
	}
		
	if (value === "" || value === null || typeof(value) === "undefined") {
		return true;
	} else {
		return false;
	}
}

function isNotBlank(value, need_trim) {
	return !isBlank(value, need_trim);
}

function trim(value) {
	return value.replace(/^\s+|\s+$/g,"");
}

function ltrim(value) {
	return value.replace(/^\s+/,"");
}

function rtrim(value) {
	return value.replace(/\s+$/,"");
}