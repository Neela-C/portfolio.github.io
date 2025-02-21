const sketches = {
    default: `
    `,
    sketchAboutMe: `
O
/|\\
/ \\


    `,
    sketchExperiences: `
O
\\|/
|
/ \\
___________________
| _______________ |
| |XXXXXXXXXXXXX| |
| |XXXXXXXXXXXXX| |
| |XXXXXXXXXXXXX| |
| |XXXXXXXXXXXXX| |
| |XXXXXXXXXXXXX| |
|_________________|
_[_______]_
___[___________]___
|         [_____] []|__
|         [_____] []|  \\__
L___________________J     \\
___________________      /\\
/###################\\    (__)
    `,
    sketchEducation: `
___
|_|
O
\\|_
|
/ \\
__...--~~~~~-._   _.-~~~~~--...__
//               \\V/               \\
//                 |                 \\
//__...--~~~~~~-._  |  _.-~~~~~~--...__\\
//__.....----~~~~._\\ | /_.~~~~----.....__\\
====================\\|/===================
'---'
    `,
    sketchPublications: `

/'\\    __________
( ' )  ()_________)
  \\'/    \\ ~~~~~~~~ \\
    \\      \\ ~~~~~~   \\
     ==      \\__________\\
    (__)    ()__________)

   O
  /|\\
  / \\
    `,
    sketchProjects: `

__/\\__
\\    /
__/\\__/    \\__/\\__
\\                /
/_      O       _\\
\\   /|\\     /
__/    /\\     \\__
\\                /
/_  __      __  _\\
\\/  \\    /  \\/
/_  _\\
\\/
O
<|>
/ \\
    `,
    sketchSkills: `


/\\ /\\
((ovo))
():::()
\V\V\V



 _  _    ___  _  _
 | || |  / _ \\| || |
  | || |_| | | | || |_
   |__   _| |_| |__   _|
    |_|  \\___/   |_|


             _      __                       _
 _ __   ___ | |_   / _| ___  _   _ _ __   __| |
| '_ \\ / _ \\| __| | |_ / _ \\| | | | '_ \\ / _' |
| | | | (_) | |_  |  _| (_) | |_| | | | | (_| |
|_| |_|\\___/ \\__| |_|  \\___/ \\__,_|_| |_|\\__,_|
    `,
    sketchHobbies: `
___
o  | |
|^=| |
I\\,J-|
    `,
};

function toggleSection(id, sketchKey) {
    var section = document.getElementById(id).parentElement;
    var sketchElement = document.getElementById('sketch');
    if (section.classList.contains('active')) {
        section.querySelector('.section-content').style.maxHeight = '0';
        section.querySelector('.section-content').style.opacity = '0';
        setTimeout(function() {
            section.classList.remove('active');
            sketchElement.innerText = sketches.default;
        }, 500); // Match the transition duration
    } else {
        var activeSections = document.querySelectorAll('.content .section.active');
        activeSections.forEach(function (activeSection) {
            activeSection.querySelector('.section-content').style.maxHeight = '0';
            activeSection.querySelector('.section-content').style.opacity = '0';
            setTimeout(function() {
                activeSection.classList.remove('active');
            }, 500); // Match the transition duration
        });
        section.classList.add('active');
        section.querySelector('.section-content').style.maxHeight = section.querySelector('.section-content').scrollHeight + 'px';
        section.querySelector('.section-content').style.opacity = '1';
        sketchElement.innerText = sketches[sketchKey];
    }
}

function toggleSidebar() {
    document.querySelector(".sidebar").classList.toggle("active");
}
