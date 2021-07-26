const service = {
    users: [],
    getUsers() {
        return service.users.length
    },
    ping(id) {
        service.users.push({ id: id, timestamp: Date.now() })
    },
    purge() {
        console.log('purging')
        let temp = []
        for (let i = 0; i < service.users.length; i++) {
            if ((Date.now() - service.users[i].timestamp) < 30000) {
                temp.push(service.users[i])
            }
        }
        service.users = temp
    }
}
module.exports = service