"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("./users");
const userInfo_1 = require("./userInfo");
class UserJobPosition {
    constructor(age, gender, name, position) {
        this.age = age;
        this.gender = gender;
        this.name = name;
        this.position = position;
    }
}
function getUsersJobPositions(usersArray) {
    return usersArray.map(user => {
        const userInfo = userInfo_1.usersInfoArray.filter(i => i.userId === user.userId)[0];
        return new UserJobPosition(userInfo.age, user.gender, user.name, userInfo.organization.position);
    });
}
const usersPositions = getUsersJobPositions(users_1.usersArray);
console.log('userPositions', usersPositions);
//# sourceMappingURL=index.js.map