# Capstone
- **Backend**

- **By: Jason Kulak**
- **Name:**
- **Description: I am building a full CRUD application that will allow the user to meal prep for the week. The index page will show you the days of the week starting with Monday and ending on Sunday. When you click on a day of the week it will take you to a show page. The show page will have the day of the week at the top and then "Breakfast", "Lunch", and "Dinner" will be listed below with descriptions of the meals planned under each section. User will be able to update/delete meals on show page as needed.**

- **Github URL: https://github.com/JasonKulak/Meal_prep_frontend**

**Capstone**
    - **Deployed Website:**

## Dependencies -
- MongoDB
- mongoose
- express
- ejs

## Route Map
| Route Name  | Endpoint | Method | Description                 |
| ----------- | -------- | ------ | --------------------------- |
| Index |  /   | GET    | Renders days of the week on a page |
| Show | /:id | GET | Renders an individual day of the week with meals (breakfast, lunch, dinner) planned |
| Create |  /   | POST    | Renders a created meal(s) for that day of the week |
| Update | /:id   | PUT    | Updates data to meal on the day of the week Index by id |
| Delete | /:id   | DELETE   | Removes a meal/day of the week from the data array |

## ERD (Entity Relationship Diagram)
![Schema](https://imgur.com/1ecQZms.jpg)