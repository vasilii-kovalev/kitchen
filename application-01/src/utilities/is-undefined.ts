const isUndefined = (
	value: unknown,
): value is undefined => {
	return value === undefined;
};

export {
	isUndefined,
};
