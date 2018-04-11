import { Container } from 'unstated';

class AppContainer extends Container {
  constructor() {
    super();

    this.state = {
      title: "I'm Gareth.  I like to build stuff.",
      tagline: 'I get excited about cooking, running, cycling, reading, and JavaScript. My favorite CSS color is ',
      email: 'garethbk@gmail.com',
      phone: '540 454 7597',
      loadedRoute: ''

      /* this.history.push({
          pathname: '/contact'
        }); */
    };
  }
  goToRoute = input => {
    this.setState({
      loadedRoute: input
    });
    //this.state.goToContact = this.state.goToContact.bind(this);
  };
}

export default AppContainer;
