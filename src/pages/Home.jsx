import Card from '../components/Home/Card';
import '../assets/css/home.css';

const Home = () => {
  return (
    <>
      <div className="home__hero hero-body is-flex is-align-items-center is-justify-content-center">
        <p className="has-text-white is-size-1 is-family-code">
          lufergonn
        </p>
      </div>
      <div className="home__content">
        <div className="columns pipy">
          <div className="column is-flex is-justify-content-center">
            <Card className="column" data={{
              img: "https://pypi.org/static/images/logo-large.6bdbb439.svg",
              imgu: "https://pypi.org/static/images/logo-large.6bdbb439.svg",
              name: "Luis Fernando",
              username: "lufergonn",
              url: "https://pypi.org/user/lufergonn/"
            }}
            />
          </div>
        </div>
        <div className="columns github">
          <div className="column is-flex is-justify-content-center">
            <Card className="column" data={{
              img: "https://github.githubassets.com/images/modules/logos_page/Octocat.png",
              imgu: "https://avatars.githubusercontent.com/u/47482967?v=4",
              name: "Luis Fernando",
              username: "lufergonn",
              url: "https://github.com/lufergonn"
            }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;