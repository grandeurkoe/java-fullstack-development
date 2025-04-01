import java.util.Scanner;

class Subject {
    public String subject_name;
    public int subject_code;
    public int subject_mark;

    void set_subject_details(String name, int code, int mark)
    {
        subject_name = name;
        subject_code = code;
        subject_mark = mark;
    }
}

class Student{
    public String student_name;
    public int student_rollno;
    public int subject_marks; 
    public Subject subjects[] = new Subject[6];

    void set_student_details(String subject_name[], int subject_code[])
    {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Please enter the student's name: ");
        student_name = scanner.nextLine();
        System.out.print("Please enter the student's roll no: ");
        student_rollno = scanner.nextInt();
        System.out.println("Please enter the student's marks: ");
        for(int i = 0; i < 6; i++)
        {
            System.out.print(subject_code[i] + ". " + subject_name[i] + ": ");
            subject_marks = scanner.nextInt();
            subjects[i] = new Subject();
            subjects[i].set_subject_details(subject_name[i], subject_code[i], subject_marks);
        }
        scanner.close();
    }

    void get_student_report_card()
    {
        float total = 0;
        float percentage;
        String result;
        System.out.println("\n\t\tDVOC Institute");
        System.out.println("Name: " + student_name + "\t\tRoll No: " + student_rollno);
        System.out.println("=====================================================");
        System.out.println("Marks\tSubject Code\tSubject Name");
        for(int i = 0; i < 6; i++)
        {
            total += subjects[i].subject_mark;
            System.out.println(subjects[i].subject_mark + "\t" + subjects[i].subject_code + "\t\t" + subjects[i].subject_name);
        }
        System.out.println("=====================================================");
        percentage = (total / 600) * 100;
        if(percentage >= 33.0F )
        {
            result = "PASS";
        }
        else
        {
            result = "FAIL";
        }

        System.out.println("\tTotal: " + total + "\t\tResult: " + result);
    }
    
    
}

public class ResultSheet {
    public static void main(String[] args) {
        String subject_name[] = new String[]{"English Core", "Mathematics", "Physics", "Chemistry", "Computer Science", "Physical Education"};
        int subject_code[] = new int[]{301, 302, 303, 304, 305, 306};
        Student student = new Student();
        student.set_student_details(subject_name, subject_code);
        student.get_student_report_card();
    }
}
