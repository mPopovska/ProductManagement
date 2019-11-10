export class User {
    name: string = "";
    role: string = "";
    initials: string = "";

    mapToUser(obj) {
        this.name = obj.name;
        this.role = obj.role;
        this.initials = this.name.match(/\b(\w)/g).join("");
    }
}