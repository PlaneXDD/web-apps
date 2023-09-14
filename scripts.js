document.addEventListener('DOMContentLoaded', function() {
    const app = Vue.createApp({
        data() {
            return {
                developer: 
                {
                    name: 'Thien Phu',
                    dob: '2002-02-02',
                    address: 'Melbourn'
                },
                courseModules: 
                    [
                    { title: "Introduction to HTML", description: "Learn the basics of HTML." },
                    { title: "Introduction to CSS", description: "Dive into the world of styling." },
                    // Add more course modules here
                    ],
                skills: ['HTML', 'CSS', 'JavaScript'],
                projects: 
                    [
                    { title: "Project 1", description: "Description of project 1" },
                    { title: "Project 2", description: "Description of project 2" }
                    // Add more projects here
                    ],
                feedbackItems: 
                    [
                    {
                        name: 'John',
                        email: 'john@example.com',
                        message: 'Great website!'
                    }
                    // Add more feedback items here
                    ],
                contact: 
                {
                    phone: '+04123456789',
                    email: 'developer@email.com'
                },
                progressPercentage: 50,
                newSkill: '',
                newProject: 
                {
                    title: '',
                    description: ''
                },
                newFeedback: 
                {
                    name: '',
                    email: '',
                    message: ''
                },
                newMilestone: 
                {
                    title: '',
                    description: ''
                }
            };
        },
        methods: 
        {
            saveDeveloperInfo() 
            {
                console.log('Developer info saved!');
            },
            editMilestone(module) 
            {
                const newTitle = prompt("Edit milestone title:", module.title);
                if (newTitle) module.title = newTitle;
                
                const newDescription = prompt("Edit milestone description:", module.description);
                if (newDescription) module.description = newDescription;
            },
            editSkill(index) 
            {
                const newSkill = prompt("Edit skill:", this.skills[index]);
                if (newSkill) this.skills[index] = newSkill;
            },
            editProject(project) 
            {
                const newTitle = prompt("Edit project title:", project.title);
                if (newTitle) project.title = newTitle;
                
                const newDescription = prompt("Edit project description:", project.description);
                if (newDescription) project.description = newDescription;
            },
            editFeedback(index) 
            {
                const feedbackItem = this.feedbackItems[index];
                const newName = prompt("Edit feedback name:", feedbackItem.name);
                if (newName) feedbackItem.name = newName;

                const newEmail = prompt("Edit feedback email:", feedbackItem.email);
                if (newEmail) feedbackItem.email = newEmail;

                const newMessage = prompt("Edit feedback message:", feedbackItem.message);
                if (newMessage) feedbackItem.message = newMessage;
            },
            editContact() 
            {
                const newPhone = prompt("Edit contact phone:", this.contact.phone);
                if (newPhone) this.contact.phone = newPhone;

                const newEmail = prompt("Edit contact email:", this.contact.email);
                if (newEmail) this.contact.email = newEmail;
            },
            submitFeedback() 
            {
                console.log(`Feedback from ${this.feedback.name}: ${this.feedback.message}`);
                this.feedback = { name: '', email: '', message: '' };
            },
            backToTop() 
            {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            },
            addSkill() 
            {
                if (this.newSkill.trim() !== '') 
                {
                    this.skills.push(this.newSkill);
                    this.newSkill = '';
                }
            },
            addProject() 
            {
                if (this.newProject.title.trim() !== '' && this.newProject.description.trim() !== '') 
                {
                    this.projects.push({
                        title: this.newProject.title,
                        description: this.newProject.description
                    });
                    this.newProject.title = '';
                    this.newProject.description = '';
                }
            },
            addFeedback() 
            {
                if 
                    (
                    this.newFeedback.name.trim() !== '' &&
                    this.newFeedback.email.trim() !== '' &&
                    this.newFeedback.message.trim() !== ''
                ) 
                {
                    this.feedbackItems.push
                        ({
                        name: this.newFeedback.name,
                        email: this.newFeedback.email,
                        message: this.newFeedback.message
                        });
                    this.newFeedback.name = '';
                    this.newFeedback.email = '';
                    this.newFeedback.message = '';
                }
            },
            addMilestone() 
            {
                if (this.newMilestone.title.trim() !== '' && this.newMilestone.description.trim() !== '') 
                {
                    this.courseModules.push
                        ({
                        title: this.newMilestone.title,
                        description: this.newMilestone.description
                        });
                    this.newMilestone.title = '';
                    this.newMilestone.description = '';
                }
            }
        },
        watch: 
        {
            progressPercentage(value) 
            {
                if (value < 0) this.progressPercentage = 0;
                if (value > 100) this.progressPercentage = 100;
            }
        }
    });

    app.mount('#app');

    // Show the "Back to Top" button when scrolling
    window.addEventListener('scroll', function() {
        const backToTopButton = document.getElementById('backToTop');
        if (window.scrollY > 100) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
});
