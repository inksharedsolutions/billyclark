import React from 'react'
import AuthorImg from '../../static/author/jay-clark.jpg'

const Author = () => {
    return (
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                    <div className="grid-child" id="author-contents">

                        <p>
                        From over 17 years of consulting experience in the US and international markets, Jay has gained valuable insights on strategy development, management challenges and practices, and leadership development. Jay founded Sun Consulting Services and managed the offices in the U.S. and Hong Kong. Under Jay’s leadership, Sun Consulting was able to be a pioneer in China for the consulting industry by working with state-owned oil/gas company and a large publically traded Technology Company. Jay has developed a network of global partners in Asia, Africa, Europe, India, and the Middle East for Sun Consulting Services. He also opened the SCS office in Hong Kong.
                        </p>

                        <h1 className="author-name-tag">
                            <span>B. Jay Clark, Ph. D.</span>
                            {/* <span>Clark</span> */}
                        </h1>

                        <span className="author-tagline">
                            Author & Writer
                        </span>

                    </div>

                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={AuthorImg} />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Author;