import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  people: Array<{
    name: String,
    title?: String,
    asset: String,
    about: String,
    linkedin?: String,
    twitter?: String,
    github?: String
  }>

  constructor() { 
    this.people = [
      {
        name: "James Bernard Udal",
        asset: "assets/james.jpg",
        about: `
        A member of Connectere trying to make a small change through education in the whole wide world.
        He believes that with knowledge and wisdom invites a future of positive development and numerous opportunities <br><br>
        "Education is the most powerful weapon which you can use to change the world" - Nelson Mandela
        `
      },
      {
        name: "Kiana Francine Ylaya",
        asset: "assets/kiana.jpg",
        about: `
        A member of Connectre who aims to build a better foundation for education all around the globe with no one being left out.
        `
      },
      {
        name: "Kevin Lin",
        asset: "assets/kevin.jpg",
        about: `
        Born in the Philippines at July 30, 2001, he is a 1st year BSCS student and a member of Connectere. He aims to help people all across globe know about the importance of education, and the benefits of success that comes with it. Since the founding of Connectere, he had made contributions to help the organization attain it's goals by being an active member such as writing articles and participating to the organization podcast.
        `
      },
      {
        name: "Xhunn Anthony Raymundo",
        title: "Tech Lead",
        asset: "assets/xhunn.jpg",
        about: `
        An undergraduate who aims to innovate technology and progress Artifical Intelligence to make this world a better place. Moreover, spearheaded the fundamental development of the organization including the technological aspect. Lastly, he is a person who is in constant persuit of knowledge.
        <br> <br>
        You can see more of Xhunn in <a href="https://dormy.ph">Dormy.ph</a> as their Tech Lead and in Dart Coder as their Senior Machine Learning Engineer.
        `,
        linkedin: "https://www.linkedin.com/in/xhunn/",
        github: "https://github.com/xhunn",
        twitter: "https://twitter.com/xhunnr",
      },
      {
        name: "Beljohn Rev F. Luna",
        title: "Pussy Destroyer",
        asset: "assets/rev.jpg",
        about: `
        A devout believer that education is the most powerful weapon. Member of an organization that aims for the betterment of knowledge and opportunities for all. As we move forward with better education, I believe that all will benefit from the endeavor of knowledge.
        `
      },
    ]
  }

  ngOnInit(): void {
  }

}
