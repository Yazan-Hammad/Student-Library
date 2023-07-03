class AppError extends Error {
	constructor(message, statuCode) {
		super(message);

		this.statuCode = statuCode;
		this.status = `${statuCode}`.startsWith('4')? 'fail': 'error';
		this.isOperational = true;
		

		Error.captureStackTrace(this, this.constructor);
	}
}

module.exports = AppError;