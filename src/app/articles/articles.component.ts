import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: Array<{
    writer: String,
    title: String,
    asset: String,
    body: String
  }>

  constructor() { 

    this.articles = [
      {
        writer: "James Bernard Udal",
        title: "How to study effectively",
        asset: "assets/HowToStudyEffectively.jpg",
        body: ` Studying is essential to our life. It is required to gain more understanding more of this world as we live our lives. 
<br>
Since we are studying, why not improve this process of learning so that we can maximize and reap more benefits out of it? With this article, I will explain on how you can improve your study efforts.
<br> <br>
Before I begin, the way we process information vary from person to person. Each of us learns differently. Some are:
<br>
-    Visual Learners, who learns more when the information is represented in a visual way
<br>
-    Auditory Learners, who learns more when the information can be heard.
<br><br>
And those are just a few types of learners. There are a whole lot more.
So, with that in mind, what I will be suggesting is a few tips that hopefully applies to all types of learners.
<br><br>
<b>Number #1: Manage your time.</b> <br>
It is without a doubt an important thing to have when studying. Time management is a crucial to making oneself productive. Therefore, you must manage your schedules well in order to make the most out of your day.
<br><br>
<b>Number #2: Seek challenges.</b> <br>
Challenge yourself in a specific field you are trying to study. Once you have gained sufficient information, you may try to set a challenge for yourself or find it online. Challenging yourself helps you to discover what flaws or gaps in your knowledge that you may have so that you can work on fixing them.
<br><br>
<b>Number #3: Seek motivation.</b> <br>
You cannot study if you don’t have the will to do so. Studying will feel like a chore and will significantly reduce your productivity and you will not learn much which results in a wasted effort and time. 
Lastly,
<br><br>
<b>Number #4: Take a break</b> <br>
Studying consumes energy. Every organism consumes energy when they are doing something, be that physical or mental. Therefore, it is important to replenish your energy reserves so you will be back for more.
<br><br>
And that is basically about it for this article. I hope you picked up something useful. I wish you luck in your studying journey. Remember to never stop learning and that knowledge is power.`
      },
      {
        writer: "Kevin Lin",
        title: "How to choose your course for college",
        asset: "assets/HowToChooseYourCourse.jpg",
        body: `It is a common thing that you hear about with your friends, or people that you know, or even popular influencers in the media. Not everyone knows what to do in their life, and not everyone knows what course is right for them, and heck, is college even for them?<br><br>
Well, I like to think that if you plan on pursuing college, make sure to take up a course that you are passionate about, do not just take up a course just because that field makes a lot of money. Many times, people who do not know what to do in life take up courses that they think makes a lot of money, and in turn, they end up hating everything about the field, and subsequently they are the type to drop out of college and waste a lot of money.<br><br>
In a personal anecdote, I wanted to pursue the field of psychology, but then the pandemic hit, and lots of jobs were rendered unessential. This made me think twice if I wanted to study psychology in the first place, sure it is a very interesting field that relates to humanities, however, if you want to build a career tackling the inner depths of psychology, you have to at most get a doctorate degree. That seems impossible in my situation, and it made me rethink my decision, and after a year of quarantine I have decided to take up computer science as my preferred course because personally, I know I can be passionate about this field, and I would be highly interested in the goings on of computers.<br><br>
With that said, it is alright if you take some time off before you commit your money and time into college, make sure that the course you want to take is what you like, and gives you purpose and satisfaction in life. If after a lengthy decision making, you decided that college is not for you, well there is absolutely no problem if you have a plan on what you will be doing as a career, I would say the key point is to always have a plan for your future, and please do invest in it, as the future version of yourself will appreciate you for it.
`
      },
      {
        writer: "James Bernard Udal",
        title: "Is Education Flawed?",
        asset: "assets/IsEducationFlawed.jpeg",
        body: `Uninterested children. Low exam scores. These are just some occurrences that happen to many learners. Some might say, “No way, he just needs some sleep”, or “He’s not taking enough vitamins”.<br><br>

But is it really the case? Did we also question the education that our children are receiving? Are we not observing our children enough if the child is having fun when learning something in school?<br><br>

You know, I believe that “fun” is an important factor in learning. When someone is having fun, their brain goes on a mode where they tend to be more receptive to information which increases their chances of retaining information.<br><br>

Yet we see some children coming home from school with a dreary look on their faces. Why is that, I wonder?<br><br>

Fun is not the only factor there is to learning. Mentors. Instructors. Did we also consider the mentors or instructors who is imparting their knowledge to the future generations? Are they rekindling their fire to learn, or are they putting the fire out, possibly leaving them to a bleak future?<br><br>

For instance, we see children who dislikes math. They see it as something to be fearful of, when in fact it is not. Mathematics may look intimidating, sure, but if we try to understand it and learn it for what it truly is as well as its meaning in our life, then it may not be so bad as we think it is.<br><br>

In fact, it may become one of our best friends we can rely on when it comes to practical tasks in our everyday lives.<br><br>

There is more to consider as this one is a topic that requires sufficient study in order to say that our education is flawed. But from the looks of it, it already looks flawed. The only question is how bad it is.<br><br>

Education shouldn’t be a chore, rather it should be a fun process for the younger generations who will soon succeed us in the future. We must light their fire inside them, so that may the future of our nation will look bright like the stars.`
      },
    ]

  }

  ngOnInit(): void {

  }

}
