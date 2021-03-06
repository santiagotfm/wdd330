const links = [
    {
        label: "Main Menu",
        url: "/wdd330/index.html"
    },
    {
        label: "To-Do App",
        url: "/wdd330/week6/todo.html"
    },
    {
        label: "Workout Exercises App",
        url: "/wdd330/workout/index.html"
    },
    {
        label: "Week 1 notes",
        url: "/wdd330/week1/index.html"
    },
    {
        label: "Week 2 notes",
        url: "/wdd330/week2/index.html"
    },
    {
        label: "Week 3 notes",
        url: "/wdd330/week3/index.html"
    },
    {
        label: "Week 4 notes",
        url: "/wdd330/week4/index.html"
    },
    {
        label: "Week 5 notes",
        url: "/wdd330/week5/index.html"
    },
    {
        label: "Week 6 notes",
        url: "/wdd330/week6/index.html"
    },
    {
        label: "Week 7 notes",
        url: "/wdd330/week7/index.html"
    },
    {
        label: "Week 8 notes",
        url: "/wdd330/week8/index.html"
    },
    {
        label: "Week 9 notes",
        url: "/wdd330/week9/index.html"
    },
    {
        label: "Week 10 notes",
        url: "/wdd330/week10/index.html"
    },
    {
        label: "Week 11 notes",
        url: "/wdd330/week11/client/week11.html"
    }
];

// get pointer to <ul> element
let ul = document.querySelector('ul');

links.forEach(
    link => {
        ul.innerHTML +=  
        `
            <li>
                <a href="${link.url}">${link.label}</a>
            </li>
        `;
    }
);