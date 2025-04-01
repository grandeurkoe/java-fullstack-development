/*
A student will not be allowed to sit for an exam if their attendance is less than 75%. 
Take the following input from the user: the number of classes held and the number of classes attended. 
Print the percentage of classes attended and whether the student is allowed to sit for the exam or not
*/
#include<iostream>
using namespace std;

int main()
{
    int held, attended; 
    float attend_percentage;
    cout<<"Enter the number of classes held: ";
    cin>>held;
    cout<<"Enter the number of classes attended: ";
    cin>>attended;
    attend_percentage = (float(attended) / float(held)) * 100;

    if (attend_percentage < 75)
    {
        cout<<"Student\'s attendance is "<<attend_percentage<<"%, which is less than 75%; thus, they are not allowed to sit for the exam.";
    }
    else
    {
         cout<<"Student\'s attendance is "<<attend_percentage<<"%, which is not less than 75%; thus, they are allowed to sit for the exam.";       
    }
    return 0;
}