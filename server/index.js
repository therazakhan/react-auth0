import express from 'express';
import jwt from 'express-jwt';
import cors from 'cors';
import jwks from 'jwks-rsa';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/courses', (req, res) => {
    let courses = [
        {
            "id": 1,
            "title": "Building an App with ReactJS and MeteorJS",
            "link": "https://www.lynda.com/React-js-tutorials/Building-App-React-js-MeteorJS/533228-2.html",
            "description": "Meteor and React are a powerhouse combination. Meteor gives you a fast, easy-to-use solution for data management across clients and servers, and React gives you a way to structure your app's UI from reusable components. The combination allows you to create your dream apps: dynamic, data driven, and cross-platform."
        },
        {
            "id": 2,
            "title": "Framer for UX design",
            "link": "https://www.lynda.com/FramerJS-tutorials/UX-Design-Tools-Framer/562923-2.html",
            "description": "You can use Framer to create JavaScript-based app prototypes quickly and easily. UX designers, engineers, interaction designers, and more can get refreshed on UX fundamentals in this course, and then dive into navigating Framer."
        }];
        res.send(courses);
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})