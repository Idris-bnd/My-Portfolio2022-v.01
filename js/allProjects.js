const AllProjectsDiv = document.getElementById('bottomApp--AllProjects')

const ProjectsArray = [
    [
        'TripO\'dvisor',
        '2022',
        '#leftSlider',
    ],
    [
        'nasaaa',
        '2021',
        'https://idris-bnd.github.io/Nasa-xD/',
    ],
    [
        'ouioui',
        '2020',
        '#leftSlider',
    ],
    [
        'twitter',
        '2022',
        '#leftSlider',
    ],
    [
        'facebook',
        '2022',
        '#mainHeader',
    ]

 ]

const allProject = {

    init: function(){

        for ( const singleProject of ProjectsArray) {
            
            const divForProject = document.createElement('div');
            divForProject.className = "bottomApp-ProjectBox";

            const linkForProject = document.createElement('a');
            linkForProject.className = 'projectLink';
            linkForProject.href = singleProject[2];
            linkForProject.target = "_blank"

            const h3ForProject = document.createElement('h3');
            h3ForProject.className = 'projectTitle';
            h3ForProject.textContent = singleProject[0];

            const pForProject = document.createElement('p');
            pForProject.className = 'projectDate';
            pForProject.textContent = singleProject[1];

            linkForProject.append(h3ForProject, pForProject);

            divForProject.append(linkForProject);

            AllProjectsDiv.append(divForProject)

            
        }

    }

}