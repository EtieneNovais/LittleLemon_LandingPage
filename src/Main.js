import hero from './images/hero.png';
import salad from './images/salad.png';
import bruchetta from './images/bruchetta.png';
import spaghetti from './images/spaghetti.png';
import ted from './images/ted.webp';
import barney from './images/barney.webp';
import lily from './images/lily.jpg';
import chef1 from './images/chef1.jpg';
import chef2 from './images/chef2.webp';

function Main(){
    return (
        <main>
            <section className="hero">
                <div className="hero-left">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Lorem ipsum dolor sit amet,<br/> 
                        consectetur adipiscing elit. Sed <br/>
                        tincidunt mi sed purus ullamcorper.
                    </p>
                    <button>Reserve a table</button>
                </div>
                <div className='hero-right'>
                    <img src={hero} alt="Hero"/>
                </div>
            </section>
            <section className='specials'>
                <div className='specials-header'>
                    <h1>This Week Specials</h1>
                    <button>Order Online</button>
                </div>
                <div className='specials-body'>
                    <article>
                        <img src={salad} alt="Salad"/>
                        <div className='specials-title'>
                            <h3>Greek Salad</h3>
                            <h4>$5.99</h4>
                        </div>
                        <p>
                        The famous greek salad with crispy lettuce , peppers, olives, and our chicago style teta cheese, guarnished with crunchy garlic  and rosemary croutons.
                        </p>
                        <h5>Order a Delivery<i class="fa-solid fa-person-biking"/></h5>
                    </article>
                    <article>
                        <img src={spaghetti} alt="Salad"/>
                        <div className='specials-title'>
                            <h3>Spaghetti</h3>
                            <h4>$10.99</h4>
                        </div>
                        <p>
                        The famous greek salad with crispy lettuce , peppers, olives, and our chicago style teta cheese, guarnished with crunchy garlic  and rosemary croutons.
                        </p>
                        <h5>Order a Delivery <i class="fa-solid fa-person-biking"/></h5>
                    </article>
                    <article>
                        <img src={bruchetta} alt="Salad"/>
                        <div className='specials-title'>
                            <h3>Bruchetta</h3>
                            <h4>$3.07</h4>
                        </div>
                        <p>
                        The famous greek salad with crispy lettuce , peppers, olives, and our chicago style teta cheese, guarnished with crunchy garlic  and rosemary croutons.
                        </p>
                        <h5>Order a Delivery <i class="fa-solid fa-person-biking"/></h5>
                    </article>
                </div>
            </section>
            <section className='testimonials'>
                <h1>Testimonials</h1>
                <div className='testimonials-body'>
                    <article>
                        <img src={ted} alt='Avatar'/>
                        <h2>Ted Mosby</h2>
                        <p>Lorem ipsum dolor sit<br/>
                         amet, consectetur <br/>
                         adipiscing elit.
                        </p>
                    </article>
                    <article>
                        <img src={lily} alt='Avatar'/>
                        <h2>Lily Aldrin</h2>
                        <p>Lorem ipsum dolor sit<br/>
                         amet, consectetur <br/>
                         adipiscing elit.
                        </p>
                    </article>
                    <article>
                        <img src={barney} alt='Avatar'/>
                        <h2>Barney Stinson</h2>
                        <p>Lorem ipsum dolor sit<br/>
                         amet, consectetur <br/>
                         adipiscing elit.
                        </p>
                    </article>
                </div>
            </section>
            <section className='about'>
                <div className='about-left'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Lorem  ligula malesuada augue, malesuada mattis odio felis in libero. In erat nisi, porttitor quis rhoncus et, elementum et felis. Morbi tincidunt porttitor efficitur. Aliquam non tincidunt neque, eu feugiat nisi. Etiam non hendrerit risus, quis blandit risus. Quisque finibus pulvinar elementum. Duis eget massa quis leo efficitur viverra. Curabitur in lorem tortor. Ut imperdiet metus maximus risus auctor tempor. Nulla facilisi. Proin ut ullamcorper eros. Praesent semper neque nec magna facilisis, in tincidunt enim consequat.</p>
                </div>
                <div className='about-right'>
                    <img src={chef1} className='chef1' alt='Chef'/>
                    <img src={chef2} className='chef2' alt='Cooking Chef'/>
                </div>
            </section>
        </main>
    );
}

export default Main;