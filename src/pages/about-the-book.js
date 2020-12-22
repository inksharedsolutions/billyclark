import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/books/book-min.png'
import { Helmet } from "react-helmet"


const ATB = (props) => {

    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'b-jay-clark',
        config: { identifier: 12, slug }
    }


    return (
        <>
            <Layout>
            <Helmet title="About the Book | B. Jay Clark"/>
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div
                        className="container"
                        id="book-containers" >

                        <BookInfo
                            data={{
                                title: `The Five Principles of Global Leadership`,
                                spanFirst: `How to Manage the Complexities of Global Leadership`,
                                imgSrc: Book1,
                                id: 'global-leadership',
                                content:
                                    `
                                        <p>
                                        The type of global leadership described in the five principles of this book is effective in any organization. The context changes, but how you manage the context and complexities will determine the effectiveness of your leadership. Working with global organizations, I see many obstacles to being a successful global leader, such as organizational development, strategic planning, and effective communication. Most leaders I work with can manage and follow a task or directive, but few can create processes such as strategic plans in which they identify local challenges and create global opportunities. Why do many leaders have difficulty developing into global leaders? The issue is based in complexity.
                                        </p>

                                        <p>
                                        What makes global leadership so complex? Is it the well-known difficulties of cross-cultural communication or the inability to develop a global mindset? Although the answer is yes to both questions, they are not the main reasons. The complexity of global leadership is the most obvious when leaders have to make strategic decisions for an organization filled with crisis, conflict, and a diverse background of followers.
                                        </p>

                                        <p>
                                        By presenting the five principles of leadership in a global context, I look at the need, challenges, and opportunities for global leaders. The first task in understanding the impact of the five principles is to form a true definition of global leadership. The definition encompasses more than just selling products or managing teams across national boundaries.
                                        </p>

                                        <p>
                                        A global leader is a person who leads across cultures with systems, processes, and relationships in a complex environment.
                                        </p>

                                    `,

                                ebooks: {
                                    stratton: 'https://www.stratton-press.com/books/the-five-principles-of-global-leadership-how-to-manage-the-complexities-of-global-leadership/',
                                    barnes: 'https://www.barnesandnoble.com/w/the-five-principles-of-global-leadership-phd-b-jay-clark/1137465234?ean=9781648951398',
                                    amazon: 'https://www.amazon.com/Five-Principles-Global-Leadership-ebook/dp/B08FNXKRZY/ref=sr_1_1?dchild=1&keywords=9781648951398&qid=1597777631&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Five-Principles-Global-Leadership-Complexities/dp/1648951384/ref=sr_1_1?dchild=1&keywords=9781648951381&qid=1597777681&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/the-five-principles-of-global-leadership-phd-jay-clark/1122203792?ean=9781648951381',
                                    booksamillion: 'https://www.booksamillion.com/p/Five-Principles-Global-Leadership/B-Jay-Clark/9781648951381?id=8085199010587',
                                }
                            }}
                        />



                        <div className="commentSection">
                            <div id="disqus_thread">
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                        </div>
                    </div>
                </main>


            </Layout>
        </>
    )
}


export default ATB;