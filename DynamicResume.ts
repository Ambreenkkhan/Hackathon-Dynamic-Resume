type PersonalInfo = {
    name: string;
    nationality: string;
    religion: string;
    gender: string;
};

type OtherInfo = {
    education: string;
    workExperience: string;
    skills: string;
};

const formButton = document.querySelector('button') as HTMLButtonElement;

formButton.addEventListener('click', () => {
    const name = (document.querySelector('#name') as HTMLInputElement).value;
    const nationality = (document.querySelector('#nationality') as HTMLInputElement).value;
    const religion = (document.querySelector('#religion') as HTMLInputElement).value;
    const gender = (document.querySelector('input[name="gender"]:checked') as HTMLInputElement)?.value || '';
    const education = (document.querySelector('#education') as HTMLTextAreaElement).value;
    const workExperience = (document.querySelector('#workExperience') as HTMLTextAreaElement).value;
    const skills = (document.querySelector('#skills') as HTMLTextAreaElement).value;

    const personalInfo: PersonalInfo = {
        name,
        nationality,
        religion,
        gender
    };

    const otherInfo: OtherInfo = {
        education,
        workExperience,
        skills
    };

    generateResume(personalInfo, otherInfo);
});

function generateResume(personalInfo: PersonalInfo, otherInfo: OtherInfo) {
    const resumeContainer = document.getElementById('resumeContainer')!;
    resumeContainer.innerHTML = `
       <div>
           <h2>Personal Information</h2>
           <p><strong>Name:</strong> ${personalInfo.name}</p>
           <p><strong>Nationality:</strong> ${personalInfo.nationality}</p>
           <p><strong>Religion:</strong> ${personalInfo.religion}</p>
           <p><strong>Gender:</strong> ${personalInfo.gender}</p>
       </div>
       <div>
           <h2>Education</h2>
           <p>${otherInfo.education}</p>
       </div>
       <div>
           <h2>Work Experience</h2>
           <p>${otherInfo.workExperience}</p>
       </div>
       <div>
           <h2>Skills</h2>
           <p>${otherInfo.skills}</p>
       </div>
    `;
}