var formButton = document.querySelector('button');
formButton.addEventListener('click', function () {
    var _a;
    var name = document.querySelector('#name').value;
    var nationality = document.querySelector('#nationality').value;
    var religion = document.querySelector('#religion').value;
    var gender = ((_a = document.querySelector('input[name="gender"]:checked')) === null || _a === void 0 ? void 0 : _a.value) || '';
    var education = document.querySelector('#education').value;
    var workExperience = document.querySelector('#workExperience').value;
    var skills = document.querySelector('#skills').value;
    var personalInfo = {
        name: name,
        nationality: nationality,
        religion: religion,
        gender: gender
    };
    var otherInfo = {
        education: education,
        workExperience: workExperience,
        skills: skills
    };
    generateResume(personalInfo, otherInfo);
});
function generateResume(personalInfo, otherInfo) {
    var resumeContainer = document.getElementById('resumeContainer');
    resumeContainer.innerHTML = "\n       <div>\n           <h2>Personal Information</h2>\n           <p><strong>Name:</strong> ".concat(personalInfo.name, "</p>\n           <p><strong>Nationality:</strong> ").concat(personalInfo.nationality, "</p>\n           <p><strong>Religion:</strong> ").concat(personalInfo.religion, "</p>\n           <p><strong>Gender:</strong> ").concat(personalInfo.gender, "</p>\n       </div>\n       <div>\n           <h2>Education</h2>\n           <p>").concat(otherInfo.education, "</p>\n       </div>\n       <div>\n           <h2>Work Experience</h2>\n           <p>").concat(otherInfo.workExperience, "</p>\n       </div>\n       <div>\n           <h2>Skills</h2>\n           <p>").concat(otherInfo.skills, "</p>\n       </div>\n    ");
}
