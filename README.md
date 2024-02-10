# ScaleX Assignment
Objective: Build an application for a library of books. It will have 2 types of users. Admin user and a Regular user.

Sample Users for the login of both `users` and `admin` which are as below:
  >*  userName: scaleXtest1
  >*  password: 123456

  >*  userName: scaleXtest2
  >*   password: 123456

  >*  userName: scaleXadmin
  >*  password: 123456

### Url's for the tasks

#### API to login
```
http://localhost:8000/api/v1/auth/login
```
Parameters:
{
    "userName":"scaleXadmin",
    "password":"123456"
}
#### API to get Books from the csv as per the bearer token of the type of the user provided
```
http://localhost:8000/api/v1/common/home
```
#### API to add the Books to the csv 
```
http://localhost:8000/api/v1/admin/addBook
```
Parameters:
{
    "bookName":"asas",
    "author":"a",
    "year":2002
}
#### API to delete a particular book as per the name provided irrespective of the lower or upper case
```
http://localhost:8000/api/v1/admin/deleteBook
```
Parameters:
{
    "bookName":"Don quixote"
}
