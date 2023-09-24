import React from "react";
import './oops.css'
import pdf from './Oops Notes.pdf'

const oops = () => {
    return (
        <div>
            <marquee className="marque"> <h1>Here we will talk about Object Oriented Programming(OOPS) </h1></marquee>
            <h2 className="heading">Aim of oops</h2>
            <p className="para">The main aim of Oops is to bind together the data and function that operate on them so that no other part of the code can access this data except this function.</p>
            <h2 className="heading">Class</h2>
            <p className="para">It is a user defined data types, which holds its own data members and the member function, which can be accessed and used by creating an instance of that class. </p>
            <h2 className="heading">Object</h2>
            <p className="para">When a Class is Defined no memory is allocated but when it is intiated (i.e., object is created) memory is allocated.</p>
            <div className="extra">
                <p>Following are the 4 pillers of Oops:</p>
                <li>Encapsulation</li>
                <li>Abstraction</li>
                <li>Polymorphism</li>
                <li>Inheritance</li>
            </div>
            <h2 className="heading">Encapsulation</h2>
            <p className="para">In oops, Encapsulation is defined as binding together the data and the functions that manipulated them.</p>
            <h2 className="heading">Abstraction</h2>
            <p className="para">It means displaying only essential information and hidinf the enternal details.</p>
            <div className="extra">
                <p>Abstraction can be done in two ways:</p>
                <li>Abstraction using class</li>
                <li>Abstraction using header files (math.h--pow())</li>
            </div>
            <h2 className="heading">Polymorphism</h2>
            <p className="para">In simple words, we can define Polymorphism as the ability of a message to be displayed in more that one form.</p>
            <div className="extra">
                <p>It is of two types:</p>
                <li>Compile Time Polymorphism</li>
                <li>Run Time Polymorphism</li>
            </div>
            <h2 className="heading">Compile Time Polymorphism</h2>
            <p className="para">It is achived at compile time and it is also known as early binding. Operator Overloading and Function overloading can be done at compile time</p>
            <h2 className="heading">Operator Overloading</h2>
            <p className="para">In C++, we can make operators work for user-defined classes. This means C++ has the ability to provide the operators with a special meaning for a data type, this ability is known as operator overloading. For example, we can overload an operator ‘+’ in a class like String so that we can concatenate two strings by just using +. Other example classes where arithmetic operators may be overloaded are Complex Numbers, Fractional Numbers, Big integers, etc.</p>
            <h2 className="heading">Function Overloading</h2>
            <p className="para"> It is a feature in C++ where 2 or more functions can have same name but different parameters.</p>
            <h2 className="heading">Run Time Polymorphism</h2>
            <p className="para">It can be achived at run time and it is also known as late binding. Function overriding occures when a derived class has a defination of one or more members of base class.</p>
            <h2 className="heading">Inheritance</h2>
            <p className="para">The capability of a class to derive properties and characteristics from another class is calles Inheritance.</p>
            <div className="extra">
                <p>It is of 5 types</p>
                <li>Single Inheritance</li>
                <li>Multiple Inheritance</li>
                <li>Multilevel Inheritance</li>
                <li>Hierarchical Inheritance</li>
                <li>Hybrid Inheritance</li>
            </div>
            <h2 className="heading">Single Inheritance</h2>
            <p className="para">It has 1 base class and 1 derived class</p>
            <h2 className="heading">Multiple Inheritance </h2>
            <p className="para">It has 1 base class and 2 or more derived class</p>
            <h2 className="heading">Multilevel Inheritance</h2>
            <p className="para">It has 1 or more base class and 1 derived class</p>
            <h2 className="heading">Hierarchical Inheritance</h2>
            <p className="para">1 Base class and 1 or more derived class</p>
            <h2 className="heading">Hybrid Inheritance</h2>
            <p className="para">Combination of 1 or more Types</p>
            <h2 className="heading">Constructors</h2>
            <p className="para">A constructors is a member function of a class which intilizes objects of a class. In C++ Constructors is automatically called when the object is created.</p>
            <div className="extra">
                <p>It has same Name as class itself and it does not have any return type.</p>
                <p>There are 3 types of Constructors</p>
                <li>Default Constructors(No Parameter Passed)</li>
                <li>Parametrized Constructors</li>
                <li>Copy Constructors</li>
            </div>
            <div className="note">
                <p>We can make Copy Constructors Private. We always pass references as a parameter in copy constructors because if we pass the value, then it would made to call copy constructors which becomes non-terminating.</p>
            </div>
            <h2 className="heading">Destructors</h2>
            <p className="para">Destructor is an instance member function that is invoked automatically whenever an object is going to be destroyed. Meaning, a destructor is the last function that is going to be called before an object is destroyed.</p>
            <h2 className="heading">Access Modifier</h2>
            <p className="para">It specifies the accessibility or scope of a field, method, constructor, or class. We can change the access level of fields, constructors, methods, and class by applying the access modifier on it.</p>
            <div className="extra">
                <p>There are 3 types of access modifiers in C++</p>
                <li>Public</li>
                <li>Private</li>
                <li>Protacted</li>
            </div>
            <h2 className="heading">Public</h2>
            <p className="para">It can be accessed by any class</p>
            <h2 className="heading">Protacted</h2>
            <p className="para">It is inaccessible outside the class but can be accessed by subclass of that class</p>
            <h2 className="heading">Private</h2>
            <p className="para">It is also inaccessible outside the class but can be accessed inside the class with the help of methods</p>
            <div className="note">
                <p>If we do not specify any access modifier inside the class then by default the access modifier for the member will be <strong>Private</strong></p>
            </div>
            <h2 className="heading">Friend Class</h2>
            <p className="para">A friend class can be access private and protacted members of others class in which it is declared as friend.</p>
            <h2 className="heading">Local Class in C++</h2>
            <p className="para">A class declared inside a function becomes local to that function and is called as local class. All the methods of the local class must be defined inside the class only.</p>
        </div>
    )
}

export default oops