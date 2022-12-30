//Employee Details starts from here
class employeeDetails {
    constructor(name, id_number, phone_number, email, job_title, start_year, end_year, shift, status){
        this.name = name;
        this.id_number = id_number;
        this.phone_number = phone_number;
        this.email = email;
        this.job_title = job_title;
        this.start_year = start_year;
        this.end_year = end_year;
        this.shift = shift;
        this.status = status;

    }   

    introduce(){
        return `Hi guys, My name is ${this.name}. I have experience of 8 years and my other details is given below:- <br>
        Id-Number: ${this.id_number} <br>
        Contact: ${this.phone_number} <br>
        Email-Id: ${this.email} <br>
        Job-Title: ${this.job_title} <br>
        Joining-Year: ${this.start_year} <br>
        Ending-Year: ${this.end_year} <br>
        Shift: ${this.shift} <br>
        Status: ${this.status} <br>
        <hr>`;
    }
}
const obj1 = new employeeDetails('Suraj', 234562, 8745963258, 'abc@gmail.com', 'Web Developer', 2015, 2023, 'Morning', 'Active'); 
document.getElementById("container").innerHTML = obj1.introduce();
console.log(obj1);

//Programmer Details starts from here
class programmer extends employeeDetails{
    constructor(name, id_number, phone_number, email, job_title, start_year, end_year, shift, status, salary){
        super(name, id_number, phone_number, email, job_title, start_year, end_year, shift, status);
        this.salary = salary;
    }

    introduce(){
        return `Hi guys, My name is ${this.name}. I have experience of 23 years and my other details is given below:- <br>
        Id-Number: ${this.id_number} <br>
        Contact: ${this.phone_number} <br>
        Email-Id: ${this.email} <br>
        Job-Title: ${this.job_title} <br>
        Joining-Year: ${this.start_year} <br>
        Ending-Year: ${this.end_year} <br>
        Shift: ${this.shift} <br>
        Status: ${this.status} <br>
        Salary: ${this.salary}
        <hr>`;
    }
}
const obj2 = new programmer('Gagan', 232569, 8800326074, 'xyz@gmail.com', 'Backend Developer', 2000, 2023, 'Evening', 'Active', 100000);
document.getElementById("container1").innerHTML = obj2.introduce();
console.log(obj2)

