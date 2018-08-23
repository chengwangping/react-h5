const configName = process.env.NODE_ENV || 'development'

export default require(`./${configName}.js`).default
