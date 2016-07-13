module.exports = {
    _success: (response) => {
        return (data) => {
            response.json({success: true, data: data});
        }
    },

    _error: (response) => {
        return (error) => {
            response.status(500).json({success: false, error: error});
        }
    }
}