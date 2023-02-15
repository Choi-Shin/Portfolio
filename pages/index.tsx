import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></Script>
      <Script src="/assets/js/owl.carousel.min.js"></Script>
      <section className="hidden" id="intro">
        <canvas id="canvas"></canvas>
        <h1 className="announcement"></h1>
        <button className="watchAgain">다시 보기</button>
      </section>
      <section className="hidden" id="skills">
        <div className="pageContainer">
          <audio src="http://www.soundjay.com/mechanical/camera-shutter-click-08.mp3"></audio>
          <div className="skillContainer">
            <div className="skillHeader">
              <h2>Skills</h2>
            </div>
            <div className="skillList"></div>
          </div>
        </div>
      </section>
      <section className="hidden" id="profile">
        <div className="profileWrapper">
          <div className="profileHead"></div>
          <div className="profileContent"></div>
        </div>
      </section>
      <section className="hidden" id="projects">
        <div className="carouselTitle">
          <h2>프로젝트들</h2>
        </div>
        <div className="owl-carousel owl-theme"></div>
      </section>
      <section className="hidden" id="contact">
        <h2>연락처</h2>
        <div>
          <a href="tel:01051431026">01051431026</a>
        </div>
      </section>
      <Script type="module" src="app.js"></Script>
    </>
  );
}
