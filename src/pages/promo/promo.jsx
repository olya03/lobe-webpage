import "./promo.css";
export default function PromoPage() {
  return (
    <main className="PromoPage">
      <section className="first">
        <h1 className="heading">
          Lobe <span className="primary">Tour</span>
        </h1>
        <p className="fs24 blackDarker">
          Build your first machine learning model in ten
        </p>
        <p className="fs24 blackDarker">
          minutes. No code or experience required.
        </p>
        
      </section>
      <section className="second">
        <img src="https://www.lobe.ai/assets/tour/Video.jpg" alt="" width="1000px" className="br24"/>
      </section>
    </main>
  );
}
