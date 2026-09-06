class Principal extends Person {
    constructor(name, email, id) {
        super(name, email, id);
        this.members = [];
    }

    addMember(member) {
        this.members.push(member);
        console.log(member.name + " added.");
    }

    removeMember(name) {
        this.members = this.members.filter(function (member) {
            return member.name !== name;
        });
        console.log(name + " removed.");
    }

    listMembers() {
        this.members.forEach(function (member) {
            console.log(member.name);
        });
    }

    describeRole() {
        console.log(this.name + " is the Principal.");
    }
}