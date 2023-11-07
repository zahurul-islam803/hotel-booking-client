import Container from "./CommonUi/Container";

const Newsletter = () => {
  return (
    <Container>
      <footer
        data-aos="fade-up"
        data-aos-duration="1000"
        className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% footer px-4 py-8 mt-24 mb-20 rounded-lg bg-gray-300 text-white"
      >
        <p className="mt-4 pr-14">
          Subscribe to our newsletter for the latest updates, exclusive deals,
          and special offers! Don't miss out on the best promotions and stay in
          the loop with our exciting news. Join our community today and be the
          first to know about all the fantastic opportunities we have in store
          for you. Subscribe now and elevate your experience with us!
        </p>

        <form>
          <header className="footer-title">Newsletter</header>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-white">
                Enter your email address
              </span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-secondary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
    </Container>
  );
};

export default Newsletter;