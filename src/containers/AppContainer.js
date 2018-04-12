import { Container } from 'unstated';

class AppContainer extends Container {
  constructor() {
    super();

    this.state = {
      email: 'garethbk@gmail.com',
      phone: '540 454 7597',
      loadedRoute: 'Home',
      about: { name: 'Gareth Bk', img: 'https://s3.us-east-2.amazonaws.com/garethbk-portfolio/misc/gbk-chicken.jpg' },
      skills: [
        { skill: 'HTML5', img: 'https://s3.us-east-2.amazonaws.com/garethbk-portfolio/logos/html5-logo.png' },
        { skill: 'CSS3', img: 'https://s3.us-east-2.amazonaws.com/garethbk-portfolio/logos/css3-logo.png' },
        { skill: 'JavaScript', img: 'https://s3.us-east-2.amazonaws.com/garethbk-portfolio/logos/js-logo.png' },
        { skill: 'Sass', img: 'https://s3.us-east-2.amazonaws.com/garethbk-portfolio/logos/sass-logo.png' },
        { skill: 'Stylus', img: 'https://s3.us-east-2.amazonaws.com/garethbk-portfolio/logos/stylus-logo.png' },
        { skill: 'Node', img: 'https://s3.us-east-2.amazonaws.com/garethbk-portfolio/logos/nodejs-logo.png' },
        { skill: 'React', img: 'https://s3.us-east-2.amazonaws.com/garethbk-portfolio/logos/react-logo.png' },
        { skill: 'Redux', img: 'https://s3.us-east-2.amazonaws.com/garethbk-portfolio/logos/redux-logo.png' },
        { skill: 'Unstated', img: 'https://s3.us-east-2.amazonaws.com/garethbk-portfolio/logos/unstated-logo.png' },
        { skill: 'WordPress', img: 'https://s3.us-east-2.amazonaws.com/garethbk-portfolio/logos/wordpress-logo.png' },
        { skill: 'PHP', img: 'https://s3.us-east-2.amazonaws.com/garethbk-portfolio/logos/php-logo.png' },
        { skill: 'Phaser', img: 'https://s3.us-east-2.amazonaws.com/garethbk-portfolio/logos/phaser-logo.png' },
        { skill: 'MongoDB', img: 'https://s3.us-east-2.amazonaws.com/garethbk-portfolio/logos/mongodb-logo.png' },
        { skill: 'MySQL', img: 'https://s3.us-east-2.amazonaws.com/garethbk-portfolio/logos/mysql-logo.png' },
        { skill: 'Photoshop', img: 'https://s3.us-east-2.amazonaws.com/garethbk-portfolio/logos/photoshop-logo.png' }
      ],
      projects: [
        {
          name: 'Origin Portal',
          desc: 'Hired.com for bootcamp grads.',
          img: 'https://s3.us-east-2.amazonaws.com/garethbk-portfolio/projects/origin-portal/origin-portal-landing.jpg'
        },
        {
          name: 'Stravisualizer',
          desc: 'Strava data visualizer.',
          img: 'https://s3.us-east-2.amazonaws.com/garethbk-portfolio/projects/stravisualize/stravisualize.gif'
        },
        {
          name: '9 Lives',
          desc: 'A game about a cat.',
          img: 'https://s3.us-east-2.amazonaws.com/garethbk-portfolio/projects/nine-lives/nine-lives.jpg'
        },
        {
          name: 'Hardywood Park Craft Brewery',
          desc: 'WordPress brewery website.',
          img: 'https://s3.us-east-2.amazonaws.com/garethbk-portfolio/projects/hardywood/hardywood.jpg'
        }
      ]
    };
  }
  setRoute = input => {
    input = input.charAt(1).toUpperCase() + input.slice(2);
    this.setState({
      loadedRoute: input
    });
  };
}

export default AppContainer;
