import { faker } from "@faker-js/faker"
import db from "../../prisma/connection"

const users_seed = () => {
    const fake_username = faker.internet.userName()
    const fake_email = faker.internet.email()
    const fake_password = faker.internet.password()

    db.users.create({
        data: {
            username: fake_username,
            email: fake_email,
            password: fake_password
        }
    })
        .then(res => console.info(`username ${res.username} berhasil di buat.. `))
        .catch(err => console.error(err.message))

}

for (let i = 0; i < 100; i++) {
    users_seed()
}

