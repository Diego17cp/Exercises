import { Button, Card, TextInput, Title } from "@tremor/react"
import { useUsersActions } from "../hooks/useUsersActions"

export const CreateNewUser = () => {
    const {addUser} = useUsersActions()
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const formData = new FormData(form)

        const name = formData.get("name") as string
        const email = formData.get("email") as string
        const github = formData.get("github") as string
        addUser({name, email, github})
    }   
    return (
        <Card style={{
            marginTop: "20px",
        }}>
            <Title>Create New User</Title>
            <form className="" onSubmit={handleSubmit}>
                <TextInput placeholder="Diego Castro" name="name"></TextInput>
                <TextInput placeholder="example@gmail.com" name="email"></TextInput>
                <TextInput placeholder="diego17cp" name="github"></TextInput>
                <div>
                    <Button type="submit" style={{
                        marginTop: "16px"
                    }}>Create</Button>
                </div>
            </form>
        </Card>
    )
}