import { Container } from 'unstated';

class AppContainer extends Container {
  constructor() {
    super();

    this.state = {
      email: 'garethbk@gmail.com',
      phone: '540 454 7597',
      loadedRoute: 'Home',
      loadedProjects: [],
      loadedProject: {
        name: 'Nothing Here!',
        desc: {
          0: 'You have found a route with no info!',
          1: 'Go ahead and go back.',
          2: 'There is nothing to see here...'
        },
        img: 'N/A',
        url: '../../',
        github_url: '',
        images: [1, 2, 3]
      },
      skillDisplay: false,
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
        { skill: 'WordPress', img: 'https://s3.us-east-2.amazonaws.com/garethbk-portfolio/logos/wordpress-logo.png' },
        { skill: 'PHP', img: 'https://s3.us-east-2.amazonaws.com/garethbk-portfolio/logos/php-logo.png' },
        { skill: 'Phaser', img: 'https://s3.us-east-2.amazonaws.com/garethbk-portfolio/logos/phaser-logo.png' },
        { skill: 'MongoDB', img: 'https://s3.us-east-2.amazonaws.com/garethbk-portfolio/logos/mongodb-logo.png' },
        { skill: 'MySQL', img: 'https://s3.us-east-2.amazonaws.com/garethbk-portfolio/logos/mysql-logo.png' },
        { skill: 'Photoshop', img: 'https://s3.us-east-2.amazonaws.com/garethbk-portfolio/logos/photoshop-logo.png' }
      ]
    };
  }

  selectProject = (name, desc_one, desc_two, desc_three, img, url, github_url, images) => {
    this.setState({
      loadedProject: {
        name: name,
        desc: {
          0: desc_one,
          1: desc_two,
          2: desc_three
        },
        img: img,
        url: url,
        github_url: github_url,
        images: images
      }
    });
    console.log(this.state.loadedProject);
  };

  setRoute = input => {
    if (input === undefined) {
      input = '/';
    }
    if (input !== '/') {
      input = input.charAt(1).toUpperCase() + input.slice(2);
    }
    this.setState({
      loadedRoute: input
    });
  };

  toggleSkillDisplay = input => {
    this.setState({
      skillDisplay: !this.state.skillDisplay
    });
  };
}

export default AppContainer;
