$(document).ready(function() 
{
    let skillsArray = [];

    function updateSkillsList()
    {
        const $skillsList = $('#skillsList');
        $skillsList.empty(); 
        skillsArray.forEach((skill, index) =>
         {
            const $listItem = $('<li>').text(skill);
            const $editButton = $('<button>').text('Edit').on('click', () => editSkill(index));
            const $deleteButton = $('<button>').text('Delete').on('click', () => removeSkill(index));

            $listItem.append($editButton).append($deleteButton);
            $skillsList.append($listItem.hide().fadeIn(300));
        });
    }

    function addSkill(skill) 
    {
        if (skillsArray.includes(skill)) 
        {
            alert('Skill already exists!');
            return;
        }
        skillsArray.push(skill);
        updateSkillsList();
    }

    function editSkill(index) 
    {
        const newSkill = prompt('Edit skill:', skillsArray[index]);
        if (newSkill && newSkill !== skillsArray[index]) 
        {
            skillsArray[index] = newSkill;
            updateSkillsList();
        }
    }

    function removeSkill(index) 
    {
        skillsArray.splice(index, 1);
        updateSkillsList();
    }

    $('#skillInput').on('keydown', function(e) 
    {
        if (e.which === 13) 
        { 
            const skill = $(this).val().trim();
            if (skill) 
            {
                addSkill(skill);
                $(this).val(''); 
            } 
            else 
            {
                alert('Please enter a skill.');
            }
        } 
            else if (e.which === 27)
             {  
                 $(this).val('');
             }

    });


    const navItems = ["Skills", "Projects", "Education", "Experience" , "Contact"];

    function renderNavMenu() 
    {
        const $navMenu = $('#navMenu');
        navItems.forEach(item => 
        {
            const $menuItem = $('<li>').text(item).attr('id', item.toLowerCase());
        $menuItem.on('click', function() 
        {
            const targetSection = '#' + item.toLowerCase();
            $('html, body').animate
            ({
                scrollTop: $(targetSection).offset().top
            }, 600);
            });
            $navMenu.append($menuItem);
        });
    }

    // Call the function to render the navigation menu
    renderNavMenu();


     const projects = 
        [
            {
                title: 'Animal Search',
                description: 'Program that provides information about an animal when user inputs information such as location, classifications, and selects the specific animal from the search.',
                deadline: new Date("12/14/2024"),
                imageURL: 'https://picsum.photos/id/237/200/300'
            },
            {
                title: 'Trivia Games for Kids',
                description: ' Game program with trivia questions that provides 4 possible answers. Each player takes a turn and counts points earned by each correct answer.',
                deadline: new Date("01/10/2025"),
                imageURL: 'https://images.pexels.com/photos/250701/pexels-photo-250701.jpeg?auto=compress&cs=tinysrgb&w=400'
            },
            {
                title: 'Budget App',
                description: 'App that allows users to input spending data and digital or physical receipts. Every month it outputs statistics such as which stores the user spends the most at.',
                deadline: new Date("09/05/2023"),
                imageURL: 'https://picsum.photos/id/20/300/300'
            }
        ];
        function renderProjects(){
        const $projectCards = $('#projectCards');
        $projectCards.empty();
        
        projects.forEach(project => 
        {
            const $card = $(`
                <div class="project-card">
                    <img src="${project.imageURL}" alt="${project.title}">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <p>Deadline: ${project.deadline.toLocaleDateString()}</p>
                </div>
            `);
            $projectCards.append($card);
        });
    }

    function sortProjects() 
    {
        projects.sort((a, b) => a.deadline - b.deadline);
        renderProjects();
    }

    $('#sortProjectsBtn').on('click', sortProjects);

    renderProjects();
});

