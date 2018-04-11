import { Container } from 'unstated';

class AppContainer extends Container {
  constructor() {
    super();

    this.state = {
      title: "I'm Gareth.  I like to build stuff.",
      tagline: 'I get excited about cooking, running, cycling, reading, and JavaScript. My favorite CSS color is ',
      email: 'garethbk@gmail.com',
      phone: '540 454 7597',
      loadedRoute: '/'
    };
  }
  setRoute = input => {
    this.setState({
      loadedRoute: input
    });
  };
}

export default AppContainer;
