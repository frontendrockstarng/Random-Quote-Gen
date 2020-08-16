
function heading(){
    
var head = document.getElementById("head");
     head.style.transition = "ease-in 0.8s";
    head.style.color = "#ffffff";
}
window.onload = heading;

  
const btn = document.querySelector("#click")
btn.addEventListener("click", function(){
    let quoteProps = [
        ['A programming language is for thinking about programs, not for expressing programs you\'ve already thought of. It should be a pencil, not a pen.  ' + '<br /> <br />' + '  \xa0 \xa0 \xa0  '+' - Paul Graham'],
       
        ['Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday\'s code.  '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - Dan Salomon'],

         ['It\'s better to wait for a productive programmer to become available than it is to wait for the first available programmer to become productive. '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - Steve McConnell'],

         ['One of my most productive days was throwing away 1000 lines of code.  '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - Ken Thompson'],
         
         ['Without requirements or design, programming is the art of adding bugs to an empty text file.  '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - Leinad Colt'],
         
         ['One man\'s scrappy software is another man\'s full time job..  '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - Mr. Norms'],


         
         ['Walking on water and developing software from a specification are easy if both are frozen.  '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - Humour Dev'],
         
         ['Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it. '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - Rajanand'],
         
         ['System programmers are the high priests of a low cult. '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - Robert S. Barton'],
         
         ['.  I don\'t care if it works on your machine! We are not shipping your machine!  '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - Vidiu Platon'],
         
         ['Software undergoes beta testing shortly before it\’s released .Beta is latin for \"still doesn\'t work " '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - Humor Dev'],
         
         ['Any fool can write code that a computer can understand. Good programmers write code that humans can understand.  '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - Martin Fowler'],
         
         ['First, solve the problem. Then, write the code.  '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - John Johnson'],
         
         ['Experience is the name everyone gives to their mistakes. '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - Oscar Wilde'],
         
         ['Java is to JavaScript what car is to Carpet.  '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - Chris Heilmann'],
        
         
         ['Ruby is rubbish! PHP is phpantastic! '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - Nikita Popov'],
         
         ['Code is like humor. When you have to explain it, it’s bad. '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - Cory House'],
         
         ['Fix the cause, not the symptom.'
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - Steve Maguire'],
         
         ['Optimism is an occupational hazard of programming: feedback is the treatment. '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - Kent Beck'],

         
         ['When to use iterative development? You should use iterative development only on projects that you want to succeed. '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - Martin Fowler'],
         
         ['Simplicity is the soul of efficiency.'
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - Austin Freeman'],
         
         ['Before software can be reusable it first has to be usable. '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - Ralph Johnson'],
         
         ['Make it work, make it right, make it fast.  '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - Kent Beck'],
         
         ['Computers are useless. They can only give you answers. '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - Pablo Picasso'],
         
         ['Computers are like bikinis. They save people a lot of guesswork.  '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - Sam Ewing'],
         
         ['They have computers, and they may have other weapons of mass destruction. '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - Janet Reno'],
         
         ['That\’s what’s cool about working with computers.  They don\’t argue, they remember everything, and they don\’t drink all your beer.  '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - Paul Leary'],
         
         ['If the automobile had followed the same development cycle as the computer, a Rolls-Royce would today cost $100, get a million miles per gallon, and explode once a year, killing everyone inside.  '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - Robert X. Cringely'],
         
         ['Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves. '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' -Alan Kay'],
         
         ['True innovation often comes from the small startup who is lean enough to launch a market but lacks the heft to own it. '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - Timm Martin'],
         
         ['Complexity kills. It sucks the life out of developers, it makes products difficult to plan, build and test, it introduces security challenges, and it causes end-user and administrator frustration. '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - Ray Ozzie'],
         
         ['There are two ways of constructing a software design.  One way is to make it so simple that there are obviously no deficiencies. And the other way is to make it so complicated that there are no obvious deficiencies.  '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - C.A.R. Hoare'],
         
         ['The function of good software is to make the complex appear to be simple. '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - Grady Booch'],
         
         ['Just remember: you\’re not a dummy, no matter what those computer books claim. The real dummies are the people who–though technically expert–couldn\’t design hardware and software that\’s usable by normal consumers if their lives depended upon it. '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - Walter Mossberg'],
         
         ['Software suppliers are trying to make their software packages more ‘user-friendly’…  Their best approach so far has been to take all the old brochures and stamp the words \‘user-friendly\’ on the cover  '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - Bill Gates'],
         
         ['Programmers are in a race with the Universe to create bigger and better idiot-proof programs, while the Universe is trying to create bigger and better idiots. So far the Universe is winning. '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - Rich Cook'],
         
         ['Most of you are familiar with the virtues of a programmer. There are three, of course: laziness, impatience, and hubris.'
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - Larry Wall'],
         
         ['The trouble with programmers is that you can never tell what a programmer is doing until it\'s too late. '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - Seymour Cray'],
  
         
         ['Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter. '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - Eric Raymond'],
         
         ['Measuring programming progress by lines of code is like measuring aircraft building progress by weight. '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - Bill Gates'],
         
         ['First learn computer science and all the theory. Next develop a programming style. Then forget all that and just hack. '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - George Carrette'],
         
         ['PHP is a minor evil perpetrated and created by incompetent amateurs, whereas Perl is a great and insidious evil perpetrated by skilled but perverted professionals. '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - Jon Ribbens'],
         
         ['First, solve the problem. Then, write the code. '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - John Johnson'],
         
         ['To iterate is human, to recurse divine.'
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - L. Peter Deutsch'],
         
         ['The best thing about a boolean is even if you are wrong, you are only off by a bit. '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - Anonymous'],
         
         ['There are only two kinds of programming languages: those people always bitch about and those nobody uses.  '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - Bjarne Stroustrup'],
         
         ['It is practically impossible to teach good programming style to students that have had prior exposure to BASIC.  As potential programmers, they are mentally mutilated beyond hope of regeneration. '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - E. W. Dijkstra'],
         
         ['There is no programming language–no matter how structured–that will prevent programmers from making bad programs.  '
         + '<br /> <br />' + '  \xa0 \xa0 \xa0  '
         +' - Larry Flon'],
    ];

        
    let randmcolors=['#1c8f12','#f0ce10', '#e65218', '#5555c7', '#ff3b3b', '#088095', '#042227',
    '#041327', '#004aac', '#2000ac', '#261f46', '#3b1f46', '#45035f', '#5f0326', '#361522', '#700909',
    '#940404', '#945104', '#865318', '#e3eb00', '#006128', '#006161', '#0081d8', '#232b4d', '#351d61', '#ad265e'
  ];
   
    var man = document.querySelector(".thequote")
    const colorchange =  document.querySelector("body")
    var quotemark = document.querySelector(".quotemark")
    const randmSelect = Math.floor(Math.random()*quoteProps.length);
    const randmcolorselect = Math.floor(Math.random()*randmcolors.length);

    man.innerHTML = quoteProps[randmSelect];
    man.style.color = randmcolors[randmcolorselect];
    man.style.borderLeftColor = randmcolors[randmcolorselect];
    colorchange.style.backgroundColor = randmcolors[randmcolorselect];
    btn.style.backgroundColor = randmcolors[randmcolorselect];
    quotemark.style.color = randmcolors[randmcolorselect];
    
  
  colorchange.classList.add('colorchanges');
  const colorchange2 =  document.querySelector(".container");

})




