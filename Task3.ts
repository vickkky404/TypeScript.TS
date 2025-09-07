// Task 3: Object and interfaces in TS...

// Defining an interface for student
interface Student{
    id: number;
    name: string;
    age: number;
    course: string;
    isEnrolled?: boolean;

}

// creating objects
const student1: Student = {
    id: 1,
    name: "Nalinikant Bastia",
    age: 22;
    course: "BCA",
    isEnrolled: true;
}

function displayStudent(student: Student): void {
  console.log(`ID: ${student.id}`);
  console.log(`Name: ${student.name}`);
  console.log(`Age: ${student.age}`);
  console.log(`Course: ${student.course}`);
  console.log(`Enrolled: ${student.isEnrolled ?? "Not provided"}`);
  console.log("------------------");
};

displayStudent(student1);
