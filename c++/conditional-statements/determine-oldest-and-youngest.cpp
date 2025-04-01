// Program to take input of age of 3 people by user and determine oldest and youngest among them.
#include<iostream>
using namespace std;

int main()
{
    int person1, person2, person3;
    cout<<"Enter the age of the first person: ";
    cin>>person1;
    cout<<"Enter the age of the second person: ";
    cin>>person2;
    cout<<"Enter the age of the third person: ";
    cin>>person3;

    if (person1 == person2 && person2 == person3)
    {
        cout<<"Person1, Person2 and Person3 or of the same age. So, both the youngest and the oldest are "<<person1<<" years old.";
    }
    else if(person1 == person2)
    {
        if (person1 > person3)
        {
            cout<<"Person3 is the youngest at "<<person3<<" years old.\nPerson1 and Person2 are the oldest at, "<<person1<<" years old.";
        }
        else
        {
            cout<<"Person1 and Person2 are the youngest at, "<<person1<<" years old.\nPerson3 is the oldest at "<<person3<<" years old.";
        }
    }
    else if(person2 == person3)
    {
        if (person2 > person1)
        {
            cout<<"Person1 is the youngest at "<<person1<<" years old.\nPerson2 and Person3 are the oldest at, "<<person2<<" years old.";
        }
        else
        {
            cout<<"Person2 and Person3 are the youngest at, "<<person2<<" years old.\nPerson1 is the oldest at "<<person1<<" years old.";
        }
    }
    else if(person1 == person3)
    {
        if (person1 > person2)
        {
            cout<<"Person2 is the youngest at "<<person2<<" years old.\nPerson1 and Person3 are the oldest at, "<<person1<<" years old.";
        }
        else
        {
            cout<<"Person1 and Person3 are the youngest at, "<<person1<<" years old.\nPerson2 is the oldest at "<<person2<<" years old.";
        }
    }
    else if(person1 > person2 && person2 > person3)
    {
        cout<<"Person3 is the youngest at "<<person3<<" years old.\nPerson1 is the oldest at "<<person1<<" years old.";
    }
    else if(person1 > person2 && person3 > person2 && person1 > person3)
    {
        cout<<"Person2 is the youngest at "<<person2<<" years old.\nPerson1 is the oldest at "<<person1<<" years old.";
    }
    else if(person2 > person3 && person3 > person1)
    {
        cout<<"Person1 is the youngest at "<<person1<<" years old.\nPerson2 is the oldest at "<<person2<<" years old.";
    }
    else if(person2 > person3 && person1 > person3 && person2 > person1)
    {
        cout<<"Person3 is the youngest at "<<person3<<" years old.\nPerson2 is the oldest at "<<person2<<" years old.";
    }
    else if(person3 > person1 && person1 > person2)
    {
        cout<<"Person2 is the youngest at "<<person2<<" years old.\nPerson3 is the oldest at "<<person3<<" years old.";
    }
    else if(person3 > person1 && person2 > person1 && person3 > person2)
    {
        cout<<"Person1 is the youngest at "<<person1<<" years old.\nPerson3 is the oldest at "<<person3<<" years old.";
    }
    return 0;
}