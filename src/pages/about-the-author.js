import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'

import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/jay-clark.jpg'
import { Helmet } from "react-helmet"

const ATB = (props) => {

    return (
        <>
            <Layout>
            <Helmet title="About the Author | B. Jay Clark, Ph. D."/>
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Author`} />

                <div className="container">
                    <section className="body-author-contents columns">
                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img
                                    src={AuthorImg}
                                    alt="_main_author" />
                            </div>

                            <div className="heading-quote">
                                <h4>
                                    The key objective in this book is based on the thesis that local leaders need a transformation, that allows them to develop from local to global leaders. In this transformation, there are many complexities and the goal of the book is to help those going through the transformation from local to global to manage the complexities. There is not a solution to eliminate the global complexities, but we can find ways to manage them. For this reason, I use the word principle. There is not a clear prescription of managing complexities, but I believe you can find ways to describe how to manage complexities associated with global leadership.

                                </h4>
                                <span className="ata-span-fx">
                                    {/* Author's Quote */}
                                </span>
                            </div>
                        </div>

                        <article className="article-section column" id="author">
                            <p>
                            From over 17 years of consulting experience in the US and international markets, Jay has gained valuable insights on strategy development, management challenges and practices, and leadership development. Jay founded Sun Consulting Services and managed the offices in the U.S. and Hong Kong. Under Jay’s leadership, Sun Consulting was able to be a pioneer in China for the consulting industry by working with state-owned oil/gas company and a large publically traded Technology Company. Jay has developed a network of global partners in Asia, Africa, Europe, India, and the Middle East for Sun Consulting Services. He also opened the SCS office in Hong Kong.
                            </p>

                            <p>
                            From his experiences of working in emerging markets around the world, Jay developed the Nextgen Global Leaders Program. This program is for corporations and non-profit organizations that are transforming into global companies and need to identify, train and manage top talent in order to expand globally. Jay has worked with HR departments of both large and small organizations to link the corporate strategy with their leadership development program. In 2015, Jay founded Nextgen Global Leaders PTE LTD in Singapore to serve Asian organization in developing global leaders.
                            </p>

                            <p>
                            In addition to the training, Jay specializes in helping firms increase profits with global strategies that include Market Assessments, Market Entry, Global Channel & Distribution Management, Sourcing Products, and Investments. Jay is invited to speak frequently to organizations and MBA programs on managerial leadership, channel management, and the challenges of doing business with integrity around the world. He published his first book The Five Principles of Global Leadership in 2015.
                            </p>

                            <p>
                            Jay earned a Ph.D. in Leadership Studies from Tennessee Temple University in 2014. In 1999 he earned an MBA from Auburn University (U.S.A.) specializing in managerial leadership, and during his graduate training he studied at the Czech Management Center in Prague, Czech Republic. The research was on companies doing business in emerging markets. Jay also received a B.S. in Management from the University of Alabama at Birmingham (U.S.A).
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">B. Jay Clark, Ph. D.</span>
                                </span>
                            </p>

                        </article>
                    </section>
                </div>

            </Layout>
        </>
    )
}


export default ATB;
