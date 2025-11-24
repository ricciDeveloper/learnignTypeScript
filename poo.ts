class User {
	name: string;
	age: number;

	constructor(name: string, age: number){
		this.name = name
		this.age = age	
	}


	showName = () => {
		console.log(this.name)
	}

	showAllProperties = () => {
		console.log(`nome: ${this.name}, idade: ${this.age}`);
	}
}


const jao = new User ('jao', 26)
jao.showAllProperties()
const stella = new User ('stella', 25)
stella.showAllProperties()