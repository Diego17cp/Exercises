import DBLOCAL from 'db-local'

const { Schema } = new DBLOCAL({ path: './db' })

const User = Schema('User', {
    _id: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
})

export class UserRepository {
    static create ({ username, password }) {
        // Min Validations
        if (typeof username !== 'string') throw new Error('username must be a string')
        if (username.length < 3) throw new Error('username must be at least 3 characters long')
        
        if (typeof password !== 'string') throw new Error('password must be a string')
        if (password.length < 8) throw new Error('password must be at least 8 characters long')

        // Check if user already exists
        const user = User.findOne({ username })
        if (user) throw new Error('username already exists')

        // Create id
        const id = crypto.randomUUID()

        // Create user
        User.create({
            _id: id,
            username,
            password,
        }).save()

        return id
    }
    static login ({ username, password }) {}
}