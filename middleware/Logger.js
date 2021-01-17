const logger = require('pino')()

loggerController = (req,res,next)=>{
    logger.info(req.url)
    next()
}
module.exports = loggerController