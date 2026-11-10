import ScrollFillText from "./ui/ScrollFillText";

export default function Statement() {
  return (
    <section className="section statement">
      <div className="container statement-inner">
        <p className="kicker">Who we are</p>
        <ScrollFillText
          className="statement-text"
          text="We help businesses grow in the digital world through smart technology. From websites and business software to mobile apps, AI automation and digital marketing, we turn ideas into practical solutions that simplify work, connect customers and move businesses forward."
        />
      </div>
    </section>
  );
}
