import {IUser, usersArray} from "./users";
import {usersInfoArray} from "./userInfo";

interface IUserJobPosition {
    name: string,
    position: string,
    age: number,
    gender: string
}

class UserJobPosition implements IUserJobPosition{
    constructor(age:number, gender: string, name: string, position: string) {
        this.age = age;
        this.gender = gender;
        this.name = name;
        this.position = position;
    }
    age: number;
    gender: string;
    name: string;
    position: string;
}


function getUsersJobPositions(usersArray: IUser[]): IUserJobPosition[] {

    return usersArray.map(user => {
        const userInfo = usersInfoArray.filter(i => i.userId === user.userId)[0];
        return new UserJobPosition(userInfo.age, user.gender, user.name, userInfo.organization.position)
    })
}

const usersPositions = getUsersJobPositions(usersArray);

console.log('userPositions', usersPositions);

