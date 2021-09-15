import "./Home.css";
import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <Layout user={props.user}>
      <div className="home">
        <img
          className="hero-image"
          src="https://lh3.googleusercontent.com/V4mjBoL6zJcR4xoLClj-jvCqm4lvLCqS9Fj2GH2m_DUqC87Ku56l53OtY38O72nuqf1JlxXvi0k_MJXVkt7Kp7PwYIzgEHSV9VKMOpzO4oNnvTHvbHHkHL94EQ_Yh8btRWnflGNvmyg=h480"
          alt="Woman browsing clothes rack"
        />
        <h2 className="digitize-text">
          Digitize your wardrobe in 3 simple steps!
        </h2>
        <div className="instructions-container">
          <div className="step-1">
            <div className="number-and-icon">
              <h2 className="step-numbers">1</h2>
              <img
                className="step-icon"
                src="https://lh3.googleusercontent.com/oq1eDoSoZV_c0pjIhDhklWf9TmjtvWBDkCo68SBXN8yjD8JW15YWYdmEvvzXpUk_5wdRx8q-EwBpj3IWEH3kkAn98tzkTezlMiByetaxSGwcqwSZx3PqUHn9_ZM6GyFCK0Vb7B3BarE=s250-p-k"
                alt="Person taking a pic of denim jacket"
              />
            </div>
            <div className="heading-and-description">
              <h3 className="step-headings">Take a photo</h3>
              <p className="step-descriptions">
                Capture an image of your garment to be included in your virtual
                closet.
              </p>
            </div>
          </div>
          <div className="step-2">
            <div className="number-and-icon">
              <h2 className="step-numbers">2</h2>
              <img
                className="step-icon"
                src="https://lh3.googleusercontent.com/Oy0XJ7YTMagucznQcGoJ8J1gA3zjwxqZxxFV9c5AI9zfzeEEBRa3orIN3id997tJf7zVKv48c38R-Ydtko0KfzgaT4jaNSFekOGTnFg5ZpHNBN7DWSdotJIQv02DTdIg5KL4BaJ2498=s250-p-k"
                alt="Person typing on phone"
              />
            </div>
            <div className="heading-and-description">
              <h3 className="step-headings">Add details</h3>
              <p className="step-descriptions">
                Choose a category, color, and more so you can easily find your
                items later!
              </p>
            </div>
          </div>
          <div className="step-3">
            <div className="number-and-icon">
              <h2 className="step-numbers">3</h2>
              <img
                className="step-icon"
                src="https://lh3.googleusercontent.com/S6GYxrldqIpqNhfpATTcUD0kSiRH3yA4ONqKLt1h4xgu0MYl7orKAKKFrO4URcbHbSwpAlB1G8w0pMKH-X0rCH0h4KG5sVEJIJQMRbnDVDuylBY5pgkQ1S79-3YR9KFBD4ZKH_nZjYs=s250-p-k"
                alt="Woman browsing on phone"
              />
            </div>
            <div className="heading-and-description">
              <h3 className="step-headings">Browse your closet</h3>
              <p className="step-descriptions">
                <i>Et Voila!</i> Now you can put looks together from your
                wardrobe, no matter where you’re located!
              </p>
            </div>
          </div>
        </div>
        <Link to="/sign-up">
          <button className="start-button">Get Started!</button>
        </Link>
        <div className="marketing-container">
          <div className="why-section">
            <img
              className="why-img"
              src="https://lh3.googleusercontent.com/H0D_mfd5UXN3StgzKajBNWuIrpThnRRUhDdftEVUQl2ImoauKKiI2CWwHTPoDEb4ff9O10KqZ64ac4LhZm6yj5M_X8vDsXQxrgYMjuqnabdyG9G8bVP86bh9FrDFXLylKFJJEBEQ6DU=s250-p-k"
              alt="Our Why"
            />
            <p className="why-description">
              In 2017, 85% of all textitles were thrown away in the United
              States.
              <a
                href="https://www.bbc.com/future/article/20200710-why-clothes-are-so-hard-to-recycle"
                className="citations"
              >
                [1]
              </a>{" "}
              &nbsp; By 2030, global textile waste is expected to exceed 134
              million tons per year.
              <a
                href="https://www.epa.gov/facts-and-figures-about-materials-waste-and-recycling/textiles-material-specific-data"
                target="blank"
                className="citations"
              >
                [2]
              </a>{" "}
              &nbsp; Our mission is to help drastically decrease that number by
              empowering our users to reduce their waste by rewearing items in
              their wardrobe more frequently, and to invest in sustainable,
              durable clothing.
            </p>
          </div>
          <h1 className="slogan">Your wardrobe, in the palm of your hands.</h1>
          <p className="final-sell">
            The ability to access all of the items in your closet, directly from
            your mobile devices, means you’re less likely to spend money on
            items you already own that may be hiding in the back of your closet.
          </p>
          <p className="final-ask">
            You’re also more likely to assemble outfits more quickly and get out
            of the door faster! <br /> Start saving time, money, and ultimately,
            our planet today with enCapsule.
          </p>
        </div>
        <Link to="/sign-up">
          <button className="encapsulated-button">Get enCapsulated!</button>
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
