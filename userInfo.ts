export interface IUserInfo {
    userId: string,
    name: string,
    birthDate: string,
    age: number,
    organization: IOrganization

}

export interface IOrganization {
    name: string,
    position: string
}

export const usersInfoArray: IUserInfo[] = [
    {
        userId: '127e4567-e89b-12d3-a458-426614174000',
        name: 'John',
        birthDate: '1982-02-17T21:00:00.000Z',
        age: 40,
        organization: {
            name: 'Amazon',
            position: 'General manager'
        }
    },
    {
        userId: '127e4567-e89a-12f3-a458-327395154000',
        name: 'Anna',
        birthDate: '1988-02-17T21:00:00.000Z',
        age: 34,
        organization: {
            name: 'Amazon',
            position: 'Manager'
        }
    }
]